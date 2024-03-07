import React, { useRef } from 'react';
import './Join.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Join() {
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      await axios.post("/auth/register", user);
      navigate("/login");
    }catch (err) {
      console.log(err);
    }

    };

  return (
    <div className="join_body">
     <div>
        <form className='join_form' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='NAME' className='username' ref={username} required />
        <input type="text" placeholder='EMAIL' className='userId' ref={email} required />
        <input type="password" placeholder='PASSWORD' className='password' ref={password} required />
        <input type='submit' value="新規取得" className='join_btn' />
      </form>
      </div>
    </div>
  )
}
