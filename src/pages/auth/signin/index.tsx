import React from 'react'

const Signin = () => {
    
    return (
    <>
    {/* <img src='/assets/loginPage.png' className="img-fluid" alt="..."/> */}
    <div className='loginDiv container-fluid p-5'>
        <div className="conatiner fluid bg-light border rounded-5 shadow-lg p-3 mb-5 bg-body-dark"  style={{width:'40vw', height:'80vh', position:'absolute',top:'10vh',right:'15vh'}}>
                <div className=" mt-4 row justify-content-center mx-auto fw-bolder "style={{fontSize:'54px'}} > Sign in</div>
            
            <div className='m-2 p-5'>
            <form>
                    <div className="mb-3">
                        <label  className="form-label fs-3 fw-semibold">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text fs-5">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label fs-3 fw-semibold">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <div className='row justify-content-center m-5 '>
                    <button type="submit" className="btn btn-primary fs-5 ">Submit</button>
                    </div>
            </form>
            <div className=''>
            <hr className='mt-4'/>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Signin
