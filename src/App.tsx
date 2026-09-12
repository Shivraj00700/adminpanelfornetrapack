import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DashboardPage } from '@/pages/DashboardPage';
import { FlaggedReportsPage } from '@/pages/FlaggedReportsPage';

type Page = 'dashboard' | 'flagged';

function App() {
  const [page, setPage] = useState<Page>('dashboard');

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header currentPage={page} onNavigate={setPage} />
      <main className="flex-1">
        {page === 'dashboard' && <DashboardPage />}
        {page === 'flagged' && <FlaggedReportsPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
