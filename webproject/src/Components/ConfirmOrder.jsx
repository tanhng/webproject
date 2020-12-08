import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class ConfirmOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            email: '',
            soNgay: '',
            dateStart: '',
            price: '',
            detailModalVisible: false,
        }
    };

    componentWillMount() {
        this.getData();
    }







    getData = async () => {
        this.setState({
            currentID: localStorage.getItem('productID'),
            email: localStorage.getItem('email'),
        })
        try {
            const data = await fetch("http://localhost:5000/receipts/getInfoOrder", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: localStorage.getItem("email"),
                    productID: localStorage.getItem("productID"),
                }),
            }).then((res) => { return res.json(); });


            console.log('data frontend login', data.product);
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });

            } else {
                this.setState({
                    price: data.product.price,
                });
                console.log('data frontend login', data.product.price);
                console.log("test12", data.dateStart);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };

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
                    email: localStorage.getItem("email"),
                    productID: this.state.currentID,
                    soNgay: this.state.soNgay,
                    dateStart: this.state.dateStart,
                    price: this.state.price
                }),
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
                
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
            <div >
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                
                    <div className="form-group">
                        <label >So Ngay</label>
                        <input type="number" value={this.state.soNgay} onChange={this.handleSoNgayChange} className="form-control" placeholder="date start" />

                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="date" value={this.state.dateStart} onChange={this.handleDateStartChange} className="form-control"  />

                    </div>
                    {this.state.detailModalVisible && this.state.soNgay > 0 ? (
                        <Popup trigger={<button type="button" >Dat</button>} position="top left">
                            {close => (

                                <div className="modal-content">
                                    <form onSubmit={this.handleFormSubmit}>
                                    <ul className="list-group">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="modal-footer">
                                        <button type="button" onClick={close} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    </form>
                                </div>

                            )}
                        </Popup>) : null}

                        {this.state.errMessage ? (
                        <div className="alert alert-danger" role="alert">
                            {this.state.errMessage}
                        </div>
                    ) : null}
                

            </div>
        )
    }
}
