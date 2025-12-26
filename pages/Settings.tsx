
import React from 'react';
import { Button, Input } from '../components/UI';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom px-6 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-16 border-b border-black/5 pb-8">Settings</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-8 italic">Identity</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest">Username</label>
                <Input defaultValue="alex_maxaa" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest">Email</label>
                <Input defaultValue="alex@maxaa.site" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-8 italic">Platform</h2>
            <div className="flex items-center justify-between p-6 border border-black rounded-[6px]">
              <div>
                <h3 className="text-xs font-bold uppercase">Pro Tier</h3>
                <p className="text-[10px] text-black/30 uppercase mt-1">Active Membership</p>
              </div>
              <Button size="sm">Manage</Button>
            </div>
          </section>

          <div className="pt-12 border-t border-black/5 flex justify-between">
             <button className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline">Delete Account</button>
             <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
