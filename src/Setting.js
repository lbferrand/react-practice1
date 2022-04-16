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
            the following code in the terminal: "npx create-react-app." A series
            of folders and files will be created for react. Enter the following
            code in the terminal: "npm start" This line will open a new page in
            the browser to display the page localhost:3000/#
          </ul>
          <p>
            The second option is the best way to start building a new single or
            multiple-page application
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Setting;
