import { useState, useMemo } from 'react';
import { FlaggedReportsTable } from '@/components/FlaggedReportsTable';
import { mockFlaggedReports } from '@/data/mockFlaggedReports';
import type { ReportStatus } from '@/types';

type FilterValue = 'all' | ReportStatus;

export function FlaggedReportsPage() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredReports = useMemo(() => {
    if (filter === 'all') return mockFlaggedReports;
    return mockFlaggedReports.filter((r) => r.status === filter);
  }, [filter]);

  const counts = {
    all: mockFlaggedReports.length,
    pending: mockFlaggedReports.filter((r) => r.status === 'pending').length,
    notice_issued: mockFlaggedReports.filter((r) => r.status === 'notice_issued').length,
    resolved: mockFlaggedReports.filter((r) => r.status === 'resolved').length,
  };

  const filterButtons: { value: FilterValue; label: string; count: number }[] = [
    { value: 'all', label: 'All Reports', count: counts.all },
    { value: 'pending', label: 'Pending', count: counts.pending },
    { value: 'notice_issued', label: 'Notice Issued', count: counts.notice_issued },
    { value: 'resolved', label: 'Resolved', count: counts.resolved },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-5">
      <div className="border-b-2 border-navy-600 pb-2">
        <h2 className="text-lg font-bold text-navy-700 uppercase tracking-wide">Flagged Reports</h2>
        <p className="text-sm text-gray-600 mt-0.5">
          Violations flagged for enforcement action · Click any row to view full details
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors border ${filter === btn.value ? 'bg-navy-700 text-white border-navy-700' : 'bg-white text-gray-700 border-gray-400 hover:bg-gray-50'}`}
            style={{ borderRadius: '2px' }}
          >
            {btn.label}
            <span className={`ml-1.5 text-xs ${filter === btn.value ? 'text-gray-300' : 'text-gray-400'}`}>
              ({btn.count})
            </span>
          </button>
        ))}
      </div>

      <FlaggedReportsTable reports={filteredReports} />
    </div>
  );
}
