import React from 'react';
import bingeLogo9 from "../../assets/img/bingeLogo9.png";
import fire from "../../config/Fire";

export class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            fireErrors: null
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    register = e => {
        const { username, email, passwordOne} = this.state;
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
        .then(fire.database().ref('users/' + username).set({
          username,
          email,
        })
      )
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            fireErrors,
          } = this.state;

        const isInvalid =
          passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          username === '';

        let errorNotification = this.state.fireErrors ?
          (<div className="error"><p>{this.state.fireErrors}</p></div>) : null;

        return <div className="base-container">
            <div className="content">
                <div className="image">
                    <img src={bingeLogo9}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            name="username" placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordOne">Password</label>
                        <input type="password"
                            name="passwordOne"
                            placeholder="Password"
                            value={this.state.passwordOne}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            name="passwordTwo"
                            placeholder="Confirm Password"
                            value={this.state.passwordTwo}
                            onChange={this.handleChange}
                            />
                    </div>
                    {errorNotification}
                </div>
            </div>
            <div className="footer">
                <button type="submit"
                    className="btn"
                    //disabled={isInvalid}
                    onClick={this.register}
                    style={{fontSize: "21px",
                    padding: "5px 20px",
                    border: "0",
                    backgroundColor: "#3498db",
                    color: "#fff",
                    borderRadius: "3px",
                    transition: "all 250ms ease-in-out",
                    cursor: "pointer",

                    }}>
                        Register
                    </button>
            </div>
        </div>
    }
}
