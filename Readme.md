## React Boilerplate

### Integrated Library

- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/guide/)
- [React](https://reactjs.org/docs/getting-started.html)
- [React Router DOM](https://reactrouter.com/en/main)
- [Redux & Toolkit js](https://redux-toolkit.js.org/introduction/getting-started)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [Eslint](https://eslint.org/docs/latest/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Docker](https://www.docker.com/get-started/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Husky](https://typicode.github.io/husky/)

### Installation

- Clone the repository.
- Run `yarn` for installing all the dependencies.
- Run `yarn dev` for running the application in dev mode.
- Run `yarn build` for building the application.
- Run `yarn lint:fix` for running eslint and formatting the entire codebase.
- Run `yarn format` for running prettier and formatting the entire codebase.

### Project Structure

- **pages:** consists of all the routing pages.
- **components:** consists of all the reusable components.
- **hooks:** consists of all the custom hooks which can be used in the functional components.
- **models:** type definitions powered by typescript which are shared accross the project.
- **styles:** consists of global CSS styles.
- **layouts:** consists of different views e.g. auth layout, guest layout and more.
- **partials:** consists of shareable fixed components e.g. sidebar, navbar, footer and more.
- **redux:** consists of redux slices, reducer, store and more.
- **utils:** consists of utility functions.

### Configuration & Customization

- **env.example:** consists of environment variables, useful for running the application and building it. React uses .env.local file for taking the environment variables. Hence one must fill the required values for the variables.
- **tailwind.config.cjs:** configure tailwindcss.
- **vite.config.ts:** configure vite.
- **postcss.config.cjs:** configure postcss.
