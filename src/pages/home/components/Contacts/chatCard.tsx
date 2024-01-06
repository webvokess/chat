import React from 'react'

interface ChatCardProps {
    avatar: string;
    name: string;
    timestamp: string;
    message: string;
  }

const ChatCard :React.FC<ChatCardProps> = ({ avatar,name,timestamp, message})=> {
  return (
    <>
    <div className='container-fluid p-2' style={{display:'grid',gridTemplateRows:'repeat(3,1fr),', gridTemplateColumns:'1fr 11fr'}}>
    <div className='rounded-circle row-1 justify-content-center' style={{width:'65px', height:'65px', backgroundImage:avatar ,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}></div>
    <div  style={{display:'grid',gridTemplateColumns:'repeat(3,1fr),', gridTemplateRows:'6fr 6fr'}}>
        <div className=' justify-content-between d-flex '>
        <div className='fs-4 fw-semibold mx-2'>{name}</div>
        <div>{timestamp}</div>
        </div>

        <div className='fs-4 mx-2 text-secondary'>
            {message}
        </div>
    </div>
    </div>
    </>
  )
}

export default ChatCard;