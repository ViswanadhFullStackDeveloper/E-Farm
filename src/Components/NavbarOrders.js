import React from 'react'
import logo from "../images/logo@2x.png";
import addCrops from "../images/multi-area-solutions-banner.png";

const NavbarOrders = () => {
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
            <div className='mt-3'>
                <img src={addCrops} alt="Add Crops" />
            </div>
            <div className='text-center mt-3'>
                <button className="me-2 p-2 border border-white fs-6 text-white fw-bold" style={{ backgroundColor: "#228E38" }}>Add Crops</button>
            </div>
            <div className='mt-3'>
                <p className='fs-3 fw-bold'>
                Crops are plants, or products made from plants, that are grown and harvested for subsistence or for profit. Crops are typically divided into six categories: food crops, feed crops, fiber crops, oil crops, ornamental crops, and industrial crops.
                </p>
            </div>
        </div>
    )
}

export default NavbarOrders
