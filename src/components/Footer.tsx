import { Clock, Mail, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-800 text-gray-300 mt-auto border-t-4 border-[#FF9933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-bold text-sm mb-3 border-b border-navy-600 pb-1.5">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors flex items-center gap-1">
                  <ExternalLink size={11} className="text-gray-500" />
                  Department of Legal Metrology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors flex items-center gap-1">
                  <ExternalLink size={11} className="text-gray-500" />
                  Consumer Affairs Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors flex items-center gap-1">
                  <ExternalLink size={11} className="text-gray-500" />
                  Government of India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-3 border-b border-navy-600 pb-1.5">
              Policies
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9933] transition-colors">
                  Hyperlinking Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-3 border-b border-navy-600 pb-1.5">
              Contact &amp; Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={13} className="text-[#FF9933] flex-shrink-0 mt-0.5" />
                <span>admin@netrapack.gov.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={13} className="text-[#FF9933] flex-shrink-0 mt-0.5" />
                <span>1800-11-4000 (Toll Free)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={13} className="text-[#FF9933] flex-shrink-0 mt-0.5" />
                <span>
                  Mon–Fri: 9:00 AM – 5:30 PM<br />
                  Sat: 9:00 AM – 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-5 pt-3">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            © 2026 NetraPack Admin — Department of Legal Metrology, Ministry of Consumer Affairs,
            Food &amp; Public Distribution, Government of India. All rights reserved.<br />
            <span className="text-gray-500">
              Site designed and developed following GIGW guidelines. Last updated: September 2026.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
