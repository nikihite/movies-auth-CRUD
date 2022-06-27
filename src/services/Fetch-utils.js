import { client } from './client';

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

export async function createMovie(movie) {
  const { data } = await client
    .from('movies_table')
    .insert(movie)
    .single();

  return data;
}