import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    
  const nav = useNavigate();
  const handlehome = () =>
  {
    nav('/Home')
  }
  return (
    <div>    
    <div>
    <form method='post' >
    <h1>Contact <span>Here</span></h1>
    <input type='text' name='name' id=''  placeholder='Name'/>
    <input type='email' name='email' id='' placeholder='Email'/>
    <input type='phone' name='phone' id=''  placeholder='Phone number'/>
    <textarea name='message' id='' cols='40' rows='20' placeholder='type here...'/>
    <button type='submit' onClick={handlehome}>Done</button>
    </form>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Contact