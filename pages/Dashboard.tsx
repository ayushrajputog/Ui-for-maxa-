
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom px-6">
        <header className="flex justify-between items-end mb-16 border-b border-black/5 pb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase">Dashboard</h1>
            <p className="text-black/30 text-xs font-bold uppercase tracking-widest mt-1">Project Insights</p>
          </div>
          <Link to="/builder">
            <Button size="sm">+ New Project</Button>
          </Link>
        </header>

        <div className="flex flex-col items-center justify-center py-40 border border-black/5 rounded-[6px] border-dashed">
          <div className="text-center">
            <p className="text-sm font-bold text-black/20 uppercase tracking-widest italic mb-2">No active projects</p>
            <p className="text-xs text-black/10 uppercase font-black">Ready to build something?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
