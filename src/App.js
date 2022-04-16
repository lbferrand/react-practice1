import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Practicing React</h1>
      <h2>Pros using React</h2>
      <ol>
        <li>Easy to learn</li>
        <li>Modern framework</li>
        <li>Big popular web developer tool</li>
      </ol>

      <div className="Definition">
        <h2>Begin with HTML</h2>
        <p>
          The first step that I would like to introduce is GitHub Desktop.
          <ul>
            <li>Open GitHub Desktop and create a new repository</li>
            <ol>
              <li>
                Visit the following page: https://desktop.github.com/ and
                install it
              </li>
            </ol>
            <li>
              Deploy this repository to GitHub (version control) by clicking
              "push origin" blue button
            </li>
            <li>
              Open the file using VS Code by clicking the option inside GitHub
              Desktop
            </li>
            <li>Open the file 'index.html'</li>
            <li>
              Select from the main menu in VS Code - Terminal - New Terminal
            </li>
            <li>
              Enter the following code in the terminal: "npx create-react-app."
              A series of folders and files will be created for react.
            </li>
            <li>
              Enter the following code in the terminal: "npm start" This line
              will open a new page in the browser to display the page
              localhost:3000/#
            </li>
          </ul>
          The 'index.html' file will have some information on it, but not the
          actual website. Open the 'index.js' file which is located in 'src'
          folder. This file should have already a component called "App"
          <br />
          <img
            src="appjs.png"
            className="App-file"
            alt="file"
            width={"400px"}
          />
          <br />
          Open the file 'App.js': this file will contain most of the information
          and the components you will create. You can also create the components
          inside the 'index.js' as the picture displays. Multiple components
          have been created. Each component represent some of the different
          areas of the page. When you divide the page in multiple components, it
          becomes easy to maintain.
        </p>
        <h2>Create a new component using React</h2>
        <p>
          React JS is a component-based front-end library. All part of the
          application are divided into parts called components. A component is a
          small piece of the user interface (UI), every react.js application is
          a tree of components. Components let you split the UI into independent
          reusable parts. When you are building an application using react you
          build independent and reusable components and then you'll combine them
          to build a full-fledged web application. In React, there are two types
          of components:
        </p>
        <li>Functional componenets</li>
        <li>Class-bassed components</li>
        <br />
        <p>
          Let's see how class-bassed component works:
          <ol>
            <li>We import react and the structure component from react</li>
            import React, Component from 'react'
            <br />
            Why do we need to import React? We need to import React to be able
            to use the entirely of this library.
            <br />
            <li>
              Then we use a regular javascript class to make a react component
              that extends the react component already written for us in the
              library.
            </li>
            <br />
            <li>
              Then we use the render method that describes what should be
              displayed and how should the UI should look like.
            </li>
            <br />
            <img
              src="react-comp.png"
              className="App-file"
              alt="file"
              width={"300px"}
            />
          </ol>
        </p>
      </div>
    </div>
  );
}

export default App;
