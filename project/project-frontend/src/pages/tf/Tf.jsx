import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './tf.css'
import axios from 'axios'
import { LoginContext } from '../../state/LoginContext'

export default function Tf() {
  
  const navigate = useNavigate();
  const { user } = useContext(LoginContext)

  const handleSave = async (value) => {
    try {
      await axios.put(`/test/${user._id}/tf/${value}`, { userId: user._id }); 
      navigate('/pj');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='tf_body'>
    <div className='question3'>問題3.<br></br> 友達が面接で不合格になりました</div>
    <div className='answer'>
     <div className='t' onClick={() => handleSave('T')}>この前に言ったあの会社ですか？<br/>他の面接はいつですか？</div>
     <div className='f' onClick={() => handleSave('F')}>大丈夫!! 一緒においしいものを食べて頑張りましょう！</div>
    </div> 


 </div>
  )
}
