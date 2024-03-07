import React, { useContext, useEffect } from 'react';
import { LoginContext } from "../../state/LoginContext";
import { useNavigate } from 'react-router-dom';

export default function Logout() {
 
    const { dispatch } = useContext(LoginContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch({ type: 'LOGOUT' }); 
      navigate('/');  
    }, [dispatch, navigate]); 

  return (
    <div>Logout</div>
  )
};
