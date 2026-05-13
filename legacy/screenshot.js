const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('http://localhost:8000');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: '/home/user/sambandha/preview-home.png', fullPage: false });

    // Scroll to menu
    await page.evaluate(() => document.getElementById('menu').scrollIntoView());
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/home/user/sambandha/preview-menu.png' });

    // Scroll to gallery
    await page.evaluate(() => document.getElementById('gallery').scrollIntoView());
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/home/user/sambandha/preview-gallery.png' });

    // Mobile view
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:8000');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: '/home/user/sambandha/preview-mobile.png' });

    await browser.close();
    console.log('Screenshots saved!');
})();
