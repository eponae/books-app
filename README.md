# Getting Started with Books app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) Typescript template.

## Available Scripts

In the project directory, you can run:

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
- Technical :
  - Normalize Redux state and use immer if necessary for immutability.
  - Use Redux dev tools and chrome developer console to debug.
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
- Handle forms that appear in more than one bookshelf.
- Handle user information and display.
- Add design system components : typography, pagination and loading.
- Handle different languages.
- Cancel requests if the user goes quickly from page to page.
- Handle form covers that can not be loaded and optimize covers loading.
- Handle errors and display a feedback to the user.
- Handle api errors : inconsistent number of forms per page or downtime if any.
- Deploy to production and check npm tasks for CI.
- Change Favicon.
- Technical :
  - Study if Map, Set and Reselect could have been usefull.
  - Use lazy loading and code splitting.
  - Do not use global variable for forms count per page.

## Issues to fix

┌─────────────────────────────────────────────────────────────────────────────┐
│ Npm Audit Manual Review │
│ Some vulnerabilities require your attention to resolve │
│
│ Visit https://go.npm.me/audit-guide for additional guidance │
└─────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│ High │ Prototype Pollution │
├─────────────────────────────────────────────────────────────────────────────┤
│ Package │ immer │
├─────────────────────────────────────────────────────────────────────────────┤
│ Patched in │ >=8.0.1 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts │
├─────────────────────────────────────────────────────────────────────────────┤
│ Path │ react-scripts > react-dev-utils > immer │
├─────────────────────────────────────────────────────────────────────────────┤
│ More info │ https://npmjs.com/advisories/1603 │
└─────────────────────────────────────────────────────────────────────────────┘
found 1 high severity vulnerability in 2056 scanned packages
