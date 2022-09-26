import { Suspense, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootState } from '@/redux/store';
import '@/styles/style.css';
import { setup } from '@/utils/utils';

const GuestLayout = lazy(() => import('@/layouts/guest.layout'));
const AuthLayout = lazy(() => import('@/layouts/auth.layout'));

const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/register'));

const Home = lazy(() => import('@/pages/index'));
const ListPost = lazy(() => import('@/pages/posts/index'));
const ShowPost = lazy(() => import('@/pages/posts/show'));

function App() {
  const { theme } = useSelector((state: RootState) => state.themeSlice);

  useEffect(() => {
    setup(theme);
  }, []);

  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<GuestLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<ListPost />} />
            <Route path="/posts/:postId" element={<ShowPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
