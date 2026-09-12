import type { FlaggedReport } from '@/types';

export const mockFlaggedReports: FlaggedReport[] = [
  {
    report_id: 'FR-2026-0912-01',
    scan_id: 'NP-2026-09-12-001',
    product_name: 'Gold Winner Refined Sunflower Oil',
    brand: 'Gold Winner',
    violation_type: 'net_quantity',
    status: 'pending',
    flagged_at: '2026-09-12T10:35:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(c)',
    description:
      'Net quantity declaration is 900 ml, which does not match standard pack sizes prescribed for edible oils. The standard pack size for this category is 500 ml, 1 L, 2 L, or 5 L.',
    evidence: {
      extracted_value: '900 ml',
      expected_value: '500 ml / 1 L / 2 L / 5 L',
      inspector_notes: 'Photographed at SuperMart, Sector 18, Noida. Shelf had 12 units of this non-standard pack size.',
    },
  },
  {
    report_id: 'FR-2026-0912-02',
    scan_id: 'NP-2026-09-12-001',
    product_name: 'Gold Winner Refined Sunflower Oil',
    brand: 'Gold Winner',
    violation_type: 'mrp',
    status: 'pending',
    flagged_at: '2026-09-12T10:35:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(e)',
    description:
      'MRP is not printed in the prescribed font size. Minimum font size for MRP declaration is 3 mm for packs up to 500 g/ml.',
    evidence: {
      extracted_value: 'Font size approx. 1.8 mm',
      expected_value: 'Minimum 3 mm font size',
      inspector_notes: 'MRP text measured against reference scale in scan image.',
    },
  },
  {
    report_id: 'FR-2026-0912-03',
    scan_id: 'NP-2026-09-12-004',
    product_name: 'Surf Excel Easy Wash Detergent Powder',
    brand: 'Surf Excel',
    violation_type: 'manufacturer_name',
    status: 'notice_issued',
    flagged_at: '2026-09-12T09:53:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(b)',
    description:
      'Name and address of the manufacturer is not legible on the package. Parts of the address are obscured by the pricing sticker.',
    evidence: {
      extracted_value: 'Partially obscured — "Hindustan Unilever Ltd., Unilever House, ____________"',
      expected_value: 'Complete name and address of manufacturer/packer',
      inspector_notes: 'Notice issued to Hindustan Unilever Ltd. on 2026-09-12. Response expected within 15 working days.',
    },
  },
  {
    report_id: 'FR-2026-0912-04',
    scan_id: 'NP-2026-09-12-004',
    product_name: 'Surf Excel Easy Wash Detergent Powder',
    brand: 'Surf Excel',
    violation_type: 'country_of_origin',
    status: 'notice_issued',
    flagged_at: '2026-09-12T09:53:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(aa)',
    description:
      'Country of origin declaration is missing from the principal display panel.',
    evidence: {
      extracted_value: 'Not found on principal display panel',
      expected_value: '"Country of Origin: India" or equivalent',
      inspector_notes: 'Bundled with FR-2026-0912-03. Same notice dispatched to manufacturer.',
    },
  },
  {
    report_id: 'FR-2026-0912-05',
    scan_id: 'NP-2026-09-12-006',
    product_name: 'Maggi 2-Minute Masala Noodles',
    brand: 'Maggi',
    violation_type: 'mrp',
    status: 'pending',
    flagged_at: '2026-09-12T09:19:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(e)',
    description:
      'MRP printed as ₹ 14.00 but retail price sticker overlay shows ₹ 16.00. Possible MRP tampering or double MRP declaration.',
    evidence: {
      extracted_value: '₹ 14.00 (printed), ₹ 16.00 (sticker overlay)',
      expected_value: 'Single, unaltered MRP declaration',
      inspector_notes: 'Suspected MRP violation at Kirana store, Lajpat Nagar Market. Re-inspection scheduled for 2026-09-15.',
    },
  },
  {
    report_id: 'FR-2026-0912-06',
    scan_id: 'NP-2026-09-12-009',
    product_name: 'Parle-G Glucose Biscuits',
    brand: 'Parle',
    violation_type: 'batch_number',
    status: 'pending',
    flagged_at: '2026-09-12T08:13:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(h)',
    description:
      'Batch number or lot number is not clearly visible on the package. The printing is faded and partially illegible.',
    evidence: {
      extracted_value: 'Partially legible — "PG-0826-__6"',
      expected_value: 'Complete, legible batch/lot number',
      inspector_notes: 'Batch of 50 packets seized from wholesaler in Karol Bagh. All packets show same printing defect.',
    },
  },
  {
    report_id: 'FR-2026-0912-07',
    scan_id: 'NP-2026-09-12-009',
    product_name: 'Parle-G Glucose Biscuits',
    brand: 'Parle',
    violation_type: 'best_before',
    status: 'pending',
    flagged_at: '2026-09-12T08:13:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(da)',
    description:
      '"Best before" declaration is missing from the principal display panel.',
    evidence: {
      extracted_value: 'Not found on principal display panel',
      expected_value: '"Best before: X months from manufacturing"',
      inspector_notes: 'Same batch as FR-2026-0912-06. Bundled violation report.',
    },
  },
  {
    report_id: 'FR-2026-0911-14',
    scan_id: 'NP-2026-09-11-091',
    product_name: 'Clinic Plus Strong & Long Health Shampoo',
    brand: 'Clinic Plus',
    violation_type: 'net_quantity',
    status: 'resolved',
    flagged_at: '2026-09-11T16:23:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(c)',
    description:
      'Net quantity of 340 ml is a non-standard pack size for shampoos. Standard sizes are 100 ml, 200 ml, 350 ml, 500 ml, or 1 L.',
    evidence: {
      extracted_value: '340 ml',
      expected_value: '100 ml / 200 ml / 350 ml / 500 ml / 1 L',
      inspector_notes: 'Manufacturer confirmed this was a promotional pack size with prior approval (Approval Ref: LM/DEL/2026/PROM-441). Case closed.',
    },
  },
  {
    report_id: 'FR-2026-0910-22',
    scan_id: 'NP-2026-09-10-076',
    product_name: 'Patanjali Doodh Biscuits',
    brand: 'Patanjali',
    violation_type: 'manufacturer_name',
    status: 'resolved',
    flagged_at: '2026-09-10T14:05:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(b)',
    description:
      'Complete name and address of the manufacturer was missing from the information panel. Only brand name was displayed.',
    evidence: {
      extracted_value: 'Brand name only — "Patanjali"',
      expected_value: 'Full manufacturer name and address',
      inspector_notes: 'Manufacturer rectified packaging in subsequent production batch. Verified on 2026-09-11. Case closed.',
    },
  },
  {
    report_id: 'FR-2026-0910-18',
    scan_id: 'NP-2026-09-10-061',
    product_name: 'Britannia Marie Gold',
    brand: 'Britannia',
    violation_type: 'mrp',
    status: 'notice_issued',
    flagged_at: '2026-09-10T11:20:00+05:30',
    rule_citation: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(e)',
    description:
      'Retailer was selling at a price higher than the printed MRP of ₹ 30.00. The retailer sticker showed ₹ 35.00.',
    evidence: {
      extracted_value: 'MRP ₹ 30.00, Selling price ₹ 35.00',
      expected_value: 'Selling price not to exceed printed MRP',
      inspector_notes: 'Notice issued to retailer M/s Sharma Provision Store, Bhogal Market. Hearing scheduled for 2026-09-20.',
    },
  },
];
