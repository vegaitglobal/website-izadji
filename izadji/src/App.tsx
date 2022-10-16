import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/style/utils/_reset.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import HomePage from './pages/HomePage/HomePage';
import PridePage from './pages/PridePage/PridePage';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main} element={<HomePage />} />
        <Route path={routes.pride} element={<PridePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
