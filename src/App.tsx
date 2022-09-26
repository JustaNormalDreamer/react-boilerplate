import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '@/redux/store';
import '@/styles/style.css';

const GuestLayout = lazy(() => import('@/layouts/guest.layout'));
const AuthLayout = lazy(() => import('@/layouts/auth.layout'));

const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/register'));

const Home = lazy(() => import('@/pages/index'));
const ListPost = lazy(() => import('@/pages/posts/index'));
const ShowPost = lazy(() => import('@/pages/posts/show'));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
