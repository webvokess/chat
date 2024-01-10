'use client'
import { useUserContext } from '@/context/context'
import React, { useState } from 'react'
import AddContactPopup from './popup';

export default function Profile() {
  const { user, setUser } = useUserContext()
  const [showPopup, setShowPopup] = useState(false);
  console.log(user)

  const setContacts = (contact: any) => {
    let contacts = user.savedContacts;
    setUser({ ...user, savedContacts: [...contacts, contact] })
  }
  return (
    <div>
      {
        showPopup && <AddContactPopup close={() => setShowPopup(false)} setContacts={setContacts} />
      }
      <div className='rounded-circle mx-auto mt-5' style={{
        width: '150px', height: '150px', backgroundImage: 'url(https://images.unsplash.com/photo-1679601744526-027152f956f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      </div>
      <div className='fs-3 mt-2 row justify-content-center fw-semibold'>{user.name}</div>
      <div className='fs-5 mt-2 row justify-content-center'>{user.email}</div>
      <div className='d-flex text-dark justify-content-between'>
        <div className='fs-3'>
          Chats
        </div>

        {/* new chats icon  */}
        <div>
          <button className="text-secondary btn" onClick={() => setShowPopup(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="container-fluid" >
          <form className="d-flex" role="search">
            <input className="form-control fs-5 mt-4 shadow p-3 mb-5 bg-body-tertiary rounded-4" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </div>
  )
}
