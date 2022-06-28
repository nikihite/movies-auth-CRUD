import { client } from './client';

export async function createMovie(movie) {
  const { data } = await client
    .from('movies_table')
    .insert(movie)
    .single();

  return data;
}

export async function getMovies() {
  const { data } = await client
    .from('movies_table')
    .select('*');

  return data;
}

export async function updateMovie(movie, id) {
  const { data } = await client
    .from('movies_table')
    .update(movie)
    .match({ id: id })
    .single();

  return data;
}

export async function deleteMovie(id) {
  const { data } = await client
    .from('movies_table')
    .delete()
    .match({ id: id })
    .single();

  return data;
}

export async function getMovieById(id) {
  const { data } = await client
    .from('movies_table')
    .select('*')
    .match({ id })
    .single();

  return data; 
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }

}

export async function signInUser(email, password){
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();

  if (error) {
    console.error(error);
    throw error;
  }
}