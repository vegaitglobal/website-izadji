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
        <Route
          path={routes.workProgram}
          element={
            <Layout>
              <p>Work program</p>
            </Layout>
          }
        />
        <Route
          path={routes.blogPage}
          element={
            <Layout>
              <p>Single blog page</p>
            </Layout>
          }
        />
        <Route
          path={routes.blog}
          element={
            <Layout>
              <p>Blog page</p>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
