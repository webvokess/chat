import Error from '@/components/error';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string>()

    const navigator = useRouter()

    const handleSubmit = async (e: any) => {
        console.log('clicked')
        e.preventDefault();

        try {
            await axios.post("/api/auth/signin", {
                email,
                password
            })
            navigator.push("/")
        } catch (error: any) {

            setError(error)
        }
    }
    return (
        <>
            {/* <img src='/assets/loginPage.png' className="img-fluid" alt="..."/> */}
            <div className='loginDiv container-fluid p-5'>
                <div className=" bg-light border rounded-5 shadow-lg p-3 mb-5 bg-body-dark" style={{ width: '40vw', position: 'absolute', top: '10vh', right: '15vh' }}>
                    <div className=" mt-4 row justify-content-center mx-auto fw-bolder " style={{ fontSize: '54px' }} > Sign in</div>
                    <div className='m-2 p-5'>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fs-3 fw-semibold">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div id="emailHelp" className="form-text fs-6">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-3 fw-semibold">Password</label>
                                <input type="password" className="form-control"
                                    id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className='row justify-content-center m-5 '>
                                <button type="submit" className="btn btn-primary fs-5 " onClick={(e) => handleSubmit(e)}>Submit</button>
                            </div>
                        </form>
                        {
                            error && <Error message={error} />
                        }
                        <div className=''>
                            <hr className='mt-4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
