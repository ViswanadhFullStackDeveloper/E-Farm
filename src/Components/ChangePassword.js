import React, { useEffect } from 'react'
import logo from "../images/logo@2x.png";

const ChangePassword = () => {

    return (
        <div>
            <div className='card'>
                <nav className='navbar navbar-expand-lg bg-body-white'>
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Bootstrap" width="150" height="50" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto order-0 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Become a seller</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome Viswanadh
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                            </ul>
                            <form className="d-flex me-2">
                                <input className="form-control text-center" type="text" placeholder='pincode' />
                            </form>
                            <form class="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container mt-3'>
                <p className='fs-3 fw-bold' style={{ color: "#74E926" }}>Change Password</p>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                    <input className="form-control" id="username" name="username" placeholder="Username" value="" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                    <input className="form-control" id="password" name="password" placeholder="Password" value="" />
                    <span className="input-group-text">
                        <i className="fa fa-eye" id="togglePassword"
                            style={{ cursor: 'pointer' }}></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
