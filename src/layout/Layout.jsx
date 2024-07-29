import { Footer, RegisterHeader, DashBoardHeader } from 'components';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case '/register':
        return <RegisterHeader />;
      default:
        return <DashBoardHeader />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderHeader()}
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
