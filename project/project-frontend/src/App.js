import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Ei from './pages/ei/Ei';
import Sn from './pages/sn/Sn';
import Tf from './pages/tf/Tf';
import Pj from './pages/pj/Pj';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { LoginContext } from './state/LoginContext';
import { Navigate } from 'react-router-dom';
import Logout from './pages/logout/Logout';
import Mbti from './pages/mbti/Mbti';



function App() {
  const { user } = useContext(LoginContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ei" element={user ? <Ei /> : <Navigate to="/login" />} />
        <Route path="/sn" element={user ? <Sn /> : <Navigate to="/login" />} />
        <Route path="/tf" element={user ? <Tf /> : <Navigate to="/login" />} />
        <Route path="/pj" element={user ? <Pj /> : <Navigate to="/login" />} />
        <Route path="/mbti" element={user ? <Mbti /> : <Navigate to="/login" />} />
        <Route path="/join" element={<Join />} />
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
