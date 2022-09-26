import { theme } from '@/config/theme';
import { describe, expect, it } from '@jest/globals';
import { doSomething, setup, setupTheme } from './utils';

describe('Utilities', () => {
  it('Test Do Something', () => {
    expect(doSomething()).toBe('Hello');
  });
  it('It sets up the light theme on load.', () => {
    setup('light');
    const t = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    expect(t).toBe(theme.light.primary);
  });
});
