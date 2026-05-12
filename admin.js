let reservations = [];
let contacts = [];
let filteredReservations = [];
let filteredContacts = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadReservations();
    loadContacts();
    setupEventListeners();
    setupAutoRefresh();
    updateLastUpdated();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            switchSection(section);
        });
    });

    // Search
    document.getElementById('searchReservations').addEventListener('input', filterReservations);
    document.getElementById('searchContacts').addEventListener('input', filterContacts);

    // Refresh buttons
    document.getElementById('refreshBtn').addEventListener('click', loadReservations);
    document.getElementById('refreshContactsBtn').addEventListener('click', loadContacts);

    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });

    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
}

// Switch sections
function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
    });

    // Remove active from nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(`${sectionName}-section`);
    if (section) {
        section.classList.add('active');
    }

    // Mark nav item as active
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
}

// Load reservations
async function loadReservations() {
    try {
        const response = await fetch('/api/reservations');
        reservations = await response.json();
        filteredReservations = [...reservations];
        renderReservations();
        updateStats();
        updateLastUpdated();
    } catch (error) {
        console.error('Error loading reservations:', error);
        showError('Failed to load reservations');
    }
}

// Load contacts
async function loadContacts() {
    try {
        const response = await fetch('/api/contacts');
        contacts = await response.json();
        filteredContacts = [...contacts];
        renderContacts();
        updateLastUpdated();
    } catch (error) {
        console.error('Error loading contacts:', error);
        showError('Failed to load contacts');
    }
}

