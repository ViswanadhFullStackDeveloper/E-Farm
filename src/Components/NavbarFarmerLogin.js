import React from 'react'
import logo from "../images/logo@2x.png";

const NavbarFarmerLogin = () => {
    return (
        <div className='conatiner'>
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
                                <li className="nav-item">
                                    <a className="nav-link btn fw-bold" style={{ backgroundColor: "#228E38",color:"white" }}>Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarFarmerLogin
