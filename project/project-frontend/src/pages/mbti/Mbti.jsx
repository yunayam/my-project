import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import './mbti.css';
import { LoginContext } from '../../state/LoginContext';
import MbtiText from './MbtiText';


export default function Mbti() {
   
    const { user, dispatch } = useContext(LoginContext);

    useEffect(() => {
        const fetchUser = async () => {
            // 사용자 정보를 다시 조회.
            const res = await axios.get(`/user/${user._id}`);
            dispatch({ type: 'UPDATE_USER', payload: res.data });  // 사용자 정보 업데이트.
        };
    
        if (user && user._id) {
            fetchUser();
        }
    }, [dispatch, user]);

  return (
    <div className='mbti_body'>
       <div className='mbtiResult'>{user?.mbti}</div>
        <div className='middle'>あなたは?</div>
        <div className='mbtiContext'>
        <MbtiText selectedMbtiType={user.mbti} />
        </div>


    </div>
  )
}
