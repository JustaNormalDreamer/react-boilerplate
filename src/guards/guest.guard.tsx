import { RootState } from '@/redux/store';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface GuestGuardProps {
  children: ReactElement;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.authSlice);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
