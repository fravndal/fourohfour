import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-frame container-fluid text-white-50">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <div className="row">
              
              <div className="span-8">
                <ul className="header-ul">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;