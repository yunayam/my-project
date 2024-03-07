import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import { LoginContext } from "../../state/LoginContext";

export default function Home() {
  const { user } = useContext(LoginContext);
  return (
    <div className='body'>
        <div className="logo">MBTI TEST</div>
        <hr></hr>
        <img src="/img/mbti_main.jpg" alt="" className='mbti_main_img'/>
        <Link to="/ei" className="start">TEST スタート</Link>
        <div className="join_login">
        {
          user ? (
            <>
              <Link to="/mbti" className="my_mbti">私のmbti確認</Link>
              <Link to="/logout" className="logout">ログアウト</Link>
            </>
          ) : (
            <>
              <Link to="/join" className="join">新規取得</Link>
              <Link to="/login" className="login">ログイン</Link>
            </>
          )
        }
        </div>
        </div>
    

  )
};
