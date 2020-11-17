import React, { Component } from 'react';
class Products extends Component {

  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      data: [],
      detailModalVisible: false,
		selectedPost: undefined,
    }
  };

  componentWillMount() {
    this.getData();
  }





  getData = async () => {
    try {
      const result = await fetch(
        `http://localhost:5000/products/getItems`,
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
    } catch (error) {
      window.alert(error.message);
    }
  };

  handlePostClick = (selectedPost) => {
		this.setState({
			detailModalVisible: true,
			selectedPost: selectedPost,
		});
	};

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const data = await fetch("http://localhost:5000/products/viewDetail", {
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
            localStorage.setItem('myValueInLocalStorage',data.data.email);
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
        {/* {this.state.data.map(item => {
          console.log("test4", item);
          return (
            <form onSubmit={this.handleFormSubmit}>
              <p>{item.name}</p>
              <a href="#" onClick={() => this.handlePostClick(item)} className="btn btn-primary">
											Detail
										</a>
            </form>



          );
        })} */}
        
				{this.state.detailModalVisible ? (
					<p>hello</p>
				) : null}
      </div>
    );
  }
}



export default Products;