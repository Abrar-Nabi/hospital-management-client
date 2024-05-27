// PrivateRoute.js
import {useEffect,useState} from 'react';

import MainPage from '../MainPage';


function Protected(Props) {
  const {Component} = Props
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    const admin = localStorage.getItem('userType');
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
    }
    if (admin === 'Admin' ) {
      setisAdmin(true)
    } 
  },[]);
  return (
    <div>
    {isAdmin & loggedIn ?(
      <Component/>):(
      <MainPage/>)}
    </div>
  );
};

export default Protected;
