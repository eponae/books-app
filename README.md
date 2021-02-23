# Getting Started with Books app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) Typescript template.

## Available in production

Deployed with [Vercel](https://vercel.com/) to https://books-app-tau.vercel.app/.

## Available scripts

In the project directory, you can run different tasks with npm.
If you don't have npm installed : [install Node and npm](https://www.npmjs.com/get-npm).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## What was done

- Display the given list of bookshelves (no pagination).
- Display the list of forms for each selected bookshelf thanks to pagination : previous and next buttons displayed, number of pages computed, grid.
- Display information about each form (book) in a list of forms : cover, short title, authors if any, price.
- Add links to Glose's authors public pages.
- Create Redux model for : bookshelves, forms and authors (user is not handled).
- Reuse some of the existing CSS from Glose example page.
- Use given API services.
- Make a minimum error handling.
- Technical :
  - Normalize Redux state and use immer if necessary for immutability.
  - Use Redux dev tools, chrome developer console and [Insomnia](https://insomnia.rest/) to debug.
  - Use css modules and scss for stylesheets.
  - Use typescript for typing.
  - Use react-testing-library for testing.
  - Use [funtch](https://github.com/ViBiOh/funtch) for http requests.
  - Use VsCode IDE to develop this project and github to manage the source code.

## What could have been done

- Add more tests : unit, integration, E2E with cypress.
- Add more features :
  - Show average rate for each form if any.
  - Sort and filter the list of forms displayed.
  - Allow different types of list display (grid, list).
  - Display forms count next to bookshelf names.
  - Show long form or bookshelf titles on mouse hover thanks to a tooltip.
  - Handle user information and display.
- Handle forms that appear in more than one bookshelf.
- Add design system components : typography, pagination and loading.
- Handle different languages.
- Handle different currencies.
- Cancel requests if the user goes quickly from page to page.
- Handle form covers that can not be loaded and optimize covers loading.
- Handle errors and display a better feedback to the user.
- Handle api errors : inconsistent number of forms per page or downtime if any.
- Deploy to production and check npm tasks for CI.
- Change Favicon.
- Improve performance and study web vitals.
- Technical :
  - Study if Map, Set and Reselect could have been usefull.
  - Use lazy loading and code splitting.
  - Do not use global variable for forms count per page.
  - Improve file paths to make it more readable.

## Issues to fix

**Npm Audit Manual Review**

<p>Some vulnerabilities require attention to resolve</p>
<p>Package : immer</p>
<p>Patched in 8.0.1/<p>
<p>Dependency react-scripts > react-dev-utils > immer</p>

**Lighhouse report**

<p>Performance : 54</p>
<p>Accessibility : 95</p>
<p>Best practices : 93</p>
<p>SEO : 100</p>
