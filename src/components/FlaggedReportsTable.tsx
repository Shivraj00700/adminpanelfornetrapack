import { useState, Fragment } from 'react';
import { ChevronDown, ChevronRight, FileText, Info } from 'lucide-react';
import type { FlaggedReport } from '@/types';
import { ReportStatusBadge } from '@/components/StatusBadge';
import { formatDateTime } from '@/utils/format';

function EvidenceDetails({ report }: { report: FlaggedReport }) {
  const ev = report.evidence;

  return (
    <div className="space-y-3 py-1">
      <div className="border border-gray-300 bg-gray-50 px-3 py-3" style={{ borderRadius: '2px' }}>
        <h5 className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1.5">
          Rule Violated
        </h5>
        <p className="text-sm font-semibold text-gray-700 mb-1">{report.rule_citation}</p>
        <p className="text-sm text-gray-600 leading-snug">{report.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ev.extracted_value !== undefined && (
          <div className="border border-gray-300 p-3" style={{ borderRadius: '2px' }}>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              Extracted Value
            </span>
            <p className="text-sm text-gray-700 mt-1">{ev.extracted_value}</p>
          </div>
        )}
        {ev.expected_value !== undefined && (
          <div className="border border-gray-300 p-3" style={{ borderRadius: '2px' }}>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              Expected Value
            </span>
            <p className="text-sm text-gray-700 mt-1">{ev.expected_value}</p>
          </div>
        )}
      </div>

      {ev.inspector_notes && (
        <div className="bg-navy-50 border border-navy-200 px-3 py-3" style={{ borderRadius: '2px' }}>
          <h5 className="text-xs font-bold text-navy-700 uppercase tracking-wide flex items-center gap-1.5 mb-1">
            <Info size={12} />
            Inspector Notes
          </h5>
          <p className="text-sm text-gray-700 leading-snug">{ev.inspector_notes}</p>
        </div>
      )}

      <div className="flex items-center gap-2 text-xs text-gray-500 pt-1 border-t border-gray-200">
        <FileText size={12} />
        <span>Linked Scan:</span>
        <span className="font-mono text-gray-600">{report.scan_id}</span>
      </div>
    </div>
  );
}

interface FlaggedReportsTableProps {
  reports: FlaggedReport[];
}

export function FlaggedReportsTable({ reports }: FlaggedReportsTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (reportId: string) => {
    setExpandedId((prev) => (prev === reportId ? null : reportId));
  };

  return (
    <div className="overflow-x-auto border border-gray-400" style={{ borderRadius: '2px' }}>
      <table className="w-full text-sm" style={{ borderSpacing: 0 }}>
        <thead>
          <tr className="bg-navy-700 text-left">
            <th className="w-10 px-2 py-2.5 border-r border-navy-800"></th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Report ID
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Product / Brand
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Violation Type
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Status
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide whitespace-nowrap">
              Date Flagged
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            const expanded = expandedId === report.report_id;
            const isEven = index % 2 === 0;
            return (
              <Fragment key={report.report_id}>
                <tr
                  onClick={() => toggleRow(report.report_id)}
                  className={`cursor-pointer border-b border-gray-300 ${
                    expanded
                      ? 'bg-navy-50'
                      : isEven
                        ? 'bg-white hover:bg-saffron-50'
                        : 'bg-gray-50 hover:bg-saffron-50'
                  }`}
                >
                  <td className="px-2 py-2.5 text-gray-500 border-r border-gray-300">
                    {expanded ? (
                      <ChevronDown size={15} className="text-navy-700" />
                    ) : (
                      <ChevronRight size={15} />
                    )}
                  </td>
                  <td className="px-3 py-2.5 font-mono text-xs text-gray-600 whitespace-nowrap border-r border-gray-300">
                    {report.report_id}
                  </td>
                  <td className="px-3 py-2.5 border-r border-gray-300">
                    <div className="font-semibold text-navy-700">{report.product_name}</div>
                    {report.brand && <div className="text-xs text-gray-500 mt-0.5">{report.brand}</div>}
                  </td>
                  <td className="px-3 py-2.5 border-r border-gray-300">
                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 capitalize border border-gray-300" style={{ borderRadius: '2px' }}>
                      {report.violation_type.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 border-r border-gray-300">
                    <ReportStatusBadge status={report.status} />
                  </td>
                  <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">
                    {formatDateTime(report.flagged_at)}
                  </td>
                </tr>
                {expanded && (
                  <tr className="bg-gray-50 border-b border-gray-300">
                    <td className="border-r border-gray-300"></td>
                    <td colSpan={5} className="px-3 py-3">
                      <div className="bg-white border border-gray-300 p-3" style={{ borderRadius: '2px' }}>
                        <EvidenceDetails report={report} />
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
