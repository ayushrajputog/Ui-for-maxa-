
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Badge } from '../components/UI';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom px-6">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-black/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tighter uppercase">Project Detail</h1>
              <Badge>Live</Badge>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-black/30 italic">ID: {id}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate(`/builder/${id}`)}>Edit in Builder</Button>
            <Button size="sm">Settings</Button>
          </div>
        </header>

        <div className="bg-white border border-black rounded-[6px] overflow-hidden min-h-[600px] flex items-center justify-center relative">
          <div className="absolute top-4 left-4">
             <span className="text-[9px] font-black uppercase tracking-widest text-black/10">Project Preview Placeholder</span>
          </div>
          <div className="text-center p-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-black/20 italic mb-4">
              AI Generated Content View
            </p>
            <p className="text-xs text-black/40 max-w-sm mx-auto uppercase">
              This space will host the live rendered version of your AI-generated web app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
