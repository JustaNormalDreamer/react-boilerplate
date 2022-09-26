import { AuthSlice, User } from '@/models/User';
import authSlice, { login, logout } from '@/redux/auth/auth.slice';

describe('Auth reducer', () => {
  it('Should return the initial state.', () => {
    const initialState: AuthSlice = {
      isLoggedIn: false,
      user: null,
    };
    const action = { type: '' };
    const result = authSlice(initialState, action);
    expect(result).toEqual({
      isLoggedIn: false,
      user: null,
    });
  });

  it('Should set the logged in user.', () => {
    const initialState: AuthSlice = {
      isLoggedIn: false,
      user: null,
    };

    const credential: User = {
      id: 'some-id',
      name: 'Some User',
      email: 'some@email.com',
    };

    const action = login(credential);
    const result = authSlice(initialState, action);
    expect(result).toEqual({
      isLoggedIn: true,
      user: credential,
    });
  });

  it('Should remove the user when logout.', () => {
    const credential: User = {
      id: 'some-id',
      name: 'Some User',
      email: 'some@email.com',
    };

    const initialState: AuthSlice = {
      isLoggedIn: false,
      user: credential,
    };

    const action = logout();
    const result = authSlice(initialState, action);
    expect(result).toEqual({
      isLoggedIn: false,
      user: null,
    });
  });
});
