import React from 'react'
import './CSS/Loginsignup.css'

const loginsignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your name' />
                <input type="email" placeholder='email-address'/>
                <input type="password" placeholder='password' />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already have an account ?<span>Login here</span></p>

            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the Terms of use & Privay Policy.</p>
            </div>
        </div>
      
    </div>
  )
}

export default loginsignup
