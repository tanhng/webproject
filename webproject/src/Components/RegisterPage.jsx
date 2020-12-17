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
            <div>
                <div className="super_container">
                

                <div className="col-lg-12 text-lg-center">
                    <h2>Register</h2>
                    <br />
                    <br />
                </div>
                <div className="col-lg-10 push-lg-4 personal-info">
                    <form role="form" onSubmit={this.handleFormSubmit} >
                        <div className="form-group row" >
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                            <div className="col-lg-7" >
                                <input style={{ fontSize: '16px' }} className="form-control " type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Phone Number</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type="number" name="phonenumber" value={this.state.phonenumber} onChange={this.handlePhoneNumbChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Email</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type='email' name="email" value={this.state.email} onChange={this.handleEmailChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Password</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type='password' name="password" value={this.state.pass} onChange={this.handlePasswordChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-5 col-form-label form-control-label" />
                            <div className="col-lg-5">
                                <button style={{ fontSize: '16px' }} type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Save Changes">Submit</button>
                            </div>
                            {this.state.errMessage ? (
                                <div className="alert alert-danger" role="alert">
                                    {this.state.errMessage}
                                </div>
                            ) : null}
                        </div>
                    </form>
                </div>
                </div>
            </div >
        )
    }
}