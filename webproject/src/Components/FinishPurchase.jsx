import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class FinishPurchase extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            currentItem: '',
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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    adminEmail: localStorage.getItem('email'),
                }),
            }).then(res => {
                return res.json();
            });
            if (!result.success) {
                window.alert(result.message);
                window.location.href = "/login";
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

                console.log('data t est', result.data);
                this.setState({
                    currentItem: result.data
                })
                console.log('test5', this.state.currentItem);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };


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
                </Popup>
            </div>


        );
    }
}



export default FinishPurchase;