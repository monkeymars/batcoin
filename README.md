# Preview

![alt text](https://i.imgur.com/ufDZcwJ.png)
![alt text](https://i.imgur.com/2RBkcCL.png)
![alt text](https://i.imgur.com/JDstasU.png)

# App Structure & Pattern

    .
    ├── public                    # public directory
    │   └── index.html            # index.html wrapper
    ├── src
    │   ├── components            # components that can be used globaly
    │   │   └── Navbar            # Navbar header component
    │   ├── pages                 # this directory is used to differentiate code based on page url
    │   │   └── Login             # login page for set authentication before enter exhange page
    │   │   └── 404               # page not found: 404
    │   │   └── Exchange          # page not found: 404
    │   │       ├── components    # component that used only by specific page (Exchange Component)
    │   │       ├── services      # service for list order book (Sell & Buy)
    │   │       ├── styles        # this styles directory is used only for specific page
    │   │       └── index.jsx     # index file for Exchange page
    │   ├── index.js              # react app entry point
    │   └── ...
    └── ...

This project was bootstrapped with React, Babel, Webpack, esLint & AntD as UI Framework.
I try implementing react hooks api and using functional component instead of class component for clearer syntax, less line code, smaller file zise afer bundling also it is easier to share stateful logic between component.

As you can see at ./src, there is components directory so all global components goes here (eg: NavbarComponent). Then ./src/pages will store codes based on page url (eg: /login, /404, /exchange). Inside page component directory, there are components, services, styles, index that specificaly used by its page.

In Exchange page, I created Buy Form & Sel Form in separated functional component in terms of component based pattern & code readability. I created OrderBook services on ./src/services directory so it can be more manageable to handle data.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
