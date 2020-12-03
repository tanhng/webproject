import React, { Component } from 'react'

export default class ConfirmOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            email: '',
        }
    };

    componentWillMount() {
        this.getData();
    }







    getData = async () => {
        this.setState({
            currentID: localStorage.getItem('productID'),
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



            console.log('data frontend login', data);
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                console.log("test12",data.dateStart);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };

    handleSubmit




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
                <button type="button" class="btn btn-success" onClick={this.handleSubmit()}  >Dat</button>
            </div>
        )
    }
}
