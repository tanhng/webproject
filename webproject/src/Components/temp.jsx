import React, { Component } from 'react'

export default class temp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            odometer: "",
            address: "",
            color: "",
            price:"",
            dealerComments: "",
            seats:"",
            type:"",
            errMessage: "",
            loading: true,
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
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
            odometer: "",
            address: "",
            color: "",
            price:"",
            dealerComments: "",
            seats:"",
            type:"",
            errMessage: "",
            loading: true,
        });

        try {
            const data = await fetch("http://localhost:5000/products/addItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: this.state.name,
                    odometer: this.state.odometer,
                    address: this.state.address,
                    color: this.state.color,
                    price:this.state.price,
                    dealerComments: this.state.dealerComments,
                    seats:this.state.seats,
                    type:this.state.type,
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
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>Odometer</label>
                    <input type="text" className="form-control" name="odometer" value={this.state.odometer} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>color</label>
                    <input type="text" className="form-control" name="color" value={this.state.color} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>price</label>
                    <input type="text" className="form-control" name="price" value={this.state.price} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>dealerComments</label>
                    <input type="text" className="form-control" name="dealerComments" value={this.state.dealerComments} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>seats</label>
                    <input type="text" className="form-control" name="seats" value={this.state.seats} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>type</label>
                    <input type="text" className="form-control" name="type" value={this.state.type} onChange={this.handleChange} required />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Add</button>
                {this.state.errMessage ? (
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMessage}
                    </div>
                ) : null}
            </form>
        )
    }
}
