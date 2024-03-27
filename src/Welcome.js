import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();
  const handleNext=()=>{
    navigate("/SignUp")
  }
  return (
    <div className='Wel'>
    <h1>Please Signin to continue Luxe app</h1>
    
    <button onClick={handleNext}>SignUp</button>
    </div>
  )
}

export default Welcome