import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
class Purchase extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      data: [],
      adminEmail: '',
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
    // console.log("test url", window.location.href);
    // console.log("test2", window.location.href.slice(31));
    
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

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/admin/getOrders", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          email: this.state.email,
        }),
      }).then((res) => { return res.json(); });
      
      this.setState({
        email: '',
        data: [],
      })
      if (!data.success) {
        this.setState({
          errMessage: data.message,
        });
      } else {
        this.setState({
          data: data.data.data,
        })
        
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

  handleButtonClick = (item) => {
    var url = '/receipt/' + item;
    window.location.href = url;
  };



  render() {

    return (
      <div>
        <div className="super_container">

          <div class="list-group">
            <div className="header_search_form_container">
              <form onSubmit={this.handleFormSubmit} className="header_search_form clearfix">
                {/* <form action="#" className="header_search_form clearfix"> */}
                <input type="email" required="required" className="header_search_input" value={this.state.email} onChange={this.handleEmailChange} placeholder="Search for products..." />
                
                <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
              </form>
            </div>
            <div className="row">
              {this.state.data.map(item => {
                console.log(item);
                let url = `http://localhost:5000${item.imageUrl}`;
                return (
                  <div className="product_item is_new"
                    style={{
                      margin: '20px',
                      padding: '20px',
                    }}
                  >
                    <div className="product_border" />
                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src={url} alt="" /></div>
                    <div className="product_content">
                      <div className="product_price">{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                      <div className="product_name"><div><a href="#" tabIndex={0}>{item.car_name}</a></div></div>
                    </div>
                    <div className="product_fav"><i className="fas fa-heart" /></div>
                    <ul className="product_marks">
                      {/* <li className="product_mark product_discount">-25%</li> */}
                      <li className="product_mark product_new">new</li>
                    </ul>

                    <button type="button" class="btn btn-success" onClick={() => this.handleButtonClick(item._id)}>Gui</button>


                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default Purchase;