import React from 'react'

interface SenderMessageProps {
  avatar?: string;
  message:string;
  timeStamp:string;
} 

 function Message(props:SenderMessageProps) {
  return (
    <div className={`mb-3 container-fluid d-flex ${props.avatar ? '':'justify-content-end'}`}>
          {/* avatar  */}
          {props.avatar && <div className='rounded-circle row-1 justify-content-center' style={{
            width: '65px', height: '65px', backgroundImage: props.avatar, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
        }

          {/* message */}
          
          <div className={`d-flex flex-column border rounded-5 p-3 ${props.avatar ? 'bg-white-50':'light-green-bg'} mx-2 `} style={{ width: '35vw', minHeight: '10vh', fontSize: '18px' }}>
            <div>
            {props.message}
            </div>
          <div className=' fw-light text-secondary row justify-content-end' style={{fontSize:'18px',marginRight:'10px'}}>{props.timeStamp}</div>
          </div>
          
        </div>
  )
  
  
}

export default Message;