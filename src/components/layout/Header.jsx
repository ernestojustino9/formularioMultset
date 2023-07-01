import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <div className="site-navbar py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <a href="index.html" className="js-logo-clone">
                  Pharma
                </a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav
                className="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop.html">Store</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Dropdown</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Supplements</a>
                      </li>
                      <li className="has-children">
                        <a href="#">Vitamins</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Supplements</a>
                          </li>
                          <li>
                            <a href="#">Vitamins</a>
                          </li>
                          <li>
                            <a href="#">Diet &amp; Nutrition</a>
                          </li>
                          <li>
                            <a href="#">Tea &amp; Coffee</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Diet &amp; Nutrition</a>
                      </li>
                      <li>
                        <a href="#">Tea &amp; Coffee</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <a href="#" className="icons-btn d-inline-block js-search-open">
                <span className="icon-search"></span>
              </a>
              <a href="cart.html" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-bag"></span>
                <span className="number">2</span>
              </a>
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span className="icon-menu"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Header --> */}
    </div>
  );
};

export default Header;
