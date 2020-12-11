import React, { Component } from 'react'
const maxFileSize = 5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;
export default class temp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            imageUrl: '',
            file: undefined,
            odometer: "",
            address: "",
            color: "",
            price: "",
            dealerComments: "",
            seats: "",
            type: "",
            errMessage: "",
            loading: true,
            currentID: '',
            currentItem: '',
        }
    };


    componentWillMount() {
        this.getData();
    }






    getData = async () => {
        console.log("test url", window.location.href);
        console.log("test2", window.location.href.slice(33));
        let url = window.location.href.slice(33);
        this.setState({
            currentID: url,
        })
        try {
            const result = await fetch(
                `http://localhost:5000/products/getItemByID?itemId=${url}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                }
            )
                .then(res => {
                    return res.json();
                });
            if (!result.success) {
                console.log('error');
            } else {

                console.log('data t est', result.data);
                this.setState({
                    currentItem: result.data,
                    name: result.data.name,
                    imageUrl: result.data.imageUrl,
                    odometer: result.data.odometer,
                    address: result.data.address,
                    color: result.data.color,
                    price: result.data.price,
                    dealerComments: result.data.dealerComments,
                    seats: result.data.seats,
                    type: result.data.type,
                })
                console.log('test5', this.state.currentItem);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };

    handleFileChange = (event) => {
        this.setState({
            successmessage: '',
        });
        const file = event.target.files[0];
        if (!imageFileRegex.test(file.name)) {
            this.setState({
                errormessage: 'invalid file',
            });
        }
        else if (file.size > maxFileSize) {
            this.setState({
                errormessage: 'file is too large',
            });

        } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                //filereader.result
                console.log(fileReader.result);
                this.setState({
                    errormessage: '',
                    file: file,
                    imageUrl: fileReader.result,
                });
            };

        }

    }


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
        // this.setState({
        //     name: "",
        //     odometer: "",
        //     address: "",
        //     color: "",
        //     price:"",
        //     dealerComments: "",
        //     seats:"",
        //     type:"",
        //     errMessage: "",
        //     loading: true,
        // });

        try {
            if (this.state.file) {
                const formData = new FormData();
                formData.append('image', this.state.file);
                console.log(this.state.file);

                const uploadResult = await fetch(`http://localhost:5000/upload/photos`, {
                    method: 'POST',
                    credentials: 'include',
                    body: formData,
                }
                )
                    .then((res) => {
                        return res.json();
                    })
                this.setState({
                    imageUrl:uploadResult.data,
                })
            }
            // console.log(uploadResult);
            const data = await fetch("http://localhost:5000/products/updateItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    currentID: this.state.currentID,
                    imageUrl: this.state.imageUrl,
                    name: this.state.name,
                    odometer: this.state.odometer,
                    address: this.state.address,
                    color: this.state.color,
                    price: this.state.price,
                    dealerComments: this.state.dealerComments,
                    seats: this.state.seats,
                    type: this.state.type,
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
                <input
                    id='file'
                    type='file'
                    className='form-control'
                    accept="image/*"
                    style={{
                        color: 'transparent',
                        margin: `0 auto`,
                        textIndent: `-999em`,
                        zIndex: 10,
                        height: `50px`
                    }}

                    onChange={this.handleFileChange}
                />
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
