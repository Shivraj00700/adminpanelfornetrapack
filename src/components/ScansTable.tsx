import { useState, Fragment } from 'react';
import { ChevronDown, ChevronRight, Cpu, Clock } from 'lucide-react';
import type { ScanResult } from '@/types';
import { ScanStatusBadge } from '@/components/StatusBadge';
import { formatDateTime, isToday } from '@/utils/format';

function ViolationList({ violations }: { violations: ScanResult['violations'] }) {
  if (violations.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic py-2">No violations detected for this scan.</p>
    );
  }

  return (
    <div className="space-y-2 py-1">
      {violations.map((v, i) => (
        <div key={i} className="border border-gray-300 bg-gray-50 px-3 py-2.5" style={{ borderRadius: '2px' }}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wide">{v.field}</span>
            <span className="text-xs text-gray-500 font-medium">{v.rule_citation}</span>
          </div>
          <p className="text-sm text-gray-700 mt-1 leading-snug">{v.description}</p>
        </div>
      ))}
    </div>
  );
}

function ExtractionDetails({ scan }: { scan: ScanResult }) {
  const e = scan.vision_extraction;
  const fields: { label: string; value?: string }[] = [
    { label: 'Product Name', value: e.product_name },
    { label: 'Brand', value: e.brand },
    { label: 'MRP', value: e.mrp },
    { label: 'Net Quantity', value: e.net_quantity },
    { label: 'Manufacturer', value: e.manufacturer },
    { label: 'Mfg. Date', value: e.manufacturing_date },
    { label: 'Batch No.', value: e.batch_number },
    { label: 'Country of Origin', value: e.country_of_origin },
    { label: 'FSSAI License', value: e.fssai_license },
    { label: 'Barcode', value: e.barcode },
  ];

  const presentFields = fields.filter((f) => f.value);

  return (
    <table className="w-full text-sm border border-gray-300" style={{ borderSpacing: 0 }}>
      <tbody>
        {presentFields.map((f, i) => (
          <tr key={f.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide border-r border-gray-300 w-1/3">
              {f.label}
            </td>
            <td className="px-3 py-1.5 text-sm text-gray-700">{f.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MetadataRow({ scan }: { scan: ScanResult }) {
  const m = scan.metadata;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 py-2 border-t border-gray-300 mt-2">
      <span className="flex items-center gap-1">
        <Cpu size={12} className="text-gray-400" />
        Model: <span className="font-medium text-gray-600">{m.ai_model}</span>
      </span>
      <span className="flex items-center gap-1">
        <Clock size={12} className="text-gray-400" />
        Processing: <span className="font-medium text-gray-600">{m.processing_time_ms} ms</span>
      </span>
      {m.image_resolution && (
        <span>
          Resolution: <span className="font-medium text-gray-600">{m.image_resolution}</span>
        </span>
      )}
      {m.confidence_score !== undefined && (
        <span>
          Confidence: <span className="font-medium text-gray-600">{Math.round(m.confidence_score * 100)}%</span>
        </span>
      )}
    </div>
  );
}

interface ScansTableProps {
  scans: ScanResult[];
}

export function ScansTable({ scans }: ScansTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (scanId: string) => {
    setExpandedId((prev) => (prev === scanId ? null : scanId));
  };

  return (
    <div className="overflow-x-auto border border-gray-400" style={{ borderRadius: '2px' }}>
      <table className="w-full text-sm" style={{ borderSpacing: 0 }}>
        <thead>
          <tr className="bg-navy-700 text-left">
            <th className="w-10 px-2 py-2.5 border-r border-navy-800"></th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Scan ID
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Product / Brand
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide whitespace-nowrap border-r border-navy-800">
              Date &amp; Time
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide border-r border-navy-800">
              Status
            </th>
            <th className="px-3 py-2.5 font-bold text-white text-xs uppercase tracking-wide text-center whitespace-nowrap">
              Violations
            </th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan, index) => {
            const product = scan.vision_extraction.product_name ?? 'Unknown Product';
            const brand = scan.vision_extraction.brand;
            const expanded = expandedId === scan.scan_id;
            const today = isToday(scan.scanned_at);
            const isEven = index % 2 === 0;

            return (
              <Fragment key={scan.scan_id}>
                <tr
                  onClick={() => toggleRow(scan.scan_id)}
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
                    {scan.scan_id}
                  </td>
                  <td className="px-3 py-2.5 border-r border-gray-300">
                    <div className="font-semibold text-navy-700">{product}</div>
                    {brand && <div className="text-xs text-gray-500 mt-0.5">{brand}</div>}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap border-r border-gray-300">
                    <div>{formatDateTime(scan.scanned_at)}</div>
                    {today && <div className="text-xs text-[#CC6600] font-semibold mt-0.5">Today</div>}
                  </td>
                  <td className="px-3 py-2.5 border-r border-gray-300">
                    <ScanStatusBadge status={scan.overall_status} />
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <span
                      className={`inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 text-xs font-bold border ${scan.violations.length === 0 ? 'border-green-600 text-green-700 bg-green-50' : scan.violations.length <= 1 ? 'border-amber-500 text-amber-700 bg-amber-50' : 'border-red-600 text-red-700 bg-red-50'}`}
                      style={{ borderRadius: '2px' }}
                    >
                      {scan.violations.length}
                    </span>
                  </td>
                </tr>
                {expanded && (
                  <tr className="bg-gray-50 border-b border-gray-300">
                    <td className="border-r border-gray-300"></td>
                    <td colSpan={5} className="px-3 py-3">
                      <div className="bg-white border border-gray-300 p-3" style={{ borderRadius: '2px' }}>
                        <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 border-b border-gray-200 pb-1">
                          Extracted Product Details
                        </h4>
                        <ExtractionDetails scan={scan} />

                        <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mt-3 mb-1.5 border-b border-gray-200 pb-1">
                          Violations ({scan.violations.length})
                        </h4>
                        <ViolationList violations={scan.violations} />

                        <MetadataRow scan={scan} />
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
