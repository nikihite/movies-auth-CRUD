import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/Fetch-utils';

export default function HomePage({ setUser }) {
  const [error, setError] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  
  async function handleSignUp(e) {
    e.preventDefault();
      
    try {
      const user = await signUpUser(signUpEmail, signUpPassword);

      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }
    
  async function handleSignIn(e) {
    e.preventDefault();
        
    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div className='home-page'>
      <h3>Nikis Flicks</h3>
      <h1 className='error'>{error}</h1>
      <form onSubmit={handleSignUp}>
        <p>Sign Up</p>
        <label>
          email
          <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
        </label>
        <label>
          password
          <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <p>Sign In</p>
        <label>
          email
          <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
        </label>
        <label>
          password
          <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}