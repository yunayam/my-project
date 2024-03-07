import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './sn.css'
import axios from 'axios'
import { LoginContext } from '../../state/LoginContext'

export default function Sn() {

  const navigate = useNavigate();
  const { user } = useContext(LoginContext)

  const handleSave = async (value) => {
    try {
      await axios.put(`/test/${user._id}/sn/${value}`, { userId: user._id }); 
      navigate('/tf');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='sn_body'>
    <div className='question2'>問題2.<br></br> 飛行機に乗るときに思うこと</div>
    <div className='answer'>
     <div className='s' onClick={() => handleSave('S')}>旅行面白そうです！！</div>
     <div className='n' onClick={() => handleSave('N')}>墜落はしないでしょう？ 隣の席に誰が座りましょうか？</div>
    </div>


 </div>
  )
}
