import React, { Component } from 'react'

export default class ViewItem extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      currentID: '',
      currentItem: '',
    }
  };

  componentWillMount() {
    this.getData();
  }







  getData = async () => {
    console.log("test url", window.location.href);
    console.log("test2", window.location.href.slice(30));
    let url = window.location.href.slice(30);
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
          currentItem: result.data
        })
        console.log('test5', this.state.currentItem);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };


  handleOrder = async () => {
    try {
      window.localStorage.setItem("productID", this.state.currentID);
      window.location.href="/confirmOrder";
    } catch (err) {
      this.setState({
        errMessage: err.message
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const data = await fetch("http://localhost:5000/receipts/addReceipt", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              
            }),
        }).then((res) => { return res.json(); });
        console.log('data frontend login', data);
        this.setState({
            email: '',
            pass: '',
        })
        if (!data.success) {
            this.setState({
                errMessage: data.message,
            });
        } else {
            //save data to localStorage
            localStorage.setItem('email',data.data.email);
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
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{this.state.currentItem.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-success" onClick={() => this.handleOrder()}  >Dat</button>
        </div>
      </div>
    )
  }
}
