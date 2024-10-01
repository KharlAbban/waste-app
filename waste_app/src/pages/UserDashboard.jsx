import React, { useEffect } from 'react'
import { useAuthContext } from '../contexts/GlobalProvider'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const user = useAuthContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user.id) {
      return navigateTo("/");
    }
  }, [user]);
  

  return (
    <div>
      UserDashboard

      <div className="flex gap-10">
        <button className='px-4 py-1 bg-blue-400 rounded hover:bg-blue-600 duration-200'>Request Pickup</button>
        <button className='px-4 py-1 bg-blue-400 rounded hover:bg-blue-600 duration-200'>Report Complaint</button>
      </div>
    </div>
  )
}

export default UserDashboard