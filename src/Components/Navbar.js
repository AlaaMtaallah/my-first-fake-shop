import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          
          <NavLink to="/" className="navbar-brand">
      
            <img src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png" width="45" alt="" className="d-inline-block align-middle me-2" />
      
            <span class="text-uppercase fw-bold fs-4">My Shop</span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons ps-5">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart      ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;