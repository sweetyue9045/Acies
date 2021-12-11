import axios from "axios";

const URL = "http://localhost:5000/api/v1";


export const signInWithEmailPassword = async (email, password) => {
  let user = await axios.post(`${URL}/users/signin`, { email, password });
  return user.data
};

export const registerWithEmailPassword = async (email, password, username) => {
  let user = await axios.post(`${URL}/users/register`, {
    email,
    password,
    username,
  });
  return user.data
};
