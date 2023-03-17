import "./App.css";
import logo from "./logo.svg";

function Setting() {
  return (
    <div className="Setting">
      <div className="#">
        <div className="Setting">
          <h2>How to set a React environment?</h2>
          <img src={logo} className="App-logo1" alt="logo" />
          <h4>React Environement Setup</h4>
          <p>There are two main ways of setting up the react enviroment:</p>
          <ul>
            <li>Manually setting up all the things using webpack and babel</li>
            <li>Using the create-react-app command.</li>
            Select from the main menu in VS Code - Terminal - New Terminal Enter
            the following code in the terminal: "npx create-react-app ." A
            series of folders and files will be created for react. Enter the
            following code in the terminal: "npm start" This line will open a
            new page in the browser to display the page localhost:3000/#
          </ul>
          <p>
            The second option is the best way to start building a new single or
            multiple-page application in react.
            <br />
            What is create-react-app?
            <br />
            React app is a simple tool or a command that generates the required
            files and folders to start the react application and run it in the
            browser. It's also the officially support by the react team. To run
            the 'npx create-react-app' you need to have Node.js installed on
            your computer.
            <br />
            Node js is a javascript runtime that allows us to execute JS code on
            the server. It's highly probable that you already have it installed
            but if you don't, just visit nodejs.org and select the 'recommended
            for most users' option.
            <br />
            After the installation of node.js, we can create a new folder in our
            desktop. Let's call it 'my_react_app'
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Setting;
