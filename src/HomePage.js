import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/Fetch-utils';

export default function HomePage({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }
  
  async function handleSignUp(e) {
    e.preventDefault();
      
    const user = await signUpUser(signUpEmail, signUpPassword);
      
    setCurrentUser(user);
    clearForms();
  }
    
  async function handleSignIn(e) {
    e.preventDefault();
        
    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }
  return (
    <div className='home-page'>
      <form onSubmit={handleSignUp}>
        <label>
            Email
          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={signInPassword} type='password' onChange={e => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );

}