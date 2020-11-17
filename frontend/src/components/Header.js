import React from "react";
import { Link } from "react-router-dom";
import "./../css/header.css"

const Header = () => {
  return (
    <React.Fragment>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mr-5" href=""><img className="logo" src="cslogo.png" height="40px" width="40px"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto" style={{paddingLeft: "18em"}}>
        <li class="nav-item">
                <a class="nav-link text-light" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
        
        <a className="steam_login" style={{textDecoration: "none", color: "white"}} class="nav-link" href="#">Login with <strong>STEAM</strong></a>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </div>
</nav>

    </React.Fragment>
  );
};

export default Header;
