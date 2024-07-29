import React from 'react';
import {Footer, Header, Header2} from '../component';
import {useLocation} from 'react-router-dom';

export default function Layout({children}) {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {isLogin ? <Header2 /> : <Header />}
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
