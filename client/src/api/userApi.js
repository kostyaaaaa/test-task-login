import axios from "./config";

export const loginUser = async (userData) => {
  const response = await axios.post("/users/login", userData);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post("/users/signup", userData);
  return response.data;
};
