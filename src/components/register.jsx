import {Link} from 'react-router';
import styled from 'styled-components';
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";


const Register = () => {
  if (sessionStorage.getItem("username")) {
    window.location.href = '/profile';
  }
 return (
    <StyledWrapper className='flex items-center justify-center min-h-screen bg-black'>
      <div className="form-container mx-auto my-auto p-8 bg-blue-900/10 rounded-lg shadow-lg w-full max-w-md">
        <p className="title text-white">Register</p>
        <form className="form mb-3 gap-4 flex flex-col" 
          onSubmit={async (e) => {
            e.preventDefault();
            const username = e.target.username.value.trim();
            const email = e.target.email.value.trim();
            const password = e.target.password.value.trim();
            try {
              await createUserWithEmailAndPassword(auth, email, password);
              await addDoc(collection(db, "users"), { username: username, email: email });
              sessionStorage.setItem("username", username);
              window.location.href = '/profile';
            } catch (error) {
              alert("Error registering user: " + error.message);
            }
          }}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter GitHub username" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="sign">Register</button>
        </form>
        <p className="signup">Already Registered?
          <Link to="/login" className="ml-1 text-blue-500 hover:text-blue-700">Sign in</Link>
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  .form {
    margin-top: 1.5rem;
  }

  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .input-group label {
    display: block;
    color: rgb(197, 201, 206);
    margin-bottom: 4px;
    font-weight: 500;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgb(23, 25, 29);
    outline: 0;
    background-color: rgb(48, 49, 51);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }

  .input-group input:focus {
    border-color: white;
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175,1);
    margin: 8px 0 14px 0;
  }

  .signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }

  .sign {
    display: block;
    width: 100%;
    background-color: #190559;
    padding: 0.75rem;
    text-align: center;
    color: rgb(207, 212, 222);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
  }
  .sign:hover {
    background-color: #0d0336;
    cursor: pointer;
  }

  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }`;

export default Register;
