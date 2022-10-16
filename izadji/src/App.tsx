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
        <Route path={routes.main} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
