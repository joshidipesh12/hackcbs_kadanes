import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
function App() {
  return (
    <>
            <Router>
                <div className='container'>
                    <Header /> 
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/profilr' element={<UserProfile />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                    </Routes>
                </div>
            </Router>
            <ToastContainer />
        </>
  );
}

export default App;
