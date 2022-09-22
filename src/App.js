import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import EmailList from './pages/EmailList';
import Mail from './pages/Mail';
import SendMail from './pages/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from './features/userSlice';
import Login from './pages/Login';
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        // user is logged
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))

      }else{

      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login/>
      ):(
        
      <div className="App">
        <Header/>
        <div className='app__body'>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<EmailList path="/" />} />
            <Route path="/mail" element={<Mail path="/mail" />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
