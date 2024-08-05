import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components';

export default function Login() {
  const {
    login,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const navigate = useNavigate();
  return <LoginForm login={login} errors={errors} watch={watch} />;
}
