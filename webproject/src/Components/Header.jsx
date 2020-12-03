import React, { Component } from 'react'
import logo from '../car-it.svg';
export default class RegisterPage extends Component {

    handleHome = (event) => {
        event.preventDefault();
        window.location.href = "/";
    }
    handleLogin = (event) => {
        event.preventDefault();
        window.location.href = "/login";
    }
    handleRegister = (event) => {
        event.preventDefault();
        window.location.href = "/register";
    }

    handleLogout = async () => {
        const data = await fetch("http://localhost:5000/user/logout")
            .then((res) => { return res.json(); });
        if (data.success) {
            window.localStorage.clear();
            window.location.href = "/login";
        }
    }
    render() {
        let value = localStorage.getItem('email'); 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <img src={logo} alt="Logo" style={{ width: '200px' }} />
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark" onClick={this.handleHome}>HOME</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark" onClick={this.handleLogin}>Login</button>
                                {/* <Link className="nav-link text-white text-uppercase" to={"/login"}>Login</Link> */}
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark" onClick={this.handleRegister}>Register</button>
                                {/* <Link className="nav-link text-white text-uppercase" to={"/register"}>Register</Link> */}
                            </li>
                            {/* <li className="nav-item">
                                <button type="button" class="btn btn-dark" href="/" onClick={this.handleLogout}>Logout</button>
                            </li> */}
                            { value? (
                                <li className="nav-item">
                                <button type="button" className="btn btn-dark" href="/" onClick={this.handleLogout}>Logout</button>
                            </li>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}