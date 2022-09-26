import { RootState } from '@/redux/store';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactElement;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.authSlice);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" state={{ from: location }} replace={true} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
