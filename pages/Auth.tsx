
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Input } from '../components/UI';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tighter uppercase mb-2">MAXAA</h1>
          <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] italic">
            {isLogin ? 'Welcome Back' : 'Join the Collective'}
          </p>
        </div>

        <div className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest">Full Name</label>
              <Input placeholder="E.g. Alex Smith" />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest">Email</label>
            <Input placeholder="name@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full py-4" size="lg">{isLogin ? 'Sign In' : 'Create Account'}</Button>
        </div>

        <div className="text-center">
          <Link 
            to={isLogin ? '/signup' : '/login'} 
            className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
