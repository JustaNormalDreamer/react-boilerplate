import { Theme } from '@/models/Theme';
import { theme } from '@/config/theme';

export function doSomething() {
  return 'Hello';
}

export function setup(currentTheme: Theme) {
  setupTheme(currentTheme);
}

export function setupTheme(currentTheme: Theme) {
  const selectedTheme = theme[`${currentTheme}`];

  document.documentElement.style.setProperty('--primary', selectedTheme.primary);
  document.documentElement.style.setProperty('--secondary', selectedTheme.secondary);
  document.documentElement.style.setProperty('--ascent', selectedTheme.ascent);
}
