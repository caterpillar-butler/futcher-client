import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Dashboard, NotFound } from './page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
