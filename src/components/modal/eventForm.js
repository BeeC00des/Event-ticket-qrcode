import React,{ useState, useReducer } from 'react'
import { RiCloseLine } from "react-icons/ri";
import QrCode from './qrCode';
import './eventForm.css'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }


export default function EventForm() {
    const [ openQr, setOpenQr] = useState(false);

    const [formData, setFormData] = useReducer(formReducer, {});

    const [formBox, setFormBox] = useState(true);

    const [openModal, setOpenModal] = useState(true);

    const closeModal =() =>{
      setOpenModal(!openModal);
    }

    const handleSubmit = event => {
      event.preventDefault();
      setFormBox(false);
      setOpenQr(!openQr);
      
    }
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
      
  }

  return (
    <div className="darkBdg rounded-lg">{openModal &&
      <div className="centered">
        <div className="modal">
            <div className="modalHeader">
              <h5 className="text-xl text-center p-3 text-white">Book Ticket Form</h5>
            </div>
            <button className="closeBtn" onClick={closeModal}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>

            <div>
              {openQr &&
              <QrCode formData={formData}  documentId ="1212" />
              }
            </div>

            <div className="modalContent">
              <div>{formBox &&
                  <form onSubmit={handleSubmit} className="text-center">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First Name" onChange={ handleChange } name="firstName"/>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none w-full bg-gray-200 text-black-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Last Name"  onChange={ handleChange } name="lastName"/>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className=" appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="Email" placeholder="Email Address" onChange={ handleChange } name="gmail"/>
                    </div>
                    <button type="submit" className='submitBtn'>Submit</button>
                  </form>
                }
              </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

