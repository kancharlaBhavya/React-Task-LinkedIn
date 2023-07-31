import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  localStorage.setItem("user:" ,username);
  localStorage.setItem("password:" ,password);
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === 'bhavya' && password === '123456') {
      navigate('/home');
    }
    else{
      alert("Invalid user");
    }
  };
 

  return (
    <div className="login-page">
      <div className="login-box">
        <div className='LinkedIn-logo'>
      <img src="/LinkedIn2.png" ></img></div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login-button'>
        <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React from 'react';
// import { useState } from 'react';
// import './LoginPage.css';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'bhavya' && password === '123456') {
//             navigate('/dashboard');
//           }
//           else{
//             alert("Invalid");
//           }
//         };
    
  

//   return (
//     <div className="box">
//       <form className="form" onSubmit={handleSubmit}>
//         <h2>Sign in</h2>
//         <div className="inputBox">
//           <input
//             type="text"
//             required
//             value={username}
//             onChange={handleUsernameChange}
//           />
//           <span>Username</span>
//           <i></i>
//         </div>
//         <div className="inputBox">
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <span>Password</span>
//           <i></i>
//         </div>
        
//         <input type="submit" value="Login" disabled={!username || !password} />
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
