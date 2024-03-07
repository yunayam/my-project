import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './pj.css';
import axios from 'axios'
import { LoginContext } from '../../state/LoginContext'

export default function Pj() {

  const navigate = useNavigate();
  const { user } = useContext(LoginContext)

  const handleSave = async (value) => {
    try {
      await axios.put(`/test/${user._id}/pj/${value}`, { userId: user._id }); 
      navigate('/mbti');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='pj_body'>
    <div className='question4'>問題4.<br></br> 友達が今日急に会おうと言ったら？</div>
    <div className='answer'>
     <div className='p' onClick={() => handleSave('P')}>すごくいいですよ！今出ます~！</div>
     <div className='j' onClick={() => handleSave('J')}>今日ですか？ 急に？ 約束もなしにですか？？</div>
    </div>


 </div>
  )
}
