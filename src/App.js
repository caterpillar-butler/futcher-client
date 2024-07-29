// ./src/App.js
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import {Dashboard, NotFound, Login} from './page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
