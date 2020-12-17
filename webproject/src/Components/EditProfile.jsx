import React, { Component } from 'react'
//const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            phonenumber: "",
            email: "",
            pass: "",
            errMessage: "",
            loading: true,
            repeatPass:'',
        }
    };


    componentWillMount() {
        if (localStorage.getItem("email"))
            this.getData();
    }

    getData = async () => {
        this.setState({
            email: localStorage.getItem('email'),
        })
        try {
            const data = await fetch(`http://localhost:5000/user/getUserByEmail?email=${localStorage.getItem('email')}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            }).then((res) => { return res.json(); });


            console.log('data frontend login', data);
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });

            } else {
                this.setState({
                    name: data.data.data[0].name,
                    phonenumber: data.data.data[0].phonenumber,
                 });
                console.log('data frontend login', data.data.data[0]);
                // console.log("test12", data.dateStart);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };





    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
        // console.log(this.state.name);
    }

    handlePhoneNumbChange = (event) => {
        this.setState({
            phonenumber: event.target.value
        });
        // console.log(this.state.phonenumber);
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
        //console.log(this.state.email);
    }

    handlePasswordChange = (event) => {
        this.setState({
            pass: event.target.value
        });
        //console.log(this.state.pass);
    }

    handleRepeatPasswordChange = (event) => {
        this.setState({
            repeatPass: event.target.value
        });
        //console.log(this.state.pass);
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
            // name: "",
            // phonenumber: "",
            email: "",
            pass: "",
            errMessage: "",
            repeatPass:'',
            loading: true,
        });

        try {
            const data = await fetch("http://localhost:5000/user/editprofile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: this.state.name,
                    email: localStorage.getItem('email'),
                    phonenumber: this.state.phonenumber,
                    password: this.state.pass,
                    repeatPassword: this.state.repeatPass,
                })
            }).then((res) => { return res.json(); });

            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
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
                                <input style={{ fontSize: '16px' }} className="form-control " type="text" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder={this.state.name} required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Phone Number</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handlePhoneNumbChange} placeholder={this.state.phonenumber} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Password</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type='password' name="password" value={this.state.pass} onChange={this.handlePasswordChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Repeat Password</label>
                            <div className="col-lg-7">
                                <input style={{ fontSize: '16px' }} className="form-control" type='password' name="password" value={this.state.repeatPass} onChange={this.handleRepeatPasswordChange} />
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