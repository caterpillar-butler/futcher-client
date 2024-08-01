import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from 'api';
import { RegisterForm } from 'components';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    console.log('Form Data:', data);
    try {
      const response = await registerUser(data);
      alert(response);
      reset();
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  };

  return <RegisterForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} watch={watch} />;
}