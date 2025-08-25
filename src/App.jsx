import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

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
          element: <Elements />,
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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
