import React, { Component } from 'react'

export default class temp2 extends Component {


    render() {
      
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
                                    <li><a href="#">Computers &amp; Laptops</a></li>
                                    <li><a href="#">Cameras &amp; Photos</a></li>
                                    <li><a href="#">Hardware</a></li>
                                    <li><a href="#">Smartphones &amp; Tablets</a></li>
                                    <li><a href="#">TV &amp; Audio</a></li>
                                    <li><a href="#">Gadgets</a></li>
                                    <li><a href="#">Car Electronics</a></li>
                                    <li><a href="#">Video Games &amp; Consoles</a></li>
                                    <li><a href="#">Accessories</a></li>
                                  </ul>
                                </div>
                                <div className="sidebar_section filter_by_section">
                                  <div className="sidebar_title">Filter By</div>
                                  <div className="sidebar_subtitle">Price</div>
                                  <div className="filter_price">
                                    <div id="slider-range" className="slider_range" />
                                    <p>Range: </p>
                                    <p><input type="text" id="amount" className="amount" readOnly style={{border: 0, fontWeight: 'bold'}} /></p>
                                  </div>
                                </div>
                                <div className="sidebar_section">
                                  <div className="sidebar_subtitle color_subtitle">Color</div>
                                  <ul className="colors_list">
                                    <li className="color"><a href="#" style={{background: '#b19c83'}} /></li>
                                    <li className="color"><a href="#" style={{background: '#000000'}} /></li>
                                    <li className="color"><a href="#" style={{background: '#999999'}} /></li>
                                    <li className="color"><a href="#" style={{background: '#0e8ce4'}} /></li>
                                    <li className="color"><a href="#" style={{background: '#df3b3b'}} /></li>
                                    <li className="color"><a href="#" style={{background: '#ffffff', border: 'solid 1px #e1e1e1'}} /></li>
                                  </ul>
                                </div>
                                <div className="sidebar_section">
                                  <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                  <ul className="brands_list">
                                    <li className="brand"><a href="#">Apple</a></li>
                                    <li className="brand"><a href="#">Beoplay</a></li>
                                    <li className="brand"><a href="#">Google</a></li>
                                    <li className="brand"><a href="#">Meizu</a></li>
                                    <li className="brand"><a href="#">OnePlus</a></li>
                                    <li className="brand"><a href="#">Samsung</a></li>
                                    <li className="brand"><a href="#">Sony</a></li>
                                    <li className="brand"><a href="#">Xiaomi</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-9">
                              {/* Shop Content */}
                              <div className="shop_content">
                                <div className="shop_bar clearfix">
                                  <div className="shop_product_count"><span>186</span> products found</div>
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
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Philips BT6900A</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item discount">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225<span>$300</span></div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Huawei MediaPad...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Apple iPod shuffle</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Sony MDRZX310W</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>LUNA Smartphone</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_1.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Canon IXUS 175...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379<span>$300</span></div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225<span>$300</span></div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Samsung J330F</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Lenovo IdeaPad</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Digitus EDNET...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Astro M2 Black</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Transcend T.Sonic</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Xiaomi Band 2...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo T8 White</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item discount">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225<span>$300</span></div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Huawei MediaPad...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Nokia 3310 (2017)</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo 7100p Gray</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Canon EF</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_2.jpg" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$225</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Gembird SPK-103</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                  {/* Product Item */}
                                  <div className="product_item is_new">
                                    <div className="product_border" />
                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                    <div className="product_content">
                                      <div className="product_price">$379</div>
                                      <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
                                    </div>
                                    <div className="product_fav"><i className="fas fa-heart" /></div>
                                    <ul className="product_marks">
                                      <li className="product_mark product_discount">-25%</li>
                                      <li className="product_mark product_new">new</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Shop Page Navigation */}
                                <div className="shop_page_nav d-flex flex-row">
                                  <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left" /></div>
                                  <ul className="page_nav d-flex flex-row">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">21</a></li>
                                  </ul>
                                  <div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right" /></div>
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