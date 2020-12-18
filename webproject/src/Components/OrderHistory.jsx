import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
 
const pageSize = 8;

class OrderHistory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            email: '',
            data: [],
            show: false,
        }
    };

    componentWillMount() {
        if (localStorage.getItem('email')) {
            this.getData(1);
        }
        else {
            window.location.href = "/login";
        }
    }

    getData = async (pageNumber) => {
        try {
            const result = await fetch(`http://localhost:5000/user/orderHistory?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                
            }).then(res => {
                return res.json();
            });
            console.log(result);
            this.setState({
                total: result.data.total,
                data: result.data.data.reverse()
            });
            console.log('test3', this.state.data[0]);
        } catch (error) {
            window.alert(error.message);
        }
    };

    handleModalChange = (event) => {
        this.setState({
            show: !this.state.show
        });
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
                            <h2 className="home_title">Smartphones &amp; Tablets</h2>
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
                                                    let url = `http://localhost:5000${item.imageUrl}`;
                                                    let today = new Date();
                                                    let ngayThue = new Date(item.dateStart);
                                                    let temp = parseInt((ngayThue.getTime() - today.getTime()) / (1000 * 3600 * 24));
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
                                                                <div className="product_price">{item.price}</div>
                                                                <div className="product_name"><div><a tabIndex={0}>{item.car_name}</a></div></div>
                                                            </div>
                                                            {Math.abs(temp)<5 ? (
                                                                <ul className="product_marks">
                                                                    <li className="product_mark product_new">new</li>
                                                                </ul>
                                                            ) : null
                                                                // <ul className="product_marks">
                                                                //     <li className="product_mark product_new">new</li>
                                                                // </ul>
                                                            }
                                                            <button type="button" class="btn btn-success" onClick={() => { this.handleModalChange() }}>View</button>
                                                            <Modal show={this.state.show} onHide={() => { this.handleModalChange() }}>
                                                                <Modal.Header closeButton> ORDER </Modal.Header>
                                                                <Modal.Body>
                                                                    <h4>Your Order</h4>
                                                                    <div className="form-group row" >
                                                                        <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
                                                                        <div className="col-lg-7" >
                                                                            <input className="form-control " value={item.userEmail} required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row" >
                                                                        <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                                                                        <div className="col-lg-7" >
                                                                            <input className="form-control " value={item.car_name} required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                                                                        <div className="col-lg-7">
                                                                            <input className="form-control" value={item.soNgayThue} required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Date Start</label>
                                                                        <div className="col-lg-7">
                                                                            <input className="form-control" value={item.dateStart} required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-2 "><h4>Total:</h4></label>
                                                                        <div className="col-lg-7">
                                                                            <h4>{(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                                                                        </div>
                                                                    </div>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button onClick={() => { this.handleModalChange() }}>Close</Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                        </div>

                                        <ul
                                            className="pagination"
                                            style={{
                                                position: "relative",
                                                display: "flex",
                                                justifyContent: "center",
                                                top: "20%"
                                            }}
                                        >
                                            {/* <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    aria-label="Previous"
                                                    // onClick={this.handlePrevClick}
                                                >
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li> */}
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
                                            {/* <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    aria-label="Next"
                                                    onClick={this.handleNextClick}
                                                >
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li> */}
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



        );
    }
}



export default OrderHistory;