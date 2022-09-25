
const {
    REACT_APP_APP_NAME,
    REACT_APP_BACKEND_URL,
} = process.env;

export const appConfig = {
    appName: REACT_APP_APP_NAME ?? 'React Boilerplate',
    backendUrl: REACT_APP_BACKEND_URL ?? 'http://xyz.com',
};