export type OverallStatus = 'compliant' | 'non_compliant' | 'manual_review_required';

export type ReportStatus = 'pending' | 'notice_issued' | 'resolved';

export interface VisionExtraction {
  product_name?: string;
  brand?: string;
  mrp?: string;
  net_quantity?: string;
  manufacturer?: string;
  manufacturing_date?: string;
  batch_number?: string;
  country_of_origin?: string;
  fssai_license?: string;
  barcode?: string;
}

export interface Violation {
  field: string;
  rule_citation: string;
  description: string;
}

export interface ScanMetadata {
  ai_model: string;
  processing_time_ms: number;
  image_resolution?: string;
  confidence_score?: number;
}

export interface ScanResult {
  scan_id: string;
  overall_status: OverallStatus;
  scanned_at: string;
  vision_extraction: VisionExtraction;
  violations: Violation[];
  metadata: ScanMetadata;
}

export interface FlaggedReport {
  report_id: string;
  scan_id: string;
  product_name: string;
  brand?: string;
  violation_type: string;
  status: ReportStatus;
  flagged_at: string;
  rule_citation: string;
  description: string;
  evidence: {
    image_url?: string;
    extracted_value?: string;
    expected_value?: string;
    inspector_notes?: string;
  };
}
