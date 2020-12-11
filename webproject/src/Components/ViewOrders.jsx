import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class ViewOrders extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  };

  componentDidMount() {
    this.getData();
  }


  getData = async () => {
    try {
      const result = await fetch(
        `http://localhost:5000/receipts/getOrders`,
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
      console.log(result);
      this.setState({
        total: result.data.total,
        data: result.data.data
      });
      console.log('test3', this.state.data[0]);
      console.log('test3', this.state.total);
    } catch (error) {
      window.alert(error.message);
    }
  };



  render() {

    return (
     <div>

     </div>
    );
  }
}



export default ViewOrders;