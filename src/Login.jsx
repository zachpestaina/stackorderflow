import React, { Component, useState } from 'react';
// need to import link

// login needs to return 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  // on change = update username/password
  // on click = verify input format and then set fetch req to backend


         {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
    return (
      <div className="loginPage">

        <h1>Login</h1>
        <div className="loginContainer">
            <p>No Account Yet? <a key="link" href="/#/signup">
            Sign Up Here!
            </a></p>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    )
  }

// function Login() {
//     const [count, setCount] = useState(0)
  
//     return (
//       <div className="App">

//         <h1>Vite + React</h1>
//         <div className="card">
//           <button onClick={() => setCount((count) => count + 1)}>
//             count is {count}
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </div>
//     )
//   }
  
  export default Login