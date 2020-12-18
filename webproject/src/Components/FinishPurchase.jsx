import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Button, Modal } from 'react-bootstrap';

class FinishPurchase extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            currentItem: '',
            detailModalVisible: false,
            email: '',
            soNgay: '',
            dateStart: '',
            price: '',
            show: false,
            car_name: '',
            status: '',
            soNgayThem: 0,
        }
    };
    handleModalChange = (event) => {
        this.setState({
            show: !this.state.show
        });
    }
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
        };
        let url = window.location.href.slice(30);
        this.setState({
            currentID: url,
        })
        try {
            const result = await fetch(
                `http://localhost:5000/receipts/getReceiptsByID?itemId=${url}`,
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
                this.setState({
                    currentItem: result.data,
                    email: result.data.userEmail,
                    imageUrl: result.data.imageUrl,
                    car_name: result.data.car_name,
                    dateStart: result.data.dateStart,
                    soNgay: result.data.soNgayThue,
                    price: result.data.price,
                    status: result.data.status,

                })
                console.log('test5', this.state.currentItem);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };

    handleModalDelelte = (event) => {
        this.setState({
            show_delete: !this.state.show_delete
        });
    }

    handleGiaHan = async (event) => {
        
        try {
            const data = await fetch("http://localhost:5000/admin/giaHanThem", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    soNgayThem: this.state.soNgayThem,
                    currentItem: this.state.currentItem
                }),
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                window.location.href = "http://localhost:3000/purchase";
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

    handleSoNgayThemChange = (event) => {
        this.setState({
            soNgayThem: event.target.value
        });
    }


    handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetch("http://localhost:5000/admin/finishPurchase", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    receiptID: this.state.currentID,
                }),
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
                console.log('data front end', data);
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
        let url = `http://localhost:5000${this.state.imageUrl}`;
        return (


            <div >
                <div className="super_container">
                    {/* Header */}


                    {/* ORDER VIEW */}
                    <div className="col-lg-12 text-lg-center">
                        <h2>Order</h2>
                        <br />
                        <br />
                    </div>
                    <div className="col-lg-10 push-lg-4 personal-info">
                        <div className="form-group row" >
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
                            <div className="col-lg-7" >
                                {/* <input className="form-control " value={this.state.email} required /> */}
                                <h2 className="form-control " style={{ fontSize: '16px' }} >{this.state.email}</h2>
                            </div>
                        </div>
                        <div className="form-group row" >
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label"> Car</label>
                            <div className="col-lg-7" >
                                <h2 className="form-control " style={{ fontSize: '16px', height: '50px' }}>{this.state.car_name}</h2>
                            </div>
                        </div>
                        <div className="form-group row" >
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label"> Image</label>
                            <div className="col-lg-7" >
                                <img src={url} class="img-fluid" alt="Responsive image" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">DateStart</label>
                            <div className="col-lg-7">
                                <input className="form-control" style={{ fontSize: '16px' }} value={this.state.dateStart} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                            <div className="col-lg-7">
                                <h2 className="form-control " style={{ fontSize: '16px' }}>{this.state.soNgay}</h2>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-2 " style={{ fontSize: '16px', marginLeft: '15%' }}><h4>Total:</h4></label>
                            <div className="col-lg-7">
                                <h4 style={{ fontSize: '16px' }}>{(this.state.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-lg-5 col-form-label form-control-label" />
                            {this.state.errMessage ? (
                                <div className="col-lg-5">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.errMessage}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        {this.state.status == 0 ? (
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label" />
                                <div className="col-lg-5">
                                    <button style={{ fontSize: '16px' }} type="submit" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleModalChange() }} >Submit</button>
                                    <Modal show={this.state.show} onHide={() => { this.handleModalChange() }}>
                                        <Modal.Header closeButton> CONFIRM ORDER </Modal.Header>
                                        <Modal.Body>
                                            <h4>Your Order</h4>
                                            <div className="form-group row" >
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
                                                <div className="col-lg-7" >
                                                    <input className="form-control " value={this.state.email} required />
                                                </div>
                                            </div>
                                            <div className="form-group row" >
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                                                <div className="col-lg-7" >
                                                    <input className="form-control " value={this.state.car_name} required />
                                                </div>
                                            </div>
                                            <div className="form-group row" >
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">DateStart</label>
                                                <div className="col-lg-7" >
                                                    <input className="form-control " value={this.state.dateStart} required />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
                                                <div className="col-lg-7">
                                                    <input className="form-control" value={this.state.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Tuần"} required />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                                                <div className="col-lg-7">
                                                    <input className="form-control" value={this.state.soNgay} required />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Total: </label>
                                                <div className="col-lg-7">
                                                    <h4>{(this.state.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                                                </div>
                                            </div>
                                            <h3>Do you want to order this car ?</h3>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={() => { this.handleModalChange() }}>
                                                Close
                                        </Button>
                                            <form onSubmit={this.handleFormSubmit}>
                                                <button type="submit" className="btn btn-primary" onClick={() => { this.handleModalChange() }}>Submit</button>
                                            </form>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div className="col-lg-2">
                                    <button style={{ fontSize: '16px' }} type="submit" className="btn btn-danger btn-lg btn-block" onClick={() => { this.handleModalDelelte() }}>Gia Han</button>
                                    <Modal show={this.state.show_delete} onHide={() => { this.handleModalDelelte() }}>
                                        <Modal.Header closeButton>  </Modal.Header>
                                        <Modal.Body>
                                            <div className="form-group row" >
                                                <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">So Ngay Them: </label>
                                                <div className="col-lg-7" >
                                                    <input type="number" style={{ fontSize: '16px' }} id="quantity" min="0" className="form-control" name="soNgayThem" value={this.state.soNgayThem} onChange={this.handleSoNgayThemChange} required />
                                                </div>
                                            </div>
                                            {/* <input type="number" style={{ fontSize: '16px' }} id="quantity" min="0" className="form-control" name="soNgay" value={this.state.soNgay} onChange={this.handleSoNgayChange} required /> */}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={() => { this.handleModalDelelte() }}>Close</Button>
                                            <button type="submit" className="btn btn-primary btn-danger" onClick={() => { this.handleGiaHan() }}>Gia Han</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}



export default FinishPurchase;