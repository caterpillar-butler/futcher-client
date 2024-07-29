import React from 'react';
import { useForm } from 'hooks';
import { registerUser } from 'api';
import { RegisterForm } from 'components';

export default function Register() {
  const [formData, handleChange] = useForm({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    phoneVerificationCode: '',
    verificationCode: '',
    birth: '',
    gender: '',
    isPhoneVerified: true,
    isEmailVerified: true,
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const data = await registerUser(formData);
      // console.log('Response Data:', data);
      alert(data);
    } catch (error) {
      // console.log('Error:', error);
      alert(error);
    }
  };

  return <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
}
