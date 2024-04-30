// PrivateRoute.js
import {useEffect,useState} from 'react';

import MainPage from '../MainPage';
// import "./Adminhome"

function Protected(Props) {
  const {Component} = Props
  const [isAdmin, setisAdmin] = useState(false);


  useEffect(() => {
    const admin = localStorage.getItem('userType');
    console.log(admin);
    if (admin === 'Admin') {
      setisAdmin(true)
    } 
  },[]);
  return (
    <div>
    {isAdmin ?(
      <Component/>):(
      <MainPage/>)}
    </div>
  );
};

export default Protected;
