import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <section className="guest-layout">
      <Outlet />
    </section>
  );
};

export default GuestLayout;
