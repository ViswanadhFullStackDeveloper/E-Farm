import React from 'react'
import logo from "../images/logo.png";
import card from "../images/Group 27.png"

const OrderSummary = () => {
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
                                <li className="nav-item">
                                    <a className="nav-link">Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                            </ul>
                            <form className="d-flex me-2    ">
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
            <div className='mt-3'>
                <p className='fs-5 fw-bold' style={{ color: "#228E38" }}>Order Summary</p>
            </div>
            <div className='row row-cols-2'>
                <div className='col'>
                    <div className='row row-cols-5 text-center'>
                        <p className='text-black fs-5'>No</p>
                        <p className='text-black fs-5'>Item</p>
                        <p className='text-black fs-5'>Quantity</p>
                        <p className='text-black fs-5'>Price</p>
                        <p className='text-black fs-5'>Total</p>
                    </div>
                    <hr />
                    <div className='row row-cols-5 text-center'>
                        <p className='text-black fs-5'>1</p>
                        <p className='text-black fs-5'>Bitter-Gaurd</p>
                        <p className='text-black fs-5'>1</p>
                        <p className='text-black fs-5'>25.00</p>
                        <p className='text-black fs-5'>25.00</p>
                    </div>
                    <hr />
                    <div className='row row-cols-5 text-center'>
                        <p className='text-black fs-5'></p>
                        <p className='text-black fs-5'></p>
                        <p className='text-black fs-5'></p>
                        <p className='text-black fs-5'></p>
                        <p className='text-black fs-5'>25.00</p>
                    </div>
                    <hr />
                </div>
                <div className='col'>
                    <div className='card border border-dark bg-white'>
                        <div className='card-head text-center'>
                            <p className='fs-3 text-black fw-bold'>Shipping Address</p>
                        </div>
                        <div className='card-body'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Address 1
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Address 2
                                </label>
                            </div>
                            <div className='d-grid' style={{ marginTop: "5rem" }}>
                                <button className='text-white fs-bold border-0 btn fs-5' style={{ backgroundColor: "#228E38" }}>+ Add Address</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-2 mt-3'>
                <div className='col'>
                    <img src={card} alt="Card Image" />
                </div>
                <div className='col'>
                    <div className='card border border-dark bg-white'>
                        <div className='card-head text-center'>
                            <p className='fs-3 text-black fw-bold'>The Total Amount Of</p>
                        </div>
                        <div className='card-body'>
                            <div className='row row-cols-2'>
                                <p className='fs-5 text-black'>Shipping</p>
                                <p className='fs-5 text-black'>&#8377; 30.0</p>
                            </div>
                            <hr/>
                            <div className='row row-cols-2'>
                                <p className='fs-5 text-black '>Total(Including VAT)</p>
                                <p className='fs-5 text-black '>&#8377; 55.0</p>
                            </div>
                            <hr/>
                            <div className='d-grid' style={{ marginTop: "3rem" }}>
                                <button className='text-white border-0 btn fs-5' style={{ backgroundColor: "#228E38" }}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
