import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';

import './indexLayout.module.css';

export function IndexLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
