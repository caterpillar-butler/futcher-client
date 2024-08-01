import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL;

export async function registerUser(userDto) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userDto);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function requestPhoneVerification(phone) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/phone-verification`, { phone });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function verifyPhoneCode(phone, code) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/phone-verification/code`, { phone, code });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function requestEmailVerification(email) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/email-verification`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function verifyEmailCode(email, code) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/email-verification/code`, { email, code });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
