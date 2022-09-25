import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = lazy(() => import('@/partials/auth/navbar'));
const Footer = lazy(() => import('@/partials/auth/footer'));

const AuthLayout = () => {
  return (
    <section className="guest-layout">
      <Suspense fallback={'Loading...'}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </section>
  );
};

export default AuthLayout;
