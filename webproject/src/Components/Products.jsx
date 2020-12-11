import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
const pageSize = 6;
class Products extends Component {

  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      data: [],
      detailModalVisible: false,
      selectedPost: undefined,
      currentPageNumber: 1,
    }
  };

  componentDidMount() {
    this.getData(1);
  }





  getData = async (pageNumber) => {
    try {
      const result = await fetch(
        `http://localhost:5000/products/getItems?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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

  handleItemClick = (item) => {
    console.log('hello', item);
    var url = '/product/' + item;
    window.location.href = url;
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
        localStorage.setItem('email', data.data.email);
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


	handlePageChange = newPageNumber => {
		// call getData
		this.getData(newPageNumber);

		// setState currentPageNumber
		this.setState({
			currentPageNumber: newPageNumber
		});
	};


  render() {
    const maxPageNumber = Math.ceil(this.state.total / pageSize);
		const paginations = [];
		for (let i = 0; i < maxPageNumber; i ++) {
			paginations.push(i + 1);
		}
    return (
      <div>
      <div>

        {/* <div class="list-group">
          {

            this.state.data.map((item) => {
              return (

                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">${item._id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-success" onClick={() => this.handleItemClick(item._id)}>Gui</button>
                  </div>
                </div>)
            })
          }
        </div> */}

<div className="row">
					{this.state.data.map(item => {
						console.log(item);
						return (
							<div className="col-4 mt-4" key={item._id}>
								<div className="card">
									<div
										className="card-img-top"

										style={{
											backgroundImage: `url(http://localhost:5000${item.imageUrl})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeate',
											height: '350px',
											width: 'auto',
											margin: '10px',
											padding: '20px'
										}}
									></div>



									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<h5 className="card-title" style={{ color: 'lightgrey' }}>{item.price}đ</h5>
										<p
											className="card-text"
											style={{
												height: '50px',
												textOverflow: 'ellipsis',
												overflow: 'hidden'
											}}
										>
											
											{item.name}
										</p>
										<a href="#" onClick={() => this.handleItemClick(item._id)} className="btn btn-primary">
											Detail
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>

        {this.state.detailModalVisible ? (
          <p>hello</p>
        ) : null}
      </div>
      <nav aria-label="Page navigation example">
      <ul
        className="pagination"
        style={{ float: 'right', marginTop: '30px', marginBottom: '30px' }}
      >
        <li className="page-item">
          <a
            className="page-link"
            aria-label="Previous"
            onClick={this.handlePrevClick}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {paginations.map(item => {
          const isActive = item === this.state.currentPageNumber;
          let classNameValue = '';
          if (isActive) {
            classNameValue = 'page-item active';
          } else {
            classNameValue = 'page-item';
          }
          return (
            <li className={classNameValue} key={item}>
              <a
                className="page-link"
                onClick={() => {
                  this.handlePageChange(item);
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a
            className="page-link"
            aria-label="Next"
            onClick={this.handleNextClick}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
</div>
    );
  }
}



export default Products;