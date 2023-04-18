import React from 'react'

const FarmerLogin = () => {
    return (
        <div className='conatiner'>
            <div className='container mt-3'>
                <p className='fs-3 fw-bold' style={{ color: "#228E38" }}>Farmer Login</p>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column'>
                    <input type="text" className='mb-3 p-3 d-flex flex-shrink-1' placeholder='Email' style={{ borderColor: "#228E38" }} />
                    <input type="text" className='mb-3 p-3 d-flex flex-shrink-1' placeholder='Password' style={{ borderColor: "#228E38" }} />
                    <div className='d-flex flex-row'>
                        <div className='col-4'>
                            <button className='fw-bold' style={{ backgroundColor: "#228E38", color: "white", borderRadius: "5px" }}>Login</button>
                        </div>
                        <div className='col-4'>

                        </div>
                        <div className='col-4'>
                            <button className='fw-bold' style={{ backgroundColor: "#228E38", color: "white", borderRadius: "5px" }}>SiginUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmerLogin
