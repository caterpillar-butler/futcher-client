import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL;

async function registerUser(userDto) {
  try {
    // console.log('Request Payload:', userDto);
    const response = await axios.post(`${API_URL}/api/auth/register`, userDto);
    // console.log(response);
    return response.data;
  } catch (error) {
    // console.log(error);
    throw error.response.data;
  }
}

export default registerUser;
