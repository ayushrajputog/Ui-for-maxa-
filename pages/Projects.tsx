
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Badge } from '../components/UI';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const mockProjects = [
    { id: 'proj-1', name: 'Coffee Hub App', updated: '2h ago', status: 'live' },
    { id: 'proj-2', name: 'Portfolio Site', updated: '5h ago', status: 'draft' },
    { id: 'proj-3', name: 'Design Blog', updated: '1d ago', status: 'live' },
    { id: 'proj-4', name: 'E-commerce Demo', updated: '3d ago', status: 'archived' },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom px-6">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase">Projects</h1>
            <p className="text-black/30 text-xs font-bold uppercase tracking-widest mt-2">Manage your digital assets</p>
          </div>
          <Button onClick={() => navigate('/builder')} size="sm">+ Create New</Button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <Card key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
              <div className="aspect-[16/10] bg-gray-50 border border-black rounded-[4px] mb-6 flex items-center justify-center">
                <p className="text-[9px] font-black uppercase tracking-widest text-black/10 italic text-center">
                  User project placeholder<br/>AI will generate content here
                </p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold uppercase tracking-tighter">{project.name}</h3>
                <Badge className={project.status === 'live' ? 'bg-black text-white' : 'text-black'}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Updated {project.updated}</p>
            </Card>
          ))}

          <div 
            onClick={() => navigate('/builder')}
            className="border border-black border-dashed rounded-[6px] flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="text-3xl font-light mb-2">+</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Add New Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
