import React from 'react'
import Hamburger from './components/hamburger'
import Profile from './components/profile'
import ChatsList from './components/Contacts/chatsList'
import Chats from './components/chats'

export default function Home() {
  return (
    <>
     <div className="container-fluid " style={{height:'100%'}}>
      <div className="row vh-100 ">
        <Hamburger/>
        <div className="custom-col-3-5 bg-white container-fluid " style={{overflowX: 'hidden', display:'grid',gridTemplateColumns:'repeat(3,1fr),', gridTemplateRows:'4fr 8fr'}}>
          <div><Profile/></div>
          <div ><ChatsList/></div>
        </div>
        <div className="custom-col-8 light-bg">
          <div><Chats/></div>
        </div>
      </div>
    </div>
    
    </>
  )
}
