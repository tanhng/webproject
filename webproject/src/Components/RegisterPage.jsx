import React, { Component } from 'react'
//const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            phonenumber: "",
            email: "",
            pass: "",
            errMessage: "",
            loading: true,
        }
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log(this.state.name);
    }

    handlePhoneNumbChange = (event) => {
        this.setState({
            phonenumber: event.target.value
        });
        console.log(this.state.phonenumber);
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
        console.log(this.state.email);
    }

    handlePasswordChange = (event) => {
        this.setState({
            pass: event.target.value
        });
        console.log(this.state.pass);
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();

        //validate
        // if (!emailRegex.test(this.state.email)) {
        //     this.setState({
        //         errMessage: "Invalid Email"
        //     });
        // } else if (this.state.pass.length < 6) {
        //     this.setState({
        //         errMessage: 'Password must be more than 6 characters'
        //     });
        // } else {
        this.setState({
            name: "",
            phonenumber: "",
            email: "",
            pass: "",
            errMessage: "",
            loading: true,
        });

        try {
            const data = await fetch("http://localhost:5000/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: this.state.name,
                    phonenumber: this.state.phonenumber,
                    email: this.state.email,
                    password: this.state.pass,
                })
            }).then((res) => { return res.json(); });

            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
                window.localStorage.setItem("email", data.data.email);
                window.location.href = "/";
            }
        } catch (err) {
            this.setState({
                errMessage: err.message
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }
    // }

    render() {

        return (
            // <form onSubmit={this.handleFormSubmit}>
            //     <label htmlFor="fname">Name:</label><br />
            //     <input type="text" id="fname" name="name" value={this.state.name} onChange={this.handleNameChange} required/><br />
            //     <label htmlFor="fname">PhoneNumber:</label><br />
            //     <input type="text" id="fname" name="phonenumber" value={this.state.phonenumber} onChange={this.handlePhoneNumbChange} required/><br />
            //     <label htmlFor="fname">Email:</label><br />
            //     <input type="text" id="fname" name="email" value={this.state.email} onChange={this.handleEmailChange} required/><br />
            //     <label htmlFor="lname">Password:</label><br />
            //     <input type="text" id="lname" name="password" value={this.state.pass} onChange={this.handlePasswordChange} required/><br /><br />
            //     <input type="submit" defaultValue="Submit" />
            //     {this.state.errMessage ? (
            //                     <div className="alert alert-danger" role="alert">
            //                         {this.state.errMessage}
            //                     </div>
            //                 ) : null}
            // </form>
            <form onSubmit={this.handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" name="phonenumber" value={this.state.phonenumber} onChange={this.handlePhoneNumbChange} required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleEmailChange} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" name="password" value={this.state.pass} onChange={this.handlePasswordChange} required />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
                {this.state.errMessage ? (
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMessage}
                    </div>
                ) : null}
            </form>
        )
    }
}