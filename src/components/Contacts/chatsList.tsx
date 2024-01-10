"use client"
import React, { useState } from 'react'
import ChatCard from './chatCard'
import { useUserContext } from '@/context/context';
import AddContactPopup from '../contactpopup';

export default function ChatsList() {
  const { user, setUser } = useUserContext()
  const [showContactPopup, setShowContactPopup] = useState(false);

  const setContacts = (contact: any) => {
    let contacts = user.savedContacts;
    setUser({ ...user, savedContacts: [...contacts, contact] })
  }

  return (
    <>
    {
        showContactPopup && <AddContactPopup close={() => setShowContactPopup(false)} setContacts={setContacts} />
    }
    <div className='d-flex text-dark justify-content-between'>
        <div className='fs-3'>
          Chats
        </div>

        {/* new chats icon  */}
        <div>
          <button className="text-secondary btn" onClick={() => setShowContactPopup(true)}>
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
    <div className='overflow-y-auto' style={{ maxHeight: '50vh', maxWidth: '100vw' }}>
      <div style={{ whiteSpace: 'normal' }}>
        {user.savedContacts.map(({ name, email, timestamp }: any, index: React.Key | null | undefined) => (
          <ChatCard key={index} name={name} avatar={'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)'} timestamp={'10:00 AM'} email={email} />
        ))}
      </div>
    </div>
    </>
  );

}
