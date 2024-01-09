import React from 'react'
import ChatCard from './chatCard'
import { useUserContext } from '@/context/context';

export default function ChatsList() {
  const { user } = useUserContext()
  console.log(user)



  return (
    <div className='overflow-y-auto' style={{ maxHeight: '50vh', maxWidth: '100vw' }}>
      <div style={{ whiteSpace: 'normal' }}>
        {user.savedContacts.map(({ name, email, timestamp }: any, index: React.Key | null | undefined) => (
          <ChatCard key={index} name={name} avatar={'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)'} timestamp={'10:00 AM'} email={email} />
        ))}
      </div>
    </div>
  );

}
