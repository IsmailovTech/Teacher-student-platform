import React from 'react'
import './login.css';

const Login = () => {
    return (
        <main className="mainLogin">
            <div className="loginContainer">
                <div className="loginContent">
                    <div className="loginTitle">
                        <img src="./images/login-avatar.PNG" alt="avatar" />
                            <h1>Login</h1> 
                    </div>
                     <form className='LoginForm'>
                        <label htmlFor="userName">Username:</label>
                        <input
                             type="text"
                             id="userName"
                            placeholder='Enter your Username'
                            className='textInp'
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                             type="password"
                             id="password"
                            placeholder='Enter Password'
                            className='textInp'
                        />
                        <input 
                            type="submit"
                            value='Login'
                            className='btnInp'
                        />
                        <p>Don't have an Account</p>
                    </form> 
                </div>
            </div>
        </main>
  )
}

export default Login