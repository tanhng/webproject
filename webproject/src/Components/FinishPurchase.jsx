import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Button, Modal } from 'react-bootstrap';

class FinishPurchase extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentID: '',
            currentItem: '',
            detailModalVisible: false,
            email: '',
            soNgay: '',
            dateStart: '',
            price: '',
            show: false,
            car_name:'',
        }
    };
    handleModalChange = (event) => {
        this.setState({
            show: !this.state.show
        });
    }
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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    adminEmail: localStorage.getItem('email'),
                }),
            }).then(res => {
                return res.json();
            });
            if (!result.success) {
                window.alert(result.message);
                window.location.href = "/login";
            }
        } catch (error) {
            window.alert(error.message);
        };
        let url = window.location.href.slice(30);
        this.setState({
            currentID: url,
        })
        try {
            const result = await fetch(
                `http://localhost:5000/receipts/getReceiptsByID?itemId=${url}`,
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
                    currentItem: result.data,
                    email: result.data.userEmail,
                    imageUrl: result.data.imageUrl,
                    car_name: result.data.car_name,
                    dateStart: result.data.dateStart, 
                    soNgay: result.data.soNgayThue, 
                    price: result.data.price, 
                })
                console.log('test5', this.state.currentItem);
            }
        } catch (error) {
            window.alert(error.message);
        }
    };


    handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetch("http://localhost:5000/admin/finishPurchase", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    receiptID: this.state.currentID,
                }),
            }).then((res) => { return res.json(); });
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                }); 
            } else {
                //save data to localStorage
                console.log('data front end',data);
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
        let url = `http://localhost:5000${this.state.imageUrl}`;
        return (
            // <div>
            //     <Popup trigger={<button type="button" >Dat</button>} position="top left">
            //         {close => (

            //             <div className="modal-content">
            //                 <form onSubmit={this.handleFormSubmit}>
            //                     <ul className="list-group">
            //                         <li className="list-group-item">Cras justo odio</li>
            //                         <li className="list-group-item">Dapibus ac facilisis in</li>
            //                         <li className="list-group-item">Morbi leo risus</li>
            //                         <li className="list-group-item">Porta ac consectetur ac</li>
            //                         <li className="list-group-item">Vestibulum at eros</li>
            //                     </ul>
            //                     <div className="modal-footer">
            //                         <button type="button" onClick={close} className="btn btn-secondary" data-dismiss="modal">Close</button>
            //                         <button type="submit" className="btn btn-primary">Submit</button>
            //                     </div>
            //                 </form>
            //             </div>

            //         )}
            //     </Popup>
            //     {this.state.detailModalVisible && this.state.soNgay > 0 ? (
            //                 <div className="col-lg-5">
            //                     <button style={{ fontSize: '16px' }} type="submit" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleModalChange() }} >Submit</button>
            //                     <Modal show={this.state.show} onHide={() => { this.handleModalChange() }}>
            //                         <Modal.Header closeButton> CONFIRM ORDER </Modal.Header>
            //                         <Modal.Body>
            //                             <h4>Your Order</h4>
            //                             <div className="form-group row" >
            //                                 <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
            //                                 <div className="col-lg-7" >
            //                                     <input className="form-control " value={this.state.email} required />
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row" >
            //                                 <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
            //                                 <div className="col-lg-7" >
            //                                     <input className="form-control " value={this.state.currentItem.name} required />
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row" >
            //                                 <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Type</label>
            //                                 <div className="col-lg-7" >
            //                                     <input className="form-control " value={this.state.currentItem.type} required />
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row">
            //                                 <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
            //                                 <div className="col-lg-7">
            //                                     <input className="form-control" value={this.state.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Tuần"} required />
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row">
            //                                 <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
            //                                 <div className="col-lg-7">
            //                                     <input className="form-control" value={this.state.soNgay} required />
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row">
            //                                 <label className="col-lg-2 "><h4>Total:</h4></label>
            //                                 <div className="col-lg-7">
            //                                     <h4>{(this.state.price*this.state.soNgay).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
            //                                 </div>
            //                             </div>
            //                             <h3>Do you want to order this car ?</h3>
            //                         </Modal.Body>
            //                         <Modal.Footer>
            //                             <Button onClick={() => { this.handleModalChange() }}>
            //                                 Close
            //                             </Button>
            //                             <form onSubmit={this.handleFormSubmit}>
            //                                 <button type="submit" className="btn btn-primary" onClick={() => { this.handleModalChange() }}>Submit</button>
            //                             </form>
            //                         </Modal.Footer>
            //                     </Modal>
            //                 </div>
            //             ) : null}
            // </div>

<div >
                <div className="super_container">
                    {/* Header */}
                    <header className="header">
                        {/* Top Bar */}
                        <div className="top_bar">
                            <div className="container">
                                <div className="row">
                                    <div className="col d-flex flex-row">
                                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div>+38 068 005 3570</div>
                                        <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                                        <div className="top_bar_content ml-auto">
                                            <div className="top_bar_menu">
                                                <ul className="standard_dropdown top_bar_dropdown">
                                                    <li>
                                                        <a href="#">English<i className="fas fa-chevron-down" /></a>
                                                        <ul>
                                                            <li><a href="#">Italian</a></li>
                                                            <li><a href="#">Spanish</a></li>
                                                            <li><a href="#">Japanese</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">$ US dollar<i className="fas fa-chevron-down" /></a>
                                                        <ul>
                                                            <li><a href="#">EUR Euro</a></li>
                                                            <li><a href="#">GBP British Pound</a></li>
                                                            <li><a href="#">JPY Japanese Yen</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="top_bar_user">
                                                <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                                <div><a href="#">Register</a></div>
                                                <div><a href="#">Sign in</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Header Main */}
                        <div className="header_main">
                            <div className="container">
                                <div className="row">
                                    {/* Logo */}
                                    <div className="col-lg-2 col-sm-3 col-3 order-1">
                                        <div className="logo_container">
                                            <div className="logo"><a href="#">OneTech</a></div>
                                        </div>
                                    </div>
                                    {/* Search */}
                                    <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                        <div className="header_search">
                                            <div className="header_search_content">
                                                <div className="header_search_form_container">
                                                    <form onSubmit={this.handleFormSubmit} className="header_search_form clearfix">
                                                        {/* <form action="#" className="header_search_form clearfix"> */}
                                                        <input type="text" required="required" className="header_search_input" value={this.state.car} onChange={this.handleCarChange} placeholder="Search for products..." />
                                                        {/* <input type='text' placeholder='please input' ></input> */}
                                                        <div className="custom_dropdown">
                                                            <div className="custom_dropdown_list">
                                                                <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                                <i className="fas fa-chevron-down" />
                                                                <ul className="custom_list clc">
                                                                    <li><a className="clc" href="#">All Categories</a></li>
                                                                    <li><a className="clc" href="#">Computers</a></li>
                                                                    <li><a className="clc" href="#">Laptops</a></li>
                                                                    <li><a className="clc" href="#">Cameras</a></li>
                                                                    <li><a className="clc" href="#">Hardware</a></li>
                                                                    <li><a className="clc" href="#">Smartphones</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Wishlist */}
                                    <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                            <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                                                <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                                                <div className="wishlist_content">
                                                    <div className="wishlist_text"><a href="#">Wishlist</a></div>
                                                    <div className="wishlist_count">115</div>
                                                </div>
                                            </div>
                                            {/* Cart */}
                                            <div className="cart">
                                                <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                                    <div className="cart_icon">
                                                        <img src="images/cart.png" alt="" />
                                                        <div className="cart_count"><span>10</span></div>
                                                    </div>
                                                    <div className="cart_content">
                                                        <div className="cart_text"><a href="#">Cart</a></div>
                                                        <div className="cart_price">$85</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Navigation */}
                        <nav className="main_nav">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="main_nav_content d-flex flex-row">
                                            {/* Categories Menu */}
                                            <div className="cat_menu_container">
                                                <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cat_burger"><span /><span /><span /></div>
                                                    <div className="cat_menu_text">categories</div>
                                                </div>
                                                <ul className="cat_menu">
                                                    <li><a href="#">Computers &amp; Laptops <i className="fas fa-chevron-right ml-auto" /></a></li>
                                                    <li><a href="#">Cameras &amp; Photos<i className="fas fa-chevron-right" /></a></li>
                                                    <li className="hassubs">
                                                        <a href="#">Hardware<i className="fas fa-chevron-right" /></a>
                                                        <ul>
                                                            <li className="hassubs">
                                                                <a href="#">Menu Item<i className="fas fa-chevron-right" /></a>
                                                                <ul>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Smartphones &amp; Tablets<i className="fas fa-chevron-right" /></a></li>
                                                    <li><a href="#">TV &amp; Audio<i className="fas fa-chevron-right" /></a></li>
                                                    <li><a href="#">Gadgets<i className="fas fa-chevron-right" /></a></li>
                                                    <li><a href="#">Car Electronics<i className="fas fa-chevron-right" /></a></li>
                                                    <li><a href="#">Video Games &amp; Consoles<i className="fas fa-chevron-right" /></a></li>
                                                    <li><a href="#">Accessories<i className="fas fa-chevron-right" /></a></li>
                                                </ul>
                                            </div>
                                            {/* Main Nav Menu */}
                                            <div className="main_nav_menu ml-auto">
                                                <ul className="standard_dropdown main_nav_dropdown">
                                                    <li><a href="#">Home<i className="fas fa-chevron-down" /></a></li>
                                                    <li className="hassubs">
                                                        <a href="#">Super Deals<i className="fas fa-chevron-down" /></a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                                                                <ul>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="hassubs">
                                                        <a href="#">Featured Brands<i className="fas fa-chevron-down" /></a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                                                                <ul>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                    <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="hassubs">
                                                        <a href="#">Pages<i className="fas fa-chevron-down" /></a>
                                                        <ul>
                                                            <li><a href="shop.html">Shop<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="product.html">Product<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="cart.html">Cart<i className="fas fa-chevron-down" /></a></li>
                                                            <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                                                    <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                                                </ul>
                                            </div>
                                            {/* Menu Trigger */}
                                            <div className="menu_trigger_container ml-auto">
                                                <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                                    <div className="menu_burger">
                                                        <div className="menu_trigger_text">menu</div>
                                                        <div className="cat_burger menu_burger_inner"><span /><span /><span /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        {/* Menu */}
                        <div className="page_menu">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="page_menu_content">
                                            <div className="page_menu_search">
                                                <form action="#">
                                                    <input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..." />
                                                </form>
                                            </div>
                                            <ul className="page_menu_nav">
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Language<i className="fa fa-angle-down" /></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">English<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Italian<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Spanish<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Japanese<i className="fa fa-angle-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Currency<i className="fa fa-angle-down" /></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">US Dollar<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">EUR Euro<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">GBP British Pound<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">JPY Japanese Yen<i className="fa fa-angle-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="page_menu_item">
                                                    <a href="#">Home<i className="fa fa-angle-down" /></a>
                                                </li>
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Super Deals<i className="fa fa-angle-down" /></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">Super Deals<i className="fa fa-angle-down" /></a></li>
                                                        <li className="page_menu_item has-children">
                                                            <a href="#">Menu Item<i className="fa fa-angle-down" /></a>
                                                            <ul className="page_menu_selection">
                                                                <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                                <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                                <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                                <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Featured Brands<i className="fa fa-angle-down" /></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">Featured Brands<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Trending Styles<i className="fa fa-angle-down" /></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">Trending Styles<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down" /></a></li>
                                                <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down" /></a></li>
                                            </ul>
                                            <div className="menu_contact">
                                                <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570</div>
                                                <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* ORDER VIEW */}
                <div className="col-lg-12 text-lg-center">
                    <h2>Order</h2>
                    <br />
                    <br />
                </div>
                <div className="col-lg-10 push-lg-4 personal-info">
                <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
                                            <div className="col-lg-7" >
                                                {/* <input className="form-control " value={this.state.email} required /> */}
                                                <h2 className="form-control ">{this.state.email}</h2>
                                            </div>
                                        </div>
                                        <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label"> Car</label>
                                            <div className="col-lg-7" >
                                                <h2 className="form-control ">{this.state.car_name}</h2>
                                            </div>
                                        </div>
                                        <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label"> Image</label>
                                            <div className="col-lg-7" >
                                            <img src={url} class="img-fluid" alt="Responsive image"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">DateStart</label>
                                            <div className="col-lg-7">
                                                <input className="form-control" value={this.state.dateStart} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                                            <div className="col-lg-7">
                                            <h2 className="form-control ">{this.state.soNgay}</h2>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-2 "><h4>Total:</h4></label>
                                            <div className="col-lg-7">
                                                <h4>{(this.state.price*this.state.soNgay).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                                            </div>
                                        </div>
                                        
                    <div className="form-group row">
                        <label className="col-lg-5 col-form-label form-control-label" />
                        {this.state.errMessage ? (
                            <div className="col-lg-5">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.errMessage}
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-5 col-form-label form-control-label" />
                        {this.state.detailModalVisible? (
                            <div className="col-lg-5">
                                <button style={{ fontSize: '16px' }} type="submit" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleModalChange() }} >Submit</button>
                                <Modal show={this.state.show} onHide={() => { this.handleModalChange() }}>
                                    <Modal.Header closeButton> CONFIRM ORDER </Modal.Header>
                                    <Modal.Body>
                                        <h4>Your Order</h4>
                                        <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">User Email</label>
                                            <div className="col-lg-7" >
                                                <input className="form-control " value={this.state.email} required />
                                            </div>
                                        </div>
                                        <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Name</label>
                                            <div className="col-lg-7" >
                                                <input className="form-control " value={this.state.currentItem.name} required />
                                            </div>
                                        </div>
                                        <div className="form-group row" >
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Type</label>
                                            <div className="col-lg-7" >
                                                <input className="form-control " value={this.state.currentItem.type} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Price</label>
                                            <div className="col-lg-7">
                                                <input className="form-control" value={this.state.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " / Tuần"} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label style={{ marginLeft: '10%' }} className="col-lg-2 col-form-label form-control-label">Số Ngày Thuê</label>
                                            <div className="col-lg-7">
                                                <input className="form-control" value={this.state.soNgay} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-2 "><h4>Total:</h4></label>
                                            <div className="col-lg-7">
                                                <h4>{(this.state.price*this.state.soNgay).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                                            </div>
                                        </div>
                                        <h3>Do you want to order this car ?</h3>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => { this.handleModalChange() }}>
                                            Close
                                        </Button>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <button type="submit" className="btn btn-primary" onClick={() => { this.handleModalChange() }}>Submit</button>
                                        </form>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}



export default FinishPurchase;