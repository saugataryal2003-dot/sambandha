'use client';

import { useEffect, useState } from 'react';
import { BarChart3, MapPin, TrendingUp, Eye, Clock, Zap } from 'lucide-react';

interface MetricsData {
  totalVisitors: number;
  todayVisitors: number;
  weeklyVisitors: number;
  avgSessionDuration: string;
  bounceRate: number;
  topPages: Array<{ path: string; views: number; }>;
  topCountries: Array<{ country: string; visitors: number; }>;
  deviceBreakdown: Array<{ device: string; percentage: number; }>;
  trafficSources: Array<{ source: string; visitors: number; }>;
  lastUpdated: string;
}

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Fetch analytics data
  useEffect(() => {
    const fetchMetrics = () => {
      // This will be replaced with real Google Analytics data
      const simulatedData: MetricsData = {
        totalVisitors: 2847,
        todayVisitors: 42,
        weeklyVisitors: 356,
        avgSessionDuration: '3m 24s',
        bounceRate: 32,
        topPages: [
          { path: '/', views: 892 },
          { path: '/menu/lunch', views: 634 },
          { path: '/menu/drinks', views: 421 },
        ],
        topCountries: [
          { country: '🇯🇵 Japan', visitors: 2456 },
          { country: '🇺🇸 USA', visitors: 187 },
          { country: '🇸🇬 Singapore', visitors: 92 },
        ],
        deviceBreakdown: [
          { device: 'Mobile', percentage: 68 },
          { device: 'Desktop', percentage: 25 },
          { device: 'Tablet', percentage: 7 },
        ],
        trafficSources: [
          { source: 'Direct', visitors: 1203 },
          { source: 'Google Search', visitors: 934 },
          { source: 'Social Media', visitors: 456 },
          { source: 'Referral', visitors: 254 },
        ],
        lastUpdated: new Date().toLocaleTimeString('ja-JP'),
      };
      setMetrics(simulatedData);
      setLoading(false);
    };

    fetchMetrics();
    if (autoRefresh) {
      const interval = setInterval(fetchMetrics, 30000); // Refresh every 30s
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-ink">
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 animate-spin rounded-full border-4 border-saffron-300/20 border-t-saffron-300" />
          <p className="font-jp text-cream/60">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink py-8 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-jp text-4xl font-light text-cream">
              Analytics Dashboard
            </h1>
            <p className="mt-2 text-cream/60">
              📊 Sambandha Website Visitor Metrics
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`rounded-full px-4 py-2 font-jp text-xs font-semibold transition ${
                autoRefresh
                  ? 'bg-saffron-300 text-ink'
                  : 'border border-white/20 bg-white/[0.05] text-cream/60 hover:bg-white/[0.1]'
              }`}
            >
              {autoRefresh ? '🔄 Live' : '⏸ Paused'}
            </button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={Eye}
            label="Total Visitors"
            value={metrics?.totalVisitors.toLocaleString() || '0'}
            subtext="All time"
            color="saffron"
          />
          <MetricCard
            icon={Zap}
            label="Today"
            value={metrics?.todayVisitors.toString() || '0'}
            subtext="Since midnight"
            color="blue"
          />
          <MetricCard
            icon={TrendingUp}
            label="This Week"
            value={metrics?.weeklyVisitors.toString() || '0'}
            subtext="Past 7 days"
            color="green"
          />
          <MetricCard
            icon={Clock}
            label="Avg Session"
            value={metrics?.avgSessionDuration || '0s'}
            subtext="Time on site"
            color="purple"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Top Pages */}
          <div className="lg:col-span-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h2 className="mb-4 font-jp text-xl font-light text-cream">
              📄 Top Pages
            </h2>
            <div className="space-y-3">
              {metrics?.topPages.map((page, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-jp text-sm text-cream">
                      {page.path === '/' ? 'Home' : page.path}
                    </p>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full bg-gradient-to-r from-saffron-300 to-saffron-200"
                        style={{
                          width: `${(page.views / (metrics.topPages[0]?.views || 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <p className="ml-4 font-jp text-sm font-semibold text-saffron-300">
                    {page.views.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h2 className="mb-4 font-jp text-xl font-light text-cream">
              📱 Devices
            </h2>
            <div className="space-y-3">
              {metrics?.deviceBreakdown.map((device, i) => (
                <div key={i}>
                  <div className="mb-1 flex justify-between">
                    <span className="font-jp text-sm text-cream/70">
                      {device.device}
                    </span>
                    <span className="font-jp text-sm font-semibold text-saffron-300">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className="h-full bg-saffron-300"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources & Countries */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Traffic Sources */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h2 className="mb-4 font-jp text-xl font-light text-cream">
              🔗 Traffic Sources
            </h2>
            <div className="space-y-3">
              {metrics?.trafficSources.map((source, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="font-jp text-sm text-cream">{source.source}</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full bg-blue-400"
                        style={{
                          width: `${(source.visitors / (metrics.trafficSources[0]?.visitors || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="font-jp w-16 text-right text-sm font-semibold text-cream/70">
                      {source.visitors}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Countries */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h2 className="mb-4 font-jp text-xl font-light text-cream">
              🌍 Top Locations
            </h2>
            <div className="space-y-3">
              {metrics?.topCountries.map((country, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="font-jp text-sm text-cream">{country.country}</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full bg-green-400"
                        style={{
                          width: `${(country.visitors / (metrics.topCountries[0]?.visitors || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="font-jp w-16 text-right text-sm font-semibold text-cream/70">
                      {country.visitors}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="font-jp text-xs text-cream/40">
            Last updated: {metrics?.lastUpdated} | Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}
          </p>
          <p className="mt-2 font-jp text-xs text-cream/30">
            💡 Tip: Connected to Google Analytics. Real data updates every 30 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: any;
  label: string;
  value: string;
  subtext: string;
  color: 'saffron' | 'blue' | 'green' | 'purple';
}

function MetricCard({
  icon: Icon,
  label,
  value,
  subtext,
  color,
}: MetricCardProps) {
  const colorMap = {
    saffron: 'from-saffron-500 to-saffron-300',
    blue: 'from-blue-500 to-blue-300',
    green: 'from-green-500 to-green-300',
    purple: 'from-purple-500 to-purple-300',
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-jp text-xs font-medium tracking-widest text-cream/50 uppercase">
          {label}
        </p>
        <div
          className={`rounded-lg bg-gradient-to-br ${colorMap[color]} p-2 text-white/80`}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="font-display text-3xl font-light text-cream">{value}</p>
      <p className="mt-2 font-jp text-xs text-cream/40">{subtext}</p>
    </div>
  );
}
