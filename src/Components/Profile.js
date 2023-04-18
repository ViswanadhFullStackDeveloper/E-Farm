import React from 'react'
import logo from "../images/logo.png";

const Profile = () => {
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
            <div className='container mt-3'>
                <p className='fs-3 fw-bold' style={{ color: "#228E38" }}>Profile</p>
            </div>
            <div className='container d-flex flex-column w-50 justify-content-center'>
                <input type="text" className='form-control mb-3 p-3' placeholder='Name' style={{borderColor:"#228E38"}}/>
                <input type="text" className='form-control mb-3 p-3' placeholder='Locality' style={{borderColor:"#228E38"}} />
                <select className="form-select mb-3 p-3" aria-label="Default select example" style={{borderColor:"#228E38"}}>
                    <option selected>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select mb-3 p-3" aria-label="Default select example" style={{borderColor:"#228E38"}}>
                    <option selected>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <input type="text" className='form-control mb-3 p-3' placeholder='Pincode' style={{borderColor:"#228E38"}}/>
                <button className='btn text-white fw-bold mt-3 fs-4' style={{backgroundColor:"#228E38"}}>Submit</button>
            </div>
        </div>
    )
}

export default Profile
