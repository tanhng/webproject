import React, { Component } from 'react'

export default class ViewItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentID:'',
            currentItem:'',
        }
    };

    componentWillMount() {
        this.getData();
      }

      getData = async () => {
        console.log("test url",window.location.href);
      console.log("test2",window.location.href.slice(30));
      let url=window.location.href.slice(30);

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
            if(!result.success){
                console.log('error');
            } else{
                console.log('data t est',result.data);
                this.setState({
                    currentItem:result.data
                })
                console.log('test5',this.state.currentItem);
            }
        } catch (error) {
          window.alert(error.message);
        }
      };

      
    render() {

        return (
            <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <h5 className="card-title">{this.state.currentItem.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-success" >Dat</button>
        </div>
      </div>
        )
    }
}
