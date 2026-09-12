import { ScansTable } from '@/components/ScansTable';
import { SummaryCards } from '@/components/SummaryCards';
import { mockScans } from '@/data/mockScans';
import { mockFlaggedReports } from '@/data/mockFlaggedReports';
import { isToday } from '@/utils/format';

export function DashboardPage() {
  const todayScans = mockScans.filter((s) => isToday(s.scanned_at));
  const totalScansToday = todayScans.length;
  const totalViolations = todayScans.reduce((sum, s) => sum + s.violations.length, 0);
  const compliantCount = todayScans.filter((s) => s.overall_status === 'compliant').length;
  const complianceRate =
    totalScansToday > 0 ? Math.round((compliantCount / totalScansToday) * 100) : 0;
  const openFlagged = mockFlaggedReports.filter(
    (r) => r.status === 'pending' || r.status === 'notice_issued',
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-5">
      <div className="border-b-2 border-navy-600 pb-2">
        <h2 className="text-lg font-bold text-navy-700 uppercase tracking-wide">Dashboard Overview</h2>
        <p className="text-sm text-gray-600 mt-0.5">
          Recent product scans and compliance summary for today
        </p>
      </div>

      <SummaryCards
        totalScansToday={totalScansToday}
        totalViolations={totalViolations}
        complianceRate={complianceRate}
        flaggedCount={openFlagged}
      />

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-sm font-bold text-navy-700 uppercase tracking-wide">Recent Product Scans</h3>
          <span className="text-xs text-gray-500">
            {mockScans.length} total records · Click any row to expand
          </span>
        </div>
        <ScansTable scans={mockScans} />
      </div>
    </div>
  );
}
