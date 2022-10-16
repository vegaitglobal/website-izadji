import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/style/utils/_reset.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import HomePage from './pages/HomePage/HomePage';
import PridePage from './pages/PridePage/PridePage';
import { routes } from './routes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.main}
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path={routes.pride}
          element={
            <Layout>
              <PridePage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
