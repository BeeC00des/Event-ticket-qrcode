import React from 'react'
import Header from '../header.js';
// import Form from '../eventForm'
import './style.css'


export default function home() {
  return (
    <div className="header-section">
      <Header/>
      <div className="flex justify-center my-16">
        <div className="p-8 flex flex-col lg:w-8/12 justify-center items-center">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-white text-center main-text">
            Listening to good music make your life better
          </h1>
          <p className="text-base font-thin text-white lg:w-7/12 md:w-full py-6 sub-text text-center">
            With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
          </p>
        </div> 
      </div>
      <div className="flex justify-center border-2 border-red-500">
      </div>
    </div>
  )
}
