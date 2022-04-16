import "./App.css";

function React1() {
  return (
    <div className="React1">
      <div className="#">
        <div className="React1">
          <h2>Create a new component using React</h2>
          <p>
            React JS is a component-based front-end library. All part of the
            application are divided into parts called components. A component is
            a small piece of the user interface (UI), every react.js application
            is a tree of components. Components let you split the UI into
            independent reusable parts. When you are building an application
            using react you build independent and reusable components and then
            you'll combine them to build a full-fledged web application. In
            React, there are two types of components:
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
              <br />
              Class-based components are React History. They are not being used
              at all anymore. They were replaced by a "Functional Components".
            </ol>
            <h4>Functional Components</h4>
            <ul>
              <li>We import React from 'react' library</li>
              In the new versions of React it's not needed anymore.
              <li>Then we create a function</li>
              It can be a normal function, arrow function, named function,
              whatever you would prefer. In this example, we are using an 'arrow
              function'. In the function, we return something that react should
              display.
              <br />
              <img
                src="react-comp1.png"
                className="App-file"
                alt="file"
                width={"300px"}
              />
              <br />
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default React1;
