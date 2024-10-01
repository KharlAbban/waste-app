import { useEffect } from 'react';
import { useAuthContext } from '../contexts/GlobalProvider'
import {Form, useNavigate} from "react-router-dom"

const LandingPage = () => {
  const user = useAuthContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (user.id) {
      return navigateTo("/user");
    }
  }, [user]);
  
  return (
    <div>
      LandingPage

      <h2 className='underline'>Sign Up Form</h2>
      <Form method='POST'>
        <input type="hidden" value='signUp' name='formType' />

        <label htmlFor="name">Name:</label>
        <input required type="text" className='border border-black' name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input required type="email" className='border border-black' name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input required type="password" className='border border-black' name="password" />
        <br />
        <label htmlFor="address">GhanaPost GPS Address:</label>
        <input required type="text" className='border border-black' name="address" />
        <br />
        <label htmlFor="phone">Phone number:</label>
        <input required type="tel" className='border border-black' name="phone" />
        <br />
        <button className='px-3 py-1 rounded bg-green-500 hover:bg-green-600' type='submit'>Sign up</button>
      </Form>

      <h2 className='underline'>Sign In Form</h2>
      <Form method='POST'>
        <input type="hidden" value='signIn' name='formType' />

        <label htmlFor="phone">Phone number:</label>
        <input required type="tel" className='border border-black' name="phone" />
        <br />
        <label htmlFor="password">Password:</label>
        <input required type="password" className='border border-black' name="password" />
        <br />
        <button className='px-3 py-1 rounded bg-green-500 hover:bg-green-600' type='submit'>Sign in</button>
      </Form>
    </div>
  )
}

export default LandingPage