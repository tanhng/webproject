import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class EditCar extends Component {

  constructor(props) {
    super(props)

    this.state = {
        car:'',
        data:[],
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
                data:data.data,
            })
           
        }
    } catch (err) {
        this.setState({
            errMessage: err.message
        });
    } finally {
        console.log('test ne',this.state.data);
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
     <div><form onSubmit={this.handleFormSubmit}>
         <input type='text' placeholder='please input' value={this.state.car} onChange={this.handleCarChange}></input>
         <button type='submit'>search</button>
         </form>
         <div class="list-group">
          {

            this.state.data.map((item) => {
              return (

                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">${item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {item.status == 0 ? (
                        <button type="button" class="btn btn-success" onClick={() => this.handleButtonClick(item._id)}>Gui</button>
                      ) : null}
                  </div>
                </div>)
            })
          }
        </div>
     </div>

     
    );
  }
}



export default EditCar;