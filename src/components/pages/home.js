import React from 'react'
import Header from '../header.js';
import Footer from '../footer.js';
// import Form from '../eventForm'
import './style.css'


export default function home() {
  const img1 = require('../../img/img1.jpg');
  const img2 = require('../../img/img2.jpg');
  const img3 = require('../../img/img3.jpg');
  return (
    <div className="header-section">
      <Header/>
      <div className="flex justify-center lg:mt-16 mt-8">
        <div className="p-8 flex flex-col lg:w-8/12 justify-center items-center  md:w-10/12 sm:w-full">
          <h1 className="lg:text-6xl md:text-4xl text-white text-center main-text">
            Listening to good music make your life better
          </h1>
          <p className="text-base font-thin text-white lg:w-7/12 md:w-10/12 sm:w:full pt-6 sub-text text-center">
            With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
          </p>
        </div> 
      </div>
      <div className="flex justify-center my-3">
        <div className=" flex justify-center items-center lg:flex-row flex-col w-11/12">
          <div className="lg:w-3/12 w-full lg:mx-5">
          <img src={img3}  alt="musician" className="rounded-lg"/>
          </div>
          <div className="lg:w-3/12 w-full lg:mx-5 flex-col">
            <div className=" w-full h-auto my-5 text-center">
              <p className="text-base font-light py-5 text-white">Scroll down to see more</p>
              <div className="flex justify-center items-center">
                <div class="mouse"></div>
              </div>
            </div>
            <div className="w-full">
              <img src={img1}  alt="musician"  className="rounded-lg" />
              <div class="music-card">

              </div>
            </div>
          </div>
          <div className="lg:w-3/12 w-full lg:mx-5 lg:my-0 my-5 ">
            <img src={img2}  alt="musician"  className="rounded-lg"/>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
            <div className="border-2 lg:w-2/12 lg:mx-5 w-full">
              1
            </div>
            <div className="border-2 lg:w-2/12 lg:mx-5 w-full">
              2
            </div>
            <div className="border-2 lg:w-2/12 lg:mx-5 w-full">
              3
            </div>
            <div className="border-2 lg:w-2/12 lg:mx-5 w-full">
              4
            </div>
            <div className="border-2 lg:w-2/12 lg:mx-5 w-full">
              5
            </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <h1 className="text-white text-left header-text">Concert music event that you can attend in your location</h1>
            </div>
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <p className="text-base font-thin text-white sub-text text-left my-5">
                With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
              </p>
            </div>
        </div>
      </div>
      <div className="flex justify-center">
            <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  1
                </div>
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  2
                </div>
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  3
                </div>
            </div>
      </div>


      <div className="mx-auto lg:w-4/12">
            <h1 className="text-white text-center header-text">Connect with artist, Choose from the best base</h1>
            <p className="text-base font-thin text-white sub-text text-center my-5">
                With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
            </p>
        </div>
    
      <div className="flex justify-center">
            <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  1
                </div>
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  2
                </div>
                <div className="border-2 lg:w-6/12 lg:mx-5 w-full">
                  3
                </div>
            </div>
      </div>

      <div className="flex justify-center ">
        <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <h1 className="text-white text-left header-text">Visual music concert through our easy to use platform</h1>
            </div>
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <p className="text-base font-thin text-white sub-text text-left my-5">
                With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
              </p>
              <div className="flex">
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1 className="text-white text-lg"> 120K views</h1>
                  <p className="text-white text-xs"> Lorem par move</p>
                </div>
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1  className="text-white text-lg"> 120K view</h1>
                  <p className="text-white text-xs"> Lorem par move</p>
                </div>
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1  className="text-white text-lg"> 120K view</h1>
                  <p  className="text-white text-xs"> Lorem par move</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="border-2 mx-auto w-10/12">
            <div className=" flex justify-center items-center lg:flex-row flex-col w-full my-8">
                <div className="border-2 lg:w-5/12 lg:mx-5 w-full">
                  1
                </div>
                <div className="border-2 lg:w-7/12 lg:mx-5 w-full">
                  2
                </div>
            </div>
            <div className=" flex justify-center items-center lg:flex-row flex-col w-full my-8">
                <div className="border-2 lg:w-7/12 lg:mx-5 w-full">
                  1
                </div>
                <div className="border-2 lg:w-5/12 lg:mx-5 w-full">
                  2
                </div>
            </div>
      </div>
      <div className="subscribe-section mx-auto w-10/12 h-autos rounded-lg my-5">
        <div className="mx-auto lg:w-7/12 py-5">
              <h1 className="text-white text-center header-text">Easily find your favourite Virtual music or concert on our platform</h1>
              <p className="text-base font-thin text-white sub-text text-center my-3">
                  Our platform offers you with best in season music, live concert with great artist.
              </p>

            <div className="formBox flex justify-center items-center my-3">
              <input name="fullName" placeholder='Email Address' className="email-form"/>
              <button type="submit">Submit</button>
            </div>  
          </div>
      </div>
     

    <Footer/>
    </div>
  )
}
