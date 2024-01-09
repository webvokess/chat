import React from 'react'

const Error = ({ message }: { message: string }) => {
    return (
        <div className='text-danger text-center'>
            {message}
        </div>
    )
}

export default Error