import React, { Component } from 'react';

class EditCar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      car: '',
      data: [],
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


  handleCarChange = (event) => {
    this.setState({
      car: event.target.value
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/products/getItemsByName", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          car: this.state.car,
        }),
      }).then((res) => { return res.json(); });
      console.log('data frontend login', data);
      this.setState({
        car: '',
        data: [],
      })
      if (!data.success) {
        this.setState({
          errMessage: data.message,
        });
      } else {
        this.setState({
          data: data.data,
        })

      }
    } catch (err) {
      this.setState({
        errMessage: err.message
      });
    } finally {
      console.log('test ne', this.state.data);
      this.setState({
        loading: false
      });
    }

  }

  handleButtonClick = (item) => {
    var url = '/finishedit/' + item;
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
                <input type="text" required="required" className="header_search_input" value={this.state.car} onChange={this.handleCarChange} placeholder="Search for products..." />
               
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
                      <div className="product_price">$225</div>
                      <div className="product_name"><div><a href="#" tabIndex={0}>Philips BT6900A</a></div></div>
                    </div>
                    <div className="product_fav"><i className="fas fa-heart" /></div>
                    <ul className="product_marks">
                      <li className="product_mark product_discount">-25%</li>
                      <li className="product_mark product_new">new</li>
                    </ul>
                    {item.status == 0 ? (
                      <button type="button" class="btn btn-success" onClick={() => this.handleButtonClick(item._id)}>Gui</button>
                    ) : null}
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



export default EditCar;