import { client, checkError } from './client';

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  
  return window.location.href = '/';
}