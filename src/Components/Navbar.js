import React from 'react'
import logo from "../images/logo.png";
import image from "../images/landing page@2x.png";

const Navbar = () => {
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

            <div id="carouselExampleDark" className="carousel carousel-dark slide mt-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={image} className="d-block w-100" alt="Image 1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={image} className="d-block w-100" alt="Image 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image} className="d-block w-100" alt="Image 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="badge text-wrap rounded-pill fs-1 fw-bold text-dark mt-3 w-100 text-start" style={{ backgroundColor: "#CFFF91", paddingLeft: "1rem" }}>
                Vegitables
            </div>
            <div className='mt-3'>
                <div className='card' style={{ width: "18rem" }}>
                    <img src={image} alt="image text" />
                    <div class="card-body">
                        <h5 class="card-title">Tomatoes</h5>
                        <p class="card-text">&#8377; 40/kg</p>
                        <div className='border border-dark flex-row d-flex justify-content-evenly'>
                            <button className='flex-fill' style={{backgroundColor:"#CFFF91"}}>Add Cart</button>
                            <button className='flex-fill' style={{backgroundColor:"#FF5C5C"}}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge text-wrap rounded-pill fs-1 fw-bold text-dark mt-3 w-100 text-start" style={{ backgroundColor: "#CFFF91", paddingLeft: "1rem" }}>
                Fruits
            </div>
            <div className='mt-3'>
                <div className='card' style={{ width: "18rem" }}>
                    <img src={image} alt="image text" />
                    <div class="card-body">
                        <h5 class="card-title">Pomagrenates</h5>
                        <p class="card-text">&#8377; 100/kg</p>
                        <div className='border border-dark flex-row d-flex justify-content-evenly'>
                            <button className='flex-fill' style={{backgroundColor:"#CFFF91"}}>Add Cart</button>
                            <button className='flex-fill' style={{backgroundColor:"#FF5C5C"}}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar