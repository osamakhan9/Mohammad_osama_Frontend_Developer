import React, { useState } from 'react';
import axios from 'axios';
import './Styles/login.css'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
	const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    //   const response = await axios.post('https://reqres.in/api/login', { username, password });
    //   console.log(response.data); 
      
	// Redirect to Spicex
	navigate('/spacex')
	
    } catch (error) {
		console.error(error.response.data); // Login failed
    }
  };

  return (
    
	<>
	 <h1>Login</h1>
	 <br />
<  form id="formData" onSubmit={handleLogin}>
	<label>Email </label>
	<input placeholder="eve.holt@reqres.in" id="emailID" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
	<br/>
	<label>password</label>
	<input placeholder="cityslicka" id="PasswordID" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
	<br />
	<br />

	<button  className='lo'>Login</button>
	
</form>
	</>
  );
};

export default LoginForm;

