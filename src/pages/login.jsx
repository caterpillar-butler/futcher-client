import React from 'react';
import { Footer, RegisterHeader } from 'components';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <RegisterHeader />
      <main className="flex-grow p-4"></main>
      <Footer />
    </div>
  );
};

export default Login;
