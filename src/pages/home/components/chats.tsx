import React from 'react'

export default function Chats() {
  return (
    <>
      <div className='rounded-5 mt-2 p-3 d-flex flex-column '>
        <div className='d-flex justify-content-between'>
          <div className='fs-2'>
            Lisa Honer
          </div>
          <button className="p-2 hamburgerItems ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </button>
        </div>
      </div>

      <hr />
      <div className="overflow-y-auto" style={{ maxHeight: "80vh" }}>
        <div className='container-fluid d-flex'>
          <div className='rounded-circle row-1 justify-content-center' style={{
            width: '65px', height: '65px', backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)', backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className='border rounded-5 p-3 bg-white mx-2' style={{ width: '35vw', minHeight: '10vh', fontSize: '18px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quae, placeat iste dolor exercitationem recusandae facilis deserunt veritatis odit saepe? Consequatur vel minima tempora! Blanditiis nam, doloribus omnis temporibus sint maxime ab optio, accusantium voluptates nesciunt animi obcaecati nostrum cupiditate aut saepe nihil corporis. Quas id necessitatibus fugiat dignissimos reprehenderit.
          </div>
        </div>
        <div className='container-fluid d-flex' style={{ justifyContent: "flex-end" }}>
          <div className='border light-green-bg rounded-5 p-3 mx-2 mt-2' style={{ width: '35vw', minHeight: '10vh', fontSize: '18px', alignSelf: "flex-end" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quae, placeat iste dolor exercitationem recusandae facilis deserunt veritatis odit saepe? Consequatur vel minima tempora! Blanditiis nam, doloribus omnis temporibus sint maxime ab optio, accusantium voluptates nesciunt animi obcaecati nostrum cupiditate aut saepe nihil corporis. Quas id necessitatibus fugiat dignissimos reprehenderit.
          </div>
        </div>
        <div className='container-fluid d-flex'>
          <div className='rounded-circle row-1 justify-content-center' style={{
            width: '65px', height: '65px', backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)', backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className='border rounded-5 p-3 bg-white mx-2' style={{ width: '35vw', minHeight: '10vh', fontSize: '18px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quae, placeat iste dolor exercitationem recusandae facilis deserunt veritatis odit saepe? Consequatur vel minima tempora! Blanditiis nam, doloribus omnis temporibus sint maxime ab optio, accusantium voluptates nesciunt animi obcaecati nostrum cupiditate aut saepe nihil corporis. Quas id necessitatibus fugiat dignissimos reprehenderit.
          </div>
        </div>
      </div>


    </>
  )
}
