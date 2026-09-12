import { CheckCircle2, AlertTriangle, ShieldCheck, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  indicatorColor: string;
  subtext?: string;
}

function SummaryCard({
  label,
  value,
  icon: Icon,
  iconColor,
  indicatorColor,
  subtext,
}: SummaryCardProps) {
  return (
    <div className="bg-white border border-gray-400 p-4 flex items-start gap-3" style={{ borderRadius: '2px' }}>
      <div className={`w-1 self-stretch flex-shrink-0 ${indicatorColor}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Icon size={18} className={iconColor} />
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide truncate">{label}</p>
        </div>
        <p className="text-2xl font-bold text-navy-700 leading-tight">{value}</p>
        {subtext && <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>}
      </div>
    </div>
  );
}

interface SummaryCardsProps {
  totalScansToday: number;
  totalViolations: number;
  complianceRate: number;
  flaggedCount: number;
}

export function SummaryCards({
  totalScansToday,
  totalViolations,
  complianceRate,
  flaggedCount,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <SummaryCard
        label="Scans Today"
        value={totalScansToday}
        icon={FileText}
        iconColor="text-navy-600"
        indicatorColor="bg-navy-600"
      />
      <SummaryCard
        label="Violations Found"
        value={totalViolations}
        icon={AlertTriangle}
        iconColor="text-red-600"
        indicatorColor="bg-red-600"
        subtext="Across all scans today"
      />
      <SummaryCard
        label="Compliance Rate"
        value={`${complianceRate}%`}
        icon={CheckCircle2}
        iconColor="text-green-600"
        indicatorColor="bg-green-600"
        subtext="Compliant / total scans"
      />
      <SummaryCard
        label="Flagged Reports"
        value={flaggedCount}
        icon={ShieldCheck}
        iconColor="text-[#CC6600]"
        indicatorColor="bg-[#FF9933]"
        subtext="Open & in-progress"
      />
    </div>
  );
}
