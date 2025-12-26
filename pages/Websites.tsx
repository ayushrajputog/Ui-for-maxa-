
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from '../components/UI';

const Websites: React.FC = () => {
  const websites = [
    { id: 'site-1', name: 'My Portfolio V2', slug: 'alex.maxaa.site', status: 'published', lastEdit: '2 days ago' },
    { id: 'site-2', name: 'Coffee Shop Landing', slug: 'brew-hub.maxaa.site', status: 'draft', lastEdit: '5 mins ago' },
    { id: 'site-3', name: 'Personal Blog', slug: 'thoughts.maxaa.site', status: 'published', lastEdit: '1 week ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black uppercase">My Websites</h1>
          <p className="text-gray-500">Manage and publish your digital creations.</p>
        </div>
        <Link to="/builder">
          <Button size="lg">+ Create Website</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site) => (
          <Card key={site.id} className="group flex flex-col h-full">
            <div className="aspect-video bg-gray-100 border border-black rounded-[8px] mb-6 relative overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${site.id}/600/400`} 
                alt={site.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 right-2">
                <Badge className={site.status === 'published' ? 'bg-green-600' : 'bg-orange-500'}>
                  {site.status.toUpperCase()}
                </Badge>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{site.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{site.slug}</p>
            
            <div className="flex items-center text-xs text-gray-500 mb-6 italic">
              Last edited {site.lastEdit}
            </div>

            <div className="mt-auto flex items-center gap-2">
              <Link to={`/builder/${site.id}`} className="flex-grow">
                <Button className="w-full">Edit Site</Button>
              </Link>
              <Button variant="outline" className="px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </Button>
            </div>
          </Card>
        ))}

        <Link to="/builder" className="group">
          <div className="h-full min-h-[300px] flex flex-col items-center justify-center border-2 border-black border-dashed rounded-[16px] hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mb-4 group-hover:scale-110 transition-transform">
              +
            </div>
            <p className="font-black uppercase">Create New</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Websites;
