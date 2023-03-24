import { useState,React } from 'react'
import '../styles/login.css'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaLock } from 'react-icons/fa'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



export const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userid, password);
    if(userid === 'admin' && password === 'admin'){
      navigate('/faculty/dashboard');
    }
    
  }

  return (
    <div className="mycontainer">
      <h1 className="myheading">Student Performance Monitoring System</h1>
      <form className='myform' onSubmit={handleSubmit}>
        <div className="formlabel">
          <FaUser className="myicons" /> 
          <input type="text" id="userid" placeholder="userID"  onChange={(e)=>{
            setUserid(e.target.value);
          }}/>
        </div>
        <div className="formlabel">
          <FaLock className="myicons" />
          <input type="password" id="password" placeholder='password' onChange={(e)=>{
            setPassword(e.target.value);
          }} />
        </div>
        <button type="submit" id="loginbtn">Login</button>
      </form>

    </div>
  )
}
