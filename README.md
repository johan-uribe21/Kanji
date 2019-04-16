## Goal
The application is a Japanese-language study application that (will eventually) allow users to submit a list of vocabulary words they want to practice and then provides several games and study resources for the user to practice their vocabulary list. 

## Current Status
Currently the application provides a default list of study cards, each containing the vocabulary word in English as well as the associated Japanese character. The cards are generated through a fetch request to a publicly available API that takes words and returns the Japanese character. The application also allows the user to submit additional words in English and then automatically generates new study cards for each word. Users may also delete study cards. All study cards are displayed on the screen. This application was built using JavaScript and React, with Tachyons for styling. 

## Code 
With this application I paid careful attention to building out the React components using controlled components and granular method calls with good separation of concerns. The code on this project is far more readable and simple than in my previous projects. This application uses redux for state management. This project is a better representation of my progression as a developer who can write readable, efficient, extensible and scalable code. In particular, the asynchronous API calls proved to be a challenge, and I learned a lot in order to overcome that challenge using redux-thunk.

## Ongoing Extensions 

The next step of this application is to add a game option. If the user does not want to simply read through the study cards, the user can pick a “memorization game” option, where each study card is separated into two cards: one card with the English word, and the other with the Japanese character. Then all cards are shuffled and flipped over. The user must then flip over pairs of cards until they find matching pairs. The game is timed, and the specific vocabulary list and time to completion are stored for that user, which will allow the user to easily reload old study lists and attempt to beat their time. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
