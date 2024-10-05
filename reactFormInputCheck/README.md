# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

npx rtl-book serve .\roles-notes.js

Attached to this lecture is the completed version of the roles notebook. It contains all the same code shown in the videos, but I have added in a number of comments.

To run this notebook, download the attached zip file and extract it. At your terminal, navigate to the directory you extracted the notebook to. Finally, run the command 'npx rtl-book serve roles-notes.js'

#####

import { render, screen } from '@testing-library/react';

function RoleExample() {
return (

<div>
<a href="/">Link</a>
<button>Button</button>
<footer>Content Info</footer>
<h1>Heading</h1>
<header>Banner</header>
<img alt="description" /> Img
<input type="checkbox" /> checkbox
<input type="number" /> spin Button
<input type="radio" /> Radio
<input type="text" /> Textbox
<li>List Item</li>
<ul>List Group</ul>
</div>
);
}

render(<RoleExample />);

####

test('can find element by role', () => {
render(<RoleExample />);

const roles = [
'link',
'button',
'contentinfo',
'heading',
'banner',
'img',
'checkbox',
'spinbutton',
'radio',
'textbox',
'listitem',
'list',
];

for (let role of roles) {
const el = screen.getByRole(role);
expect(el).toBeInTheDocument();
}
});

####

function AccessibleName() {
return (

<div>

      <button>Submit</button>
      <button>Cancel</button>
    </div>

);
}

render(<AccessibleName/>)

###

test('can select by accessible name', () => {
render(<AccessibleName />);

const submitButton = screen.getByRole('button', {
name: /Submit/i,
});

const cancelButton = screen.getByRole('button', {
name: /cancel/i,
});

expect(submitButton).toBeInTheDocument();
expect(cancelButton).toBeInTheDocument();
});

###

function MoreNames() {
return (
<>
<label htmlFor="email">Email</label>
<input id="email" />
<label htmlFor="search">Search</label>
<input id="search" />
</>
);
}

render(<MoreNames />);

###

test('make sure two input render', () => {
render(<MoreNames />);

const emailInput = screen.getByRole('textbox', {
name: /email/i,
});

const searchInput = screen.getByRole('textbox', {
name: /search/i,
});

expect(emailInput).toBeInTheDocument();
expect(searchInput).toBeInTheDocument();
});

###

function IconButton() {
return (

<div>
<button aria-label="sign in">
<svg />
</button>
<button aria-label='sign out'>
<svg />
</button>
</div>
);
}

render(<IconButton />);

####

test('find element based on label', () => {
render(<IconButton />);

const signinBtn = screen.getByRole('button', {
name: /sign in/i,
});
const signoutBtn = screen.getByRole('button', {
name: /sign out/i,
});

expect(signinBtn).toBeInTheDocument();

expect(signoutBtn).toBeInTheDocument();
});

#####
