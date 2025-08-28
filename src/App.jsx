import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IndexLayout } from './components/indexLayout/indexLayout';
import { HomePage } from './pages/home/homePage';
import { Projects } from './pages/projects/projects';
import { Snippets } from './pages/snippets/snippets';
import { Contact } from './pages/contact/contact';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import { NotFound } from './pages/notFound/notFound';
import styles from './App.module.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'snippets',
          element: <Snippets />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
