import React, { Component } from 'react'

export default class temp3 extends Component {

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
    console.log("test2", window.location.href.slice(31));
    let url = window.location.href.slice(31);
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
      let url = `http://localhost:5000${this.state.currentItem.imageUrl}`;
        return (

              

              
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
                                      <form action="#" className="header_search_form clearfix">
                                        <input type="search" required="required" className="header_search_input" placeholder="Search for products..." />
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
                                      <li><a href="index.html">Home<i className="fas fa-chevron-down" /></a></li>
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
                      {/* Single Product */}
                      <div className="single_product">
                        <div className="container">
                          <div className="row">
                            {/* Images */}
                            <div className="col-lg-2 order-lg-1 order-2">
                              <ul className="image_list">
                                <li data-image="images/single_4.jpg"><img src="images/single_4.jpg" alt="" /></li>
                                <li data-image="images/single_2.jpg"><img src="images/single_2.jpg" alt="" /></li>
                                <li data-image="images/single_3.jpg"><img src="images/single_3.jpg" alt="" /></li>
                              </ul>
                            </div>
                            {/* Selected Image */}
                            <div className="col-lg-5 order-lg-2 order-1">
                              <div className="image_selected"><img src={url} alt="" /></div>
                            </div>
                            {/* Description */}
                            <div className="col-lg-5 order-3">
                              <div className="product_description">
                                <div className="product_category">Laptops</div>
                                <div className="product_name">MacBook Air 13</div>
                                <div className="rating_r rating_r_4 product_rating"><i /><i /><i /><i /><i /></div>
                                <div className="product_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus turpis.</p></div>
                                <div className="order_info d-flex flex-row">
                                  <form action="#">
                                    <div className="clearfix" style={{zIndex: 1000}}>
                                      {/* Product Quantity */}
                                      <div className="product_quantity clearfix">
                                        <span>Quantity: </span>
                                        <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                                        <div className="quantity_buttons">
                                          <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                                          <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                                        </div>
                                      </div>
                                      {/* Product Color */}
                                      <ul className="product_color">
                                        <li>
                                          <span>Color: </span>
                                          <div className="color_mark_container"><div id="selected_color" className="color_mark" /></div>
                                          <div className="color_dropdown_button"><i className="fas fa-chevron-down" /></div>
                                          <ul className="color_list">
                                            <li><div className="color_mark" style={{background: '#999999'}} /></li>
                                            <li><div className="color_mark" style={{background: '#b19c83'}} /></li>
                                            <li><div className="color_mark" style={{background: '#000000'}} /></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product_price">$2000</div>
                                    <div className="button_container">
                                      <button type="button" className="button cart_button">Add to Cart</button>
                                      <div className="product_fav"><i className="fas fa-heart" /></div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Recently Viewed */}
                      <div className="viewed">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <div className="viewed_title_container">
                                <h3 className="viewed_title">Recently Viewed</h3>
                                <div className="viewed_nav_container">
                                  <div className="viewed_nav viewed_prev"><i className="fas fa-chevron-left" /></div>
                                  <div className="viewed_nav viewed_next"><i className="fas fa-chevron-right" /></div>
                                </div>
                              </div>
                              <div className="viewed_slider_container">
                                {/* Recently Viewed Slider */}
                                <div className="owl-carousel owl-theme viewed_slider">
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_1.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$225<span>$300</span></div>
                                        <div className="viewed_name"><a href="#">Beoplay H7</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_2.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$379</div>
                                        <div className="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_3.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$225</div>
                                        <div className="viewed_name"><a href="#">Samsung J730F...</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_4.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$379</div>
                                        <div className="viewed_name"><a href="#">Huawei MediaPad...</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_5.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$225<span>$300</span></div>
                                        <div className="viewed_name"><a href="#">Sony PS4 Slim</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/* Recently Viewed Item */}
                                  <div className="owl-item">
                                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                      <div className="viewed_image"><img src="images/view_6.jpg" alt="" /></div>
                                      <div className="viewed_content text-center">
                                        <div className="viewed_price">$375</div>
                                        <div className="viewed_name"><a href="#">Speedlink...</a></div>
                                      </div>
                                      <ul className="item_marks">
                                        <li className="item_mark item_discount">-25%</li>
                                        <li className="item_mark item_new">new</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
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
                      {/* Footer */}
                      <footer className="footer">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3 footer_col">
                              <div className="footer_column footer_contact">
                                <div className="logo_container">
                                  <div className="logo"><a href="#">OneTech</a></div>
                                </div>
                                <div className="footer_title">Got Question? Call Us 24/7</div>
                                <div className="footer_phone">+38 068 005 3570</div>
                                <div className="footer_contact_text">
                                  <p>17 Princess Road, London</p>
                                  <p>Grester London NW18JR, UK</p>
                                </div>
                                <div className="footer_social">
                                  <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                    <li><a href="#"><i className="fab fa-google" /></a></li>
                                    <li><a href="#"><i className="fab fa-vimeo-v" /></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 offset-lg-2">
                              <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                  <li><a href="#">Computers &amp; Laptops</a></li>
                                  <li><a href="#">Cameras &amp; Photos</a></li>
                                  <li><a href="#">Hardware</a></li>
                                  <li><a href="#">Smartphones &amp; Tablets</a></li>
                                  <li><a href="#">TV &amp; Audio</a></li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                  <li><a href="#">Car Electronics</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                  <li><a href="#">Video Games &amp; Consoles</a></li>
                                  <li><a href="#">Accessories</a></li>
                                  <li><a href="#">Cameras &amp; Photos</a></li>
                                  <li><a href="#">Hardware</a></li>
                                  <li><a href="#">Computers &amp; Laptops</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="footer_column">
                                <div className="footer_title">Customer Care</div>
                                <ul className="footer_list">
                                  <li><a href="#">My Account</a></li>
                                  <li><a href="#">Order Tracking</a></li>
                                  <li><a href="#">Wish List</a></li>
                                  <li><a href="#">Customer Services</a></li>
                                  <li><a href="#">Returns / Exchange</a></li>
                                  <li><a href="#">FAQs</a></li>
                                  <li><a href="#">Product Support</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                      {/* Copyright */}
                      <div className="copyright">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <div className="copyright_content">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                                <div className="logos ml-sm-auto">
                                  <ul className="logos_list">
                                    <li><a href="#"><img src="images/logos_1.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/logos_2.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/logos_3.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/logos_4.png" alt="" /></a></li>
                                  </ul>
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