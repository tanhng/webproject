import React, { Component } from 'react'

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)
        if(localStorage.getItem("email")){
            window.location.href = "/";
        }
        this.state = {
            email: "",
            pass: "",
        }
    };

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
        try {
            console.log(this.state.email);
            const data = await fetch("http://localhost:5000/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.pass
                }),
            }).then((res) => { return res.json(); });
            console.log('data frontend login', data);
            this.setState({
                email: '',
                pass: '',
            })
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
                localStorage.setItem('email', data.data.email);
                localStorage.setItem('role', data.data.role);
                console.log("thanh cong");
                window.location.href = "http://localhost:3000/";
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
    render() {
        return (
            <div>
                <div className="super_container">


                    {/* <form onSubmit={this.handleFormSubmit}>
             <input type='text' placeholder='please input' value={this.state.car} onChange={this.handleCarChange}></input>
             <button type='submit'>search</button>
             </form> */}
                    <div className="col-lg-12 text-lg-center">
                        <h2>Login</h2>
                        <br />
                        <br />
                    </div>
                    <div className="col-lg-10 push-lg-4 personal-info">
                        <form role="form" onSubmit={this.handleFormSubmit} >
                            <div className="form-group row" >
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Email</label>
                                <div className="col-lg-7" >
                                    <input style={{ fontSize: '16px' }} className="form-control " type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Password</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" type="password" name="pass" value={this.state.pass} onChange={this.handlePasswordChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label"></label>
                                <div className="col-lg-7">
                                    <a href="http://localhost:5000/auth-fb/facebook" className="facebook-login">Login with facebook <i className="fa fa-facebook" /></a>
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
            </div>
        );
    }
}