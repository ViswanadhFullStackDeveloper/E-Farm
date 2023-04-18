import React from 'react'

const CustomerRegistration = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='User Name' style={{ borderColor: "#228E38" }} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Email' style={{ borderColor: "#228E38" }} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='First Name' style={{ borderColor: "#228E38" }} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Password' style={{ borderColor: "#228E38" }} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Last Name' style={{ borderColor: "#228E38" }} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Confirm Password' style={{ borderColor: "#228E38" }} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Address' style={{ borderColor: "#228E38" }} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Address1' style={{ borderColor: "#228E38" }} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Phone No.' style={{ borderColor: "#228E38" }} />
                </div>
                <div className='col'>
                    <input type="text" className='form-control mb-3 p-3' placeholder='Pincode' style={{ borderColor: "#228E38" }} />
                </div>
            </div>
            <div className='text-center mt-4'>
                <button className='btn fw-bold' style={{ backgroundColor: "#228E38",color:"white" }}>Submit</button>
            </div>
        </div>
    )
}

export default CustomerRegistration
