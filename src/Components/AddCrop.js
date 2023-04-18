import React from 'react'
import logo from "../images/logo@2x.png";

const AddCrop = () => {
    return (
        <div className='container'>
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
                                    <a className="nav-link active" aria-current="page" href="#">Fee Structure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">FAQs</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome Viswanadh
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action 1</a></li>
                                        <li><a className="dropdown-item" href="#">Action 2</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <div className='d-flex flex-row'>
                                <button className='me-2 p-2 border border-white rounded fs-6 text-white' style={{ backgroundColor: "#228E38" }}>Received Orders</button>
                                <button className='me-2 p-2 border border-white rounded fs-6 text-white' style={{ backgroundColor: "#228E38" }}>All Orders</button>
                                <button className='me-2 p-2 border border-white rounded fs-6 text-white' style={{ backgroundColor: "#228E38" }}>Start Selling</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='card mt-3'>
                <div className='card-body'>
                    <p className='fs-3 fw-bold' style={{ color: "#228E38", marginTop: "3rem" }}>Add Crop</p>
                    <div className='row row-cols-3'>
                        <div className='col'>
                            <input className="form-control" type="text" placeholder='Title' />
                            <div className='mt-3'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <input className="form-control" type="text" placeholder='Selling Price' />
                            <input className="form-control mt-3" type="text" placeholder='Quantity' />
                        </div>
                        <div className='col'>
                            <input className="form-control" type="text" placeholder='Discounted Price' />
                            <div class="mt-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button style={{ backgroundColor: "#228E38" }} className="btn border-0 fs-5 fw-bold text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCrop
