import React from 'react'
// import Header from '../header.js';
import Form from '../eventForm'
import './style.css'


export default function home() {
 
  return (
    <div className="header-section">
      {/* <Header/> */}
      <Form />
      <div className="flex justify-center my-12 ">
        <div className="p-8 grid grid-cols-6 gap-4">
          <h1 className="text-6xl text-white text-center col-start-2 col-span-3">
            Listening to good music make your life better
          </h1>
          <p className="text-base text-white text-center col-start-3 col-span-2 py-5">
            With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
          </p>
        </div> 
      </div>
    </div>
  )
}
