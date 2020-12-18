import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class ConfirmOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            imageUrl: '',
            car_name: '',
            email: '',
            soNgay: '',
            dateStart: '',
            price: '',
            currentItem: '',
            detailModalVisible: false,
            show: false,
            show_delete: false,
        }
    };

    componentWillMount() {
        if (localStorage.getItem("productID"))
            this.getData();
    }

    getData = async () => {
        let url="http://localhost:5000/receipts/getInfoOrder?productID="+localStorage.getItem('productID');
        this.setState({
            currentID: localStorage.getItem('productID'),
        })
        try {
            const data = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });

            } else {
                console.log("test user",data.user);
                this.setState({
                    currentItem: data.product,
                    price: data.product.price,
                    imageUrl: data.product.imageUrl,
                    car_name: data.product.name,
                    email: data.user[0].email,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    };

    handleModalChange = (event) => {
        this.setState({
            show: !this.state.show
        });
    }

    handleModalDelelte = (event) => {
        this.setState({
            show_delete: !this.state.show_delete
        });
    }

    handleDelelte = (event) => {
        localStorage.removeItem("productID");
        window.location.href = "/";
    }

    handleSoNgayChange = (event) => {
        this.setState({
            soNgay: event.target.value
        });
    }

    handleDateStartChange = (event) => {
        this.setState({
            dateStart: event.target.value,
            detailModalVisible: true,
        });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetch("http://localhost:5000/receipts/createReceipt", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: this.state.email,
                    productID: this.state.currentID,
                    soNgay: this.state.soNgay,
                    dateStart: this.state.dateStart,
                    price: this.state.price,
                    imageUrl: this.state.imageUrl,
                    car_name: this.state.car_name,
                }),
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                localStorage.removeItem("productID");
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
            <div >
                {localStorage.getItem('productID') ? (
                    <div className="super_container">

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
                                    <input style={{ fontSize: '16px' }} className="form-control " value={this.state.email} required />
                                </div>
                            </div>
                            <div className="form-group row" >
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                                <div className="col-lg-7" >
                                    <input style={{ fontSize: '16px' }} className="form-control " value={this.state.currentItem.name} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Odometer</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.odometer} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">address</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.address} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Color</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.color} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Ngày"} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">DealerComments</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.dealerComments} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Seat</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.seats} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Type</label>
                                <div className="col-lg-7">
                                    <input style={{ fontSize: '16px' }} className="form-control" value={this.state.currentItem.type} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">So Ngay</label>
                                <div className="col-lg-7">
                                    <input type="number" style={{ fontSize: '16px' }} id="quantity" min="0" className="form-control" name="soNgay" value={this.state.soNgay} onChange={this.handleSoNgayChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label">Start Date</label>
                                <div className="col-lg-7">
                                    <input type="date" style={{ fontSize: '16px' }} className="form-control" name="dateStart" value={this.state.dateStart} onChange={this.handleDateStartChange} required />
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
                            <div className="form-group row">
                                <label style={{ fontSize: '16px', marginLeft: '15%' }} className="col-lg-2 col-form-label form-control-label" />
                                {this.state.detailModalVisible && this.state.soNgay > 0 ? (
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
                                                        <input className="form-control " value={this.state.currentItem.name} required />
                                                    </div>
                                                </div>
                                                <div className="form-group row" >
                                                    <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Type</label>
                                                    <div className="col-lg-7" >
                                                        <input className="form-control " value={this.state.currentItem.type} required />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
                                                    <div className="col-lg-7">
                                                        <input className="form-control" value={this.state.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Ngày"} required />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                                                    <div className="col-lg-7">
                                                        <input className="form-control" value={this.state.soNgay} required />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-2 "><h4>Total:</h4></label>
                                                    <div className="col-lg-7">
                                                        <h4>{(this.state.price * this.state.soNgay).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
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
                                ) : null}
                                <div className="col-lg-2">
                                    <button style={{ fontSize: '16px' }} type="submit" className="btn btn-danger btn-lg btn-block" onClick={() => { this.handleModalDelelte() }}>DELETE</button>
                                    <Modal show={this.state.show_delete} onHide={() => { this.handleModalDelelte() }}>
                                        <Modal.Header closeButton> CONFIRM DELETE </Modal.Header>
                                        <Modal.Body>
                                            <h3>Do you want to delete this order ?</h3>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={() => { this.handleModalDelelte() }}>
                                                Close
                                        </Button>
                                            <button type="submit" className="btn btn-primary btn-danger" onClick={() => { this.handleDelelte() }}>Delete</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                    </div>
                ) :
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                            <h2> Bạn chưa đặt xe nào </h2>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
