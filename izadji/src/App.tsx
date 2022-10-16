import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../src/style/utils/_reset.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import HomePage from './pages/HomePage/HomePage';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.workProgram} element={<p>Work program</p>} />
        <Route path={routes.blogPage} element={<p>Single blog page</p>} />
        <Route path={routes.blog} element={<p>Blog page</p>} />
        <Route path={routes.main} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
