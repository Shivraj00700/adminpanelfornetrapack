import { Mail, Phone, ChevronDown } from 'lucide-react';

type Page = 'dashboard' | 'flagged';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function TricolorStrip() {
  return (
    <div className="flex h-[6px] w-full">
      <div className="flex-1 bg-[#FF9933]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-[#138808]" />
    </div>
  );
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="bg-navy-800 text-gray-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Mail size={12} className="text-gray-400" />
            <span className="hidden sm:inline">admin@netrapack.gov.in</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone size={12} className="text-gray-400" />
              <span>1800-11-4000</span>
            </span>
            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <span>Select Language</span>
              <ChevronDown size={11} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3">
            <img
              src="/Screenshot_2026-09-12_205234.png"
              alt="Government of India — Ministry of Consumer Affairs, Food & Public Distribution emblem"
              className="h-14 w-auto object-contain flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h1 className="font-bold text-navy-700 text-base sm:text-xl leading-tight">
                NetraPack Admin
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm leading-tight truncate">
                Ministry of Consumer Affairs, Food &amp; Public Distribution
              </p>
            </div>
          </div>
        </div>
      </div>

      <TricolorStrip />

      <nav className="bg-navy-700 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`px-5 py-2.5 text-sm font-semibold border-r border-navy-800 transition-colors ${
                currentPage === 'dashboard'
                  ? 'bg-navy-800 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('flagged')}
              className={`px-5 py-2.5 text-sm font-semibold border-r border-navy-800 transition-colors ${
                currentPage === 'flagged'
                  ? 'bg-navy-800 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              Flagged Reports
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
