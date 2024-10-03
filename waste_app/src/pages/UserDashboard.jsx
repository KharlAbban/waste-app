import React, { useEffect } from 'react'
import {useState} from 'react'
import { useAuthContext } from '../contexts/GlobalProvider'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const UserDashboard = () => {
  const user = useAuthContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user.id) {
      return navigateTo("/");
    }
  }, [user]);

  const [complain, setComplain] = useState(null);
  

  const sendRequest = async (e) => {
    try{
      const data = await axios.post("http://localhost:3000/requests", user);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  };

  const sendComplain = async(e) => {
    try{
      const data = await axios.post("http://localhost:3000/complaints")
    }catch(err){

    }
  }

  return (
    <div>
      UserDashboard

      <div className="flex gap-10">
        <button className='px-4 py-1 bg-blue-400 rounded hover:bg-blue-600 duration-200' onClick={sendRequest}>Request Pickup</button>
        <button className='px-4 py-1 bg-blue-400 rounded hover:bg-blue-600 duration-200' onClick={sendComplain}>Report Complaint</button>
      </div>

      <div>
        <h1 className='modal'>Send Complain</h1>
        <input type="text" className='border-black'/>
        <button className='px-5 hover:bg-green-500 font-bold '>Send</button>
      </div>
    </div>
  )
}

export default UserDashboard