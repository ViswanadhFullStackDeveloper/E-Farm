import React from 'react'
import logo from "../images/logo@2x.png";
import carrot from "../images/carrot.png";
import card from "../images/Group 27.png";

const Shopping = () => {
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
            <div className='container'>
                <div className='row row-cols-3'>
                    <div className='text-center col'>
                        <p className='fs-3 fw-bold'>Shopping Cart</p>
                        <img src={carrot} />
                    </div>
                    <div className='col'>
                        <p className='text-center fs-3 fw-bold'>Carrort</p>
                        <p>It all depends on what you understand as a phone number.
                            Phone numbers are country-specific.
                            The local flavors packages for several countries contains their own</p>
                        <div className='row row-cols-2'>
                            <p>Amount</p>
                            <p>Amount</p>
                            <p>Quantity</p>
                            <p>Quantity</p>
                        </div>
                    </div>
                    <div className='col' style={{ marginTop: "3rem" }}>
                        <div className='card'>
                            <div className='card-body'>
                                <p className='text-center fs-3 fw-bold'>The Total Amount of</p>
                                <div className='row row-cols-2 text-center'>
                                    <p className='fs-5 text-black'>Amount</p>
                                    <p className='fs-5 text-black'>&#8377; 25.0</p>
                                    <p className='fs-5 text-black'>Shipping</p>
                                    <p className='fs-5 text-black'>&#8377; 30.0</p>
                                </div>
                                <hr />
                                <div className='row row-cols-2 text-center'>
                                    <p className='fs-5 text-black'>Total(Including Vat)</p>
                                    <p className='fs-5 text-black'>&#8377; 55.0</p>
                                </div>
                                <div className='d-grid text-center'>
                                    <button className='btn text-white' style={{ backgroundColor: "#228E38" }}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <img src={card} alt="Card Image" />
            </div>
        </div>
    )
}

export default Shopping
