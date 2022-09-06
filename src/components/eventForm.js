import React, { useState, useReducer }from 'react'
import './eventForm.css'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

export default function EventForm() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
      event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000)
  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div className="formHandle">
    <h1>Book ticket</h1>
    <p>{submitting &&
       <div>Submtting Form...
        You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
     }</p>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="fullName" onChange={ handleChange } value={formData.name || ''}/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

