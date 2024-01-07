import React from 'react'

const Error = ({ message }: { message: string }) => {
    return (
        <div className='text-danger'>
            {message}
        </div>
    )
}

export default Error