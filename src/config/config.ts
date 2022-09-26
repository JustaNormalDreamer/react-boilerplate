const { REACT_APP_APP_NAME, REACT_APP_BACKEND_URL } = import.meta.env;

const apiCacheDuration: number = 60 * 60 * 5; //5 minutes

export const appConfig = {
  appName: REACT_APP_APP_NAME ?? 'React Boilerplate',
  backendUrl: REACT_APP_BACKEND_URL ?? 'https://jsonplaceholder.typicode.com',
  apiCacheDuration,
};
