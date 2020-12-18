import React, { Component } from 'react'
const maxFileSize = 5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;
export default class AddItem extends Component {
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
        }
    };


    componentWillMount() {
        if (localStorage.getItem('email')) {
          this.getData();
        }
        else {
          window.location.href = "/login";
        }
      }
    
      getData = async () => {
        try {
          const result = await fetch(`http://localhost:5000/admin/checkMailAdmin`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
          }).then(res => {
            return res.json();
          });
          if (!result.success) {
            window.alert(result.message);
            window.location.href = "/";
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

        try {
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
            console.log(uploadResult);
            const data = await fetch("http://localhost:5000/products/addItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    imageUrl: uploadResult.data,
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
                // window.localStorage.setItem("email", data.data.email);
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
                        <h2>Edit Car</h2>
                        <br />
                        <br />
                    </div>
                    <div className="col-lg-10 push-lg-4 personal-info">
                        <form role="form" onSubmit={this.handleFormSubmit} >
                            <div className="form-group row" >
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                                <div className="col-lg-7" >
                                    <input style={{ fontSize: '16px' }} className="form-control " type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Image</label>
                                <div className="col-lg-7">
                                    <input className="form-control"
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
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Odometer</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="odometer" value={this.state.odometer} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">address</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="address" value={this.state.address} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Color</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="color" value={this.state.color} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="price" value={this.state.price} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">DealerComments</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="dealerComments" value={this.state.dealerComments} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Seat</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" name="seats" value={this.state.seats} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Type</label>
                                <div className="col-lg-7">
                                    {/* <input style={{ fontSize: '16px' }} className="form-control" name="type" value={this.state.type} onChange={this.handleChange} required /> */}
                                    {/* <label style={{ fontSize: '16px' }} htmlFor="exampleFormControlSelect2">Choose your car type</label> */}
                                    <select className="form-control form-control-lg" name="type" value={this.state.type} onChange={this.handleChange} required>
                                        <option>Truck</option>
                                        <option>Sedan</option>
                                        <option>Bus</option>
                                    </select>
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
                </div >
            </div>

        )
    }
}