// Render reservations table
function renderReservations() {
    const tbody = document.getElementById('reservationsTable');

    if (filteredReservations.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="empty-state">No reservations found</td></tr>';
        return;
    }

    tbody.innerHTML = filteredReservations.map(r => `
        <tr>
            <td>#${r.id}</td>
            <td>${r.name}</td>
            <td><a href="mailto:${r.email}">${r.email}</a></td>
            <td>${r.phone}</td>
            <td>${formatDate(r.date)}</td>
            <td>${r.time}</td>
            <td>${r.guests}</td>
            <td>
                <span class="status-badge status-${r.status}">
                    ${r.status}
                </span>
            </td>
            <td>${formatDateTime(r.created_at)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-sm btn-view" onclick="viewReservation(${r.id})">View</button>
                    <button class="btn-sm btn-delete" onclick="deleteReservation(${r.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render contacts table
function renderContacts() {
    const tbody = document.getElementById('contactsTable');

    if (filteredContacts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No contact messages found</td></tr>';
        return;
    }

    tbody.innerHTML = filteredContacts.map(c => `
        <tr>
            <td>#${c.id}</td>
            <td>${c.name}</td>
            <td><a href="mailto:${c.email}">${c.email}</a></td>
            <td>${c.subject}</td>
            <td>${c.message.substring(0, 50)}...</td>
            <td>${formatDateTime(c.created_at)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-sm btn-view" onclick="viewContact(${c.id})">View</button>
                    <button class="btn-sm btn-delete" onclick="deleteContact(${c.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// View reservation details
function viewReservation(id) {
    const reservation = reservations.find(r => r.id === id);
    if (!reservation) return;

    const modal = document.getElementById('reservationModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-body-content">
            <div class="modal-value">
                <div class="modal-label">ID</div>
                <div>#${reservation.id}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Name</div>
                <div>${reservation.name}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Email</div>
                <div><a href="mailto:${reservation.email}">${reservation.email}</a></div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Phone</div>
                <div>${reservation.phone}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Date</div>
                <div>${formatDate(reservation.date)}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Time</div>
                <div>${reservation.time}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Number of Guests</div>
                <div>${reservation.guests}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Special Requests</div>
                <div>${reservation.requests || 'None'}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Status</div>
                <select class="status-select" id="statusSelect">
                    <option value="pending" ${reservation.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="confirmed" ${reservation.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="completed" ${reservation.status === 'completed' ? 'selected' : ''}>Completed</option>
                    <option value="cancelled" ${reservation.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </div>
            <div class="modal-value">
                <div class="modal-label">Created</div>
                <div>${formatDateTime(reservation.created_at)}</div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn-primary" onclick="updateReservationStatus(${id})">Update Status</button>
            <button class="btn-secondary" onclick="closeModal('reservationModal')">Close</button>
        </div>
    `;

    modal.classList.add('show');
}

// View contact details
function viewContact(id) {
    const contact = contacts.find(c => c.id === id);
    if (!contact) return;

    const modal = document.getElementById('contactModal');
    const modalBody = document.getElementById('contactModalBody');

    modalBody.innerHTML = `
        <div class="modal-body-content">
            <div class="modal-value">
                <div class="modal-label">ID</div>
                <div>#${contact.id}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Name</div>
                <div>${contact.name}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Email</div>
                <div><a href="mailto:${contact.email}">${contact.email}</a></div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Subject</div>
                <div>${contact.subject}</div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Message</div>
                <div style="white-space: pre-wrap; background: #f5f5f5; padding: 1rem; border-radius: 4px;">
                    ${contact.message}
                </div>
            </div>
            <div class="modal-value">
                <div class="modal-label">Created</div>
                <div>${formatDateTime(contact.created_at)}</div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" onclick="closeModal('contactModal')">Close</button>
        </div>
    `;

    modal.classList.add('show');
}

// Update reservation status
async function updateReservationStatus(id) {
    const status = document.getElementById('statusSelect').value;
    try {
        const response = await fetch(`/api/reservations/${id}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });

        if (response.ok) {
            closeModal('reservationModal');
            loadReservations();
            showSuccess('Reservation status updated');
        }
    } catch (error) {
        console.error('Error updating status:', error);
        showError('Failed to update status');
    }
}

// Delete reservation
async function deleteReservation(id) {
    if (!confirm('Are you sure you want to delete this reservation?')) return;

    try {
        const response = await fetch(`/api/reservations/${id}`, { method: 'DELETE' });
        if (response.ok) {
            loadReservations();
            showSuccess('Reservation deleted');
        }
    } catch (error) {
        console.error('Error deleting reservation:', error);
        showError('Failed to delete reservation');
    }
}

// Delete contact
async function deleteContact(id) {
    if (!confirm('Are you sure you want to delete this contact message?')) return;

    try {
        const response = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
        if (response.ok) {
            loadContacts();
            showSuccess('Contact deleted');
        }
    } catch (error) {
        console.error('Error deleting contact:', error);
        showError('Failed to delete contact');
    }
}

// Filter reservations
function filterReservations() {
    const searchTerm = document.getElementById('searchReservations').value.toLowerCase();
    filteredReservations = reservations.filter(r =>
        r.name.toLowerCase().includes(searchTerm) ||
        r.email.toLowerCase().includes(searchTerm)
    );
    renderReservations();
}

// Filter contacts
function filterContacts() {
    const searchTerm = document.getElementById('searchContacts').value.toLowerCase();
    filteredContacts = contacts.filter(c =>
        c.name.toLowerCase().includes(searchTerm)
    );
    renderContacts();
}

// Update statistics
function updateStats() {
    const total = reservations.length;
    const pending = reservations.filter(r => r.status === 'pending').length;
    const confirmed = reservations.filter(r => r.status === 'confirmed').length;
    const completed = reservations.filter(r => r.status === 'completed').length;

    document.getElementById('totalReservations').textContent = total;
    document.getElementById('pendingReservations').textContent = pending;
    document.getElementById('confirmedReservations').textContent = confirmed;
    document.getElementById('completedReservations').textContent = completed;
}

// Auto-refresh every 30 seconds
function setupAutoRefresh() {
    setInterval(() => {
        loadReservations();
        loadContacts();
    }, 30000);
}

// Update last updated time
function updateLastUpdated() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('lastUpdated').textContent = time;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Format date and time
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Show success notification
function showSuccess(message) {
    console.log('✓', message);
    alert(message);
}

// Show error notification
function showError(message) {
    console.error('✗', message);
    alert('Error: ' + message);
}
