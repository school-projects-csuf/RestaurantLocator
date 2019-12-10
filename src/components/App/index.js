import React, { Component } from "react";
import HomePage from "../Home/index";
import Restaurants from "../Restaurants/Restaurants";
import NavBar from "../NavBar/index";


class HomeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      isClicked: false
    };
  }

  handlelocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState({
      isClicked: true
    });
    event.preventDefault();
  };

  render() {
    if (!this.state.isClicked) {
      return (
        <div>
          <HomePage />
          <NavBar />
          
          <form onSubmit={this.handleSubmit}>
            <div
              className="input-group input-group-lg mb-3"
              style={{
                zIndex: 3,
                width: "40%",
                marginTop: "40%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <b>Near:</b>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={this.handlelocationChange}
                placeholder="City, Zip code"
              />
              <button type="submit" className="btn btn-info">
                Go!
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <Restaurants location={this.state.location} />
        </div>
      );
    }
  }
}

export default HomeApp;

// begin trash

// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/search" component={Restaurants} />
//       </Switch>
//     </div>
//   </Router>
//
// );
//
// export default App;
// export default withAuthentication(App);
//
// {
//   /* <Navigation />
//
// <hr />
//
// <Route exact path={ROUTES.LANDING} component={LandingPage} />
// <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
// <Route path={ROUTES.SIGN_IN} component={SignInPage} />
// <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
// <Route path={ROUTES.HOME} component={HomePage} />
// <Route path={ROUTES.ACCOUNT} component={AccountPage} />
// <Route path={ROUTES.ADMIN} component={AdminPage} /> */
// }
