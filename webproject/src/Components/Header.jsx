import React, { Component } from 'react'
import logo from '../car-it.svg';
export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            car: '',
        }
    };

    handleHome = (event) => {
        event.preventDefault();
        window.location.href = "/";
    }
    handleLogin = (event) => {
        event.preventDefault();
        window.location.href = "/login";
    }
    handleRegister = (event) => {
        event.preventDefault();
        window.location.href = "/register";
    }

    handleLogout = async () => {
        const data = await fetch("http://localhost:5000/user/logout")
            .then((res) => { return res.json(); });
        if (data.success) {
            window.localStorage.clear();
            window.location.href = "/login";
        }
    }

    handleCarChange = (event) => {
        this.setState({
          car: event.target.value
        });
      }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        //   const data = await fetch("http://localhost:5000/products/getItemsByName", {
        //     method: "POST",
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     credentials: 'include',
        //     body: JSON.stringify({
        //       car: this.state.car,
        //     }),
        //   }).then((res) => { return res.json(); });
        //   console.log('data frontend login', data);
        //   this.setState({
        //     car: '',
        //     data: [],
        //   })
        //   if (!data.success) {
        //     this.setState({
        //       errMessage: data.message,
        //     });
        //   } else {
        //     this.setState({
        //       data: data.data,
        //     })
    
        //   }
        window.location.href='/searchByName/'+this.state.car;
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

    render() {
        let value = localStorage.getItem('email');
        return (
            <div>
                <header className="header">
                    {/* Top Bar */}
                    <div className="top_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex flex-row">
                                    <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div>+38 068 005 3570</div>
                                    <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href="mailto:tanhng@gmail.com">Team8Hedspi@gmail.com</a></div>
                                    <div className="top_bar_content ml-auto">
                                        <div className="top_bar_menu">
                                            <ul className="standard_dropdown top_bar_dropdown">
                                                {localStorage.getItem('role') == 1 ? (
                                                    <div>
                                                        <li>
                                                            <a href="#">Admin<i className="fas fa-chevron-down" /></a>
                                                            <ul>
                                                                <li><a href="/editcar">Edit Car</a></li>
                                                                <li><a href="/purchase">Purchase</a></li>
                                                                <li><a href="/addItem">Add Car</a></li>
                                                            </ul>
                                                        </li></div>

                                                ) : null
                                                }

                                            </ul>
                                        </div>
                                        {value ? (
                                            <div className="top_bar_user">
                                                <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                                <div><a>{value}</a></div>
                                                <div> <a><button type="button" className="btn" style={{ fontSize: '14px' }} onClick={this.handleLogout}>Logout</button></a></div>
                                            </div>
                                        ) :
                                            <div className="top_bar_user">
                                                <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                                <div><a href="/register">Register</a></div>
                                                <div><a href="/login" >Sign in</a></div>
                                            </div>
                                        }

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
                                        <div className="logo"><a href="">HEDSPI AUTO</a></div>
                                    </div>
                                </div>
                                {/* Search */}
                                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                    <div className="header_search">
                                        <div className="header_search_content">
                                            <div className="header_search_form_container">
                                                <form onSubmit={this.handleFormSubmit} className="header_search_form clearfix">
                                                   
                                                    <input type="text" required="required" className="header_search_input" value={this.state.car} onChange={this.handleCarChange} placeholder="Search for products..." />
                                                 
                                                    <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Wishlist */}
                                <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                    <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                        {/* Cart */}
                                        <div className="cart">
                                            <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                                <div className="cart_icon">
                                                    <img src="images/cart.png" alt="" />
                                                    <div className="cart_count"><span></span></div>
                                                </div>
                                                <div className="cart_content">
                                                    <div className="cart_text"><a href="#">Cart</a></div>
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
                                                    <a href="#"> Type<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li><a href="/searchByType/Sedan">Sedan<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="/searchByType/Truck">Truck<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="/searchByType/Bus">Bus<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="/searchByType/Suv">SUV<i className="fas fa-chevron-down" /></a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs">
                                                    <a href="#">Odometer<i className="fas fa-chevron-down" /></a>
                                                    <ul>
                                                        <li><a href="/searchByOdometer/1">Less than 5000<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="/searchByOdometer/2">From 5000 to 10000<i className="fas fa-chevron-down" /></a></li>
                                                        <li><a href="/searchByOdometer/3">More than 10000<i className="fas fa-chevron-down" /></a></li>
                                                    </ul>
                                                </li>
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
                {/* Home */}

            </div>
        )
    }
}