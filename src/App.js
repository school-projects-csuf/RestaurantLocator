import React, { Component } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import HomePage from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HomePage />
      </div>
    );
  }
}

{
  /* <Router>
  <Route path="/" component={WelcomePage} />
</Router> */
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
