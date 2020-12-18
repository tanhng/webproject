import React, { Component } from 'react'
const pageSize = 8;
export default class Products extends Component {
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



  handlePrevClick = () => {
		if (this.state.currentPageNumber > 1) {
			// getData
			this.getData(this.state.currentPageNumber - 1);

			// setState
			this.setState({
				currentPageNumber: this.state.currentPageNumber - 1
			});
		}
	};

	handleNextClick = () => {
		const maxPageNumber = Math.ceil(this.state.total / pageSize);
		if (this.state.currentPageNumber < maxPageNumber) {
			// getData
			this.getData(this.state.currentPageNumber + 1);

			// setState
			this.setState({
				currentPageNumber: this.state.currentPageNumber + 1
			});
		}
	};

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
    var url = '/viewItem/' + item;
    window.location.href = url;
  };

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
    for (let i = 0; i < maxPageNumber; i++) {
      paginations.push(i + 1);
    }


    return (

      <div>

        <div className="super_container">

          {/* Home */}
          <div className="home">
            <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg" />
            <div className="home_overlay" />
            <div className="home_content d-flex flex-column align-items-center justify-content-center">
              <h2 className="home_title">HEDSPI AUTO</h2>
            </div>
          </div>
          {/* Shop */}
          <div className="shop">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  {/* Shop Sidebar */}
                  <div className="shop_sidebar">
                    <div className="sidebar_section">
                      <div className="sidebar_title">Categories</div>
                      <ul className="sidebar_categories">
                        <li><a href="/searchByType/Truck">Truck</a></li>
                        <li><a href="/searchByType/Sedan">Sedan</a></li>
                        <li><a href="/searchByType/Suv">SUV</a></li>
                        <li><a href="/searchByType/Bus">Bus</a></li>
                      </ul>
                    </div>
                   
                    <div className="sidebar_section">
                      <div className="sidebar_subtitle brands_subtitle">Brands</div>
                      <ul className="brands_list">
                        <li className="brand"><a href="/searchByName/Ford">Ford</a></li>
                        <li className="brand"><a href="/searchByName/Camry">Camry</a></li>
                        <li className="brand"><a href="/searchByName/Toyota">Toyota</a></li>
                        <li className="brand"><a href="/searchByName/Vin">Vin</a></li>
                        <li className="brand"><a href="/searchByName/BMW">BMW</a></li>
                        <li className="brand"><a href="/searchByName/Audi">Audi</a></li>
                        <li className="brand"><a href="/searchByName/Kia">Kia</a></li>
                        <li className="brand"><a href="/searchByName/Hyundai">Hyundai</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  {/* Shop Content */}
                  <div className="shop_content">
                    <div className="shop_bar clearfix">
                      <div className="shop_product_count"><span>{this.state.total}</span> products found</div>
                      <div className="shop_sorting">
                        <span>Sort by:</span>
                        <ul>
                          <li>
                            <span className="sorting_text">highest rated<i className="fas fa-chevron-down" /></span>
                            <ul>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }">highest rated</li>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }">name</li>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }">price</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_grid">
                      <div className="product_grid_border" />
                      <div className="row">
                        {this.state.data.map(item => {
                          console.log(item);
                          let finisheditUrl = `/finishedit/${item._id}`;
                          let url = `http://localhost:5000${item.imageUrl}`;
                          return (
                            <div className="product_item is_new"
                              style={{
                                margin: '20px',
                                padding: '20px',
                              }}
                            >
                              <div className="product_border" />
                              <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src={url} alt="" height='300px' width='300px' /></div>
                              <div className="product_content">
                                <div className="product_price">{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Ngày"}</div>
                                <div className="product_name"><div><a href="#" tabIndex={0}>{item.name}</a></div></div>
                              </div>
                              <div className="product_fav"><i className="fas fa-heart" /></div>
                              <ul className="product_marks">
                                {/* <li className="product_mark product_discount">-25%</li> */}
                                <li className="product_mark product_new">new</li>
                              </ul>
                              <div className="form-group row">
                                <a onClick={() => this.handleItemClick(item._id)} className="btn btn-primary">Detail</a>                                
                              </div>
                              {localStorage.getItem('role') == 1 ?
                                  (
                                    <div className="col-lg-7">
                                      <a href={finisheditUrl} className="btn btn-success">Edit</a>
                                    </div>

                                  ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Shop Page Navigation */}
                    {/* <div className="shop_page_nav d-flex flex-row" style={{
                    position: "relative",
                    top: "666px",
                  }}>
                    <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left" /></div>
                    <ul className="page_nav d-flex flex-row">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">...</a></li>
                      <li><a href="#">21</a></li>
                    </ul>
                    <div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right" /></div>
                  </div> */}
                    <ul
                      className="pagination"
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        top: "20%"
                      }}
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="brands">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="brands_slider_container">
                    {/* Brands Slider */}
                    <div className="owl-carousel owl-theme brands_slider">
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_1.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_2.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_3.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_4.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_5.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_6.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_7.jpg" alt="" /></div></div>
                      <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_8.jpg" alt="" /></div></div>
                    </div>
                    {/* Brands Slider Navigation */}
                    <div className="brands_nav brands_prev"><i className="fas fa-chevron-left" /></div>
                    <div className="brands_nav brands_next"><i className="fas fa-chevron-right" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="newsletter">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                    <div className="newsletter_title_container">
                      <div className="newsletter_icon"><img src="images/send.png" alt="" /></div>
                      <div className="newsletter_title">Sign up for Newsletter</div>
                      <div className="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
                    </div>
                    <div className="newsletter_content clearfix">
                      <form action="#" className="newsletter_form">
                        <input type="email" className="newsletter_input" required="required" placeholder="Enter your email address" />
                        <button className="newsletter_button">Subscribe</button>
                      </form>
                      <div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}