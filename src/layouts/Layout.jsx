import { Footer, RegisterHeader, DashBoardHeader } from 'components';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/register' || location.pathname === '/login') {
      return <RegisterHeader />;
    }
    return <DashBoardHeader />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderHeader()}
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
