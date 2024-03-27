import * as React from 'react';
import Box from '@mui/material/Box';
import './design.css'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
  export default function  FormPropsTextFields() {
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [pass,setpass]=useState();
    // const [p,setp]=useState();
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    // const navigate=useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
  
      try {
        const response = await axios.get('http://localhost:8080/getAll');
        const user = response.data.find((user) => user.name === name);
      console.log("user",user);
        if (user) {
          if (user.pass === pass) {
           alert("login success")
            navigate('/Home'); // Redirect to dashboard on successful login
            setError(false)
          } else {
            setSuccess(false);
            setError(true);
          }
        } else {
          setSuccess(false);
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle other errors if needed
      }
      console.log("hi");
    };
  return (
    <body style={{backgroundColor:'beige'}}>
    <table>
    <tr>
    <td><img src="https://static.independent.co.uk/2024/02/18/21/LFW%20trends.png?width=1200&height=900&fit=crop" height={720}width={780} className='im'/></td>
    <td>
      <div className='login'>
      <Box className='aa'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='icon'>
        <AccountCircleIcon sx={{fontSize:"80px",color:''}} />
        <h3>Sign In</h3>
        </div>
      <div id="a">
      <form onSubmit={handleSubmit}>
        <TextField
        required
        id="outlined-required"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        label="Username or Email Id" 
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          value={pass}
         onChange={(e)=>{setpass(e.target.value)}}
          type="password"
          autoComplete="current-password"
          />
          <br/>
   
          {error&&<p>Invalid UserName or Password</p>}
          {/* <Link to='/ho'> */}
          <Button variant="contained" color='inherit' className='abc' type='submit'>Sign In</Button>
          {/* </Link> */}
          <br></br><br></br>
            <h4>Dont have an Account ? 
            <Link to='/SignUp'>Create New Account</Link>  
            </h4>
    </form>
      </div>
    </Box>
    </div>
    </td>
    </tr>
    </table>
          </body>
  );
}