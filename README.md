This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Backend

This website relies on a Node.js remote server to function, the source code for which which can be found at https://github.com/mike1234-pixel/TheBigOne-API. This is an express server using mongoose to update documents stored in a MongoDB database.

The remote server for this project is hosted on heroku and cors is enabled for interaction with the frontend.

## Frontend

This is a React frontend which makes an initial AJAX request to bring back the blog entries data before loading the UI, ensuring instantaneous loading on all pages.

When the frontend receives the blog entries data, it dynamically creates a new Route for each blog entry, setting the url extension to a urlified version of the post's title.

This website uses Redux for its darkMode state only, as this state is required globally. The rest of the state of the website is managed locally using React.

This website uses a clean, functional syntax as much as possible and utlises React hooks. The only component required to be built using an ES6 class component is the Carousel on the homepage.

This site is written in TypeScript.

The website is organised according to Redux architecture and is modular, with all files associated with each component in separate folders.

The site uses Sass primarily for its syntax shortcuts, although its features are not heavily used here.

The frontend is hosted on AWS amplify, and various resources including the foreground video on the homepage and all blog images are stored in AWS S3 buckets.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## redux

This app uses Redux for state management.

To create a new state property in the redux store and modify it in the app, do the following:

1. Go to your reducers file, add the new property to the initial state object, and add a case for it in the switch statement of the reducer function.
2. Create an action creator for it.
3. Call the new action creator in the dispatch function inside mapDispatchToProps in your container (App.jsx).
4. Pass the dispatch function and/or the state down as props from your container to whichever component needs it/them.

You will now be able to dispatch actions from your container component **_via_** your child component.

App.jsx is the container component for this application and all other components are presentational components which receive event listener dispatch functions as props to update state, and the current state as props to display state. The only exception is the BlogPost component which subscribes to the store directly due to fact that the Routes for BlogPost are created dynamically, meaning state can't be passed as props.
