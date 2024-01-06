import React from 'react'
import ChatCard from './chatCard'

export default function ChatsList() {
 
    const messages = [
      { name: 'Alice', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1679601744526-027152f956f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' },
      { name: 'Bob', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)' },
      { name: 'Louis', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)' },
      { name: 'Jake', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)' },
      { name: 'Robert', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww)' },
      { name: 'Alice', message: 'Hi there!', timestamp: '10:00 AM', avatar: 'url(https://images.unsplash.com/photo-1679601744526-027152f956f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' },
      // Add more messages as needed
    ];
  
    return (
      <div className='overflow-y-auto' style={{maxHeight: '60vh', maxWidth:'100vw' }}>
        <div style={{ whiteSpace: 'normal' }}> 
        {messages.map(({name,message,timestamp,avatar}) => (
          <ChatCard name={name} avatar={avatar} timestamp={timestamp} message={message} />
        ))}
        </div>
      </div>
    );
  
}
