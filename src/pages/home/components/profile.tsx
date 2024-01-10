'use client'
import { useUserContext } from '@/context/context'
import React, { useState } from 'react'
import AddContactPopup from './contactpopup';
import EditProfilePopup from './editprofile';

export default function Profile() {
  const { user, setUser } = useUserContext()
  // const [showContactPopup, setShowContactPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  console.log(user)

  const setUserData = (name: string, email: string) => {
    setUser({ ...user, name, email })
  }
  return (
    <div>
      
      {
        showProfilePopup && <EditProfilePopup close={() => setShowProfilePopup(false)} setUserData={setUserData} />
      }


      <div className='rounded-circle mx-auto mt-3' style={{
        width: '150px', height: '150px', backgroundImage: 'url(https://images.unsplash.com/photo-1679601744526-027152f956f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      </div>



      <div className='fs-3 mt-2  justify-content-center fw-semibold d-flex align-items-center gap-2'>
        {user.name}
        <svg onClick={() => setShowProfilePopup(true)} role='button' height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z" fill="#0D0D0D" />
        </svg>
      </div>
      <div className='fs-5 mt-2 row justify-content-center'>{user.email}</div>
    </div >
  )
}
