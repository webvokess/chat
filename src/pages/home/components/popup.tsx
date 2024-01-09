import React, { useState } from 'react'
import "../home.css"
import axios from 'axios'
import Error from '@/components/error'

const AddContactPopup = ({ close }: { close: Function }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState<string>()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await axios.post('/api/contact/create', {
                name,
                email
            })
            close()
        } catch (error) {
            setError('Something went wrong')
        }

    }

    return (
        <div className="popup-overlay">
            <div className='popup-container rounded-5 bg-white p-5 text-start' style={{ minWidth: "30vw" }}>
                <div className="text-end">
                    <svg onClick={() => close()} role='button' fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" id="cross" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line cursor-pointer">
                        <path id="primary" d="M19,19,5,5M19,5,5,19" style={{ fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}></path>
                    </svg>
                </div>

                <h2 className='text-center'>Add Contact</h2>
                <div className="mb-3">
                    <label className="form-label fs-3 fw-semibold">Name</label>
                    <input className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label fs-3 fw-semibold">Email address</label>
                    <input type="email" className="form-control"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='row justify-content-center m-5 '>
                    <button type="submit" className="btn btn-primary fs-5 " onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
                {
                    error && <Error message={error} />
                }
            </div>

        </div >
    )
}

export default AddContactPopup
