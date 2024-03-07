import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './ei.css'
import axios from 'axios'
import { LoginContext } from '../../state/LoginContext'

export default function Ei() {

  const navigate = useNavigate();
  const { user } = useContext(LoginContext)

  const handleSave = async (value) => {
    try {
      await axios.put(`/test/${user._id}/ei/${value}`, { userId: user._id }); 
      navigate('/sn');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='ei_body'>
       <div className='question1'>問題1.<br></br> 週末二日連続で約束を取ってしまいました。</div>
       <div className='answer'>
        <div className='e' onClick={() => handleSave('E')}>楽しい週末になりそうですね。</div>
        <div className='i' onClick={() => handleSave('I')}>私がなぜそうしたのでしょうか···キャンセルしたいです..</div>
       </div>


    </div>
  )
}
