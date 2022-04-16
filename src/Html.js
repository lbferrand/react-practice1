import "./App.css";

function Html() {
  return (
    <div className="Html">
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
      </div>
    </div>
  );
}

export default Html;
