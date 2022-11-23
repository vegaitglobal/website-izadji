import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/style/utils/_reset.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import HomePage from './pages/HomePage/HomePage';
import PridePage from './pages/PridePage/PridePage';
import { routes } from './routes';
import Layout from './components/Layout/Layout';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import DonatePage from './pages/DonatePage/DonatePage';
import PublicationPage from './pages/PublicationPage/PublicationPage';
import DocumentationPage from './pages/DocumentationPage/DocumentationPage';
import BlogNewsPage from './pages/BlogNewsPage/BlogNewsPage';
import SingleBlogPage from './pages/BlogPage/SingleBlogPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import WorkProgramPage from './pages/WorkProgramPage/WorkProgramPage';

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
          path={routes.publication}
          element={
            <Layout>
              <PublicationPage />
            </Layout>
          }
        />
        <Route
          path={routes.workProgram}
          element={
            <Layout>
              <WorkProgramPage />
            </Layout>
          }
        />
        <Route
          path={routes.blogPage}
          element={
            <Layout>
              <SingleBlogPage />
            </Layout>
          }
        />
        <Route
          path={routes.blog}
          element={
            <Layout>
              <BlogNewsPage />
            </Layout>
          }
        />
        <Route
          path={routes.project}
          element={
            <Layout>
              <ProjectPage />
            </Layout>
          }
        />
        <Route
          path={routes.documentation}
          element={
            <Layout>
              <DocumentationPage />
            </Layout>
          }
        />
        <Route
          path={routes.aboutUs}
          element={
            <Layout>
              <AboutUsPage />
            </Layout>
          }
        />
        <Route
          path={routes.donate}
          element={
            <Layout>
              <DonatePage />
            </Layout>
          }
        />
        <Route
          path={routes.contactUs}
          element={
            <Layout>
              <ContactUsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
