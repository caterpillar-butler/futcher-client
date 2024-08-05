import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components';

export default function Login() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const navigate = useNavigate();

  const login = async data => {
    try {
      const { name, password } = data;
      if (!name) {
        alert('아이디를 입력해주세요.');
        throw new Error('아이디를 입력해주세요.');
      }
      if (!password) {
        alert('비밀번호를 입력해주세요.');
        throw new Error('비밀번호를 입력해주세요.');
      }
      if (name === 'name' && password === 'password') {
        navigate('/');
      } else {
        alert('잘못된 아이디 또는 비밀번호입니다.');
      }
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return <LoginForm onSubmit={handleSubmit(login)} errors={errors} register={register} />;
}
