import type { OverallStatus, ReportStatus } from '@/types';

interface ScanStatusBadgeProps {
  status: OverallStatus;
}

export function ScanStatusBadge({ status }: ScanStatusBadgeProps) {
  const config: Record<OverallStatus, { label: string; dot: string; text: string }> = {
    compliant: {
      label: 'COMPLIANT',
      dot: 'bg-green-600',
      text: 'text-gray-700',
    },
    non_compliant: {
      label: 'NON-COMPLIANT',
      dot: 'bg-red-600',
      text: 'text-gray-700',
    },
    manual_review_required: {
      label: 'NEEDS REVIEW',
      dot: 'bg-amber-500',
      text: 'text-gray-700',
    },
  };

  const { label, dot, text } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-2 py-1 text-xs font-bold whitespace-nowrap border border-gray-300 bg-white ${text}`}
      style={{ borderRadius: '2px' }}
    >
      <span className={`w-2.5 h-2.5 flex-shrink-0 ${dot}`} style={{ borderRadius: '1px' }} />
      {label}
    </span>
  );
}

interface ReportStatusBadgeProps {
  status: ReportStatus;
}

export function ReportStatusBadge({ status }: ReportStatusBadgeProps) {
  const config: Record<ReportStatus, { label: string; dot: string; text: string }> = {
    pending: {
      label: 'PENDING',
      dot: 'bg-amber-500',
      text: 'text-gray-700',
    },
    notice_issued: {
      label: 'NOTICE ISSUED',
      dot: 'bg-blue-600',
      text: 'text-gray-700',
    },
    resolved: {
      label: 'RESOLVED',
      dot: 'bg-green-600',
      text: 'text-gray-700',
    },
  };

  const { label, dot, text } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-2 py-1 text-xs font-bold whitespace-nowrap border border-gray-300 bg-white ${text}`}
      style={{ borderRadius: '2px' }}
    >
      <span className={`w-2.5 h-2.5 flex-shrink-0 ${dot}`} style={{ borderRadius: '1px' }} />
      {label}
    </span>
  );
}
