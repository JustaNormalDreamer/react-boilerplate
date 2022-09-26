import { ThemeSlice } from '@/models/Theme';
import themeSliceReducer, { defaultTheme, toggleTheme } from '@/redux/theme/theme.slice';

describe('Theme reducer', () => {
  it('Should return the initial state.', () => {
    const initialState: ThemeSlice = {
      theme: 'light',
    };
    const action = { type: '' };
    const result = themeSliceReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('Should set the theme state.', () => {
    const initialState: ThemeSlice = {
      theme: 'light',
    };
    const action = toggleTheme('light');
    const result = themeSliceReducer(initialState, action);
    expect(result).toEqual({ theme: 'light' });
  });

  it('Should set the theme state to the default state.', () => {
    const initialState: ThemeSlice = {
      theme: 'dark',
    };
    const action = defaultTheme();
    const result = themeSliceReducer(initialState, action);
    expect(result).toEqual({ theme: 'light' });
  });
});
