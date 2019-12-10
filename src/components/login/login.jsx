import React from 'react';
import bingeLogo9 from "../../assets/img/bingeLogo9.png";
import fire from "../../config/Fire";


export class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            fireErrors: null
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    render() {
        const {
            email,
            password
          } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        let errorNotification = this.state.fireErrors ?
            (<div className="error"><p>{this.state.fireErrors}</p></div>) : null;

        return <div className="base-container">
            <div className="content">
                <div className="image">
                    <img src={bingeLogo9} />
                </div>
                <div className="form">
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
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    {errorNotification}
                </div>
            </div>
            <div className="footer">
                <button type="submit"
                    className="btn"
                    disabled={isInvalid}
                    onClick={this.login}
                    style={{fontSize: "21px",
                    padding: "5px 20px",
                    border: "0",
                    backgroundColor: "#3498db",
                    color: "#fff",
                    borderRadius: "3px",
                    transition: "all 250ms ease-in-out",
                    cursor: "pointer",

                    }}>
                        Login
                    </button>
            </div>
        </div>
    }
}
