import { useState } from 'react';
import { RegisterValidation } from 'utils';
import { requestPhoneVerification, verifyPhoneCode, requestEmailVerification, verifyEmailCode } from 'api/auth';

export default function RegisterForm({ formData, handleChange, handleSubmit }) {
  const [errors, setErrors] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    const validationErrors = RegisterValidation(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(e);
    }
  };

  const handlePhoneVerificationRequest = async e => {
    e.preventDefault();
    try {
      const data = await requestPhoneVerification(formData.phone);
      alert('전화번호 인증 요청이 전송되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  const handlePhoneVerificationCode = async e => {
    e.preventDefault();
    try {
      const data = await verifyPhoneCode(formData.phone, formData.phoneVerificationCode);
      alert('인증번호가 확인되었습니다.');
      handleChange({ target: { name: 'isPhoneVerified', value: true } });
    } catch (error) {
      alert(error);
    }
  };

  const handleEmailVerificationRequest = async e => {
    e.preventDefault();
    try {
      const data = await requestEmailVerification(formData.email);
      alert('이메일 인증 요청이 전송되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  const handleEmailVerificationCode = async e => {
    e.preventDefault();
    try {
      const data = await verifyEmailCode(formData.email, formData.verificationCode);
      alert('인증번호가 확인되었습니다.');
      handleChange({ target: { name: 'isEmailVerified', value: true } });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-2">
      <div className="w-full max-w-2xl mx-4 bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">회원가입 JOIN</h2>
        <div className="border-b-2 border-yellow-500 mb-4"></div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">아이디</label>
            <input
              type="text"
              name="name"
              placeholder="실명을 입력해주세요."
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="8자리 이상 / 영어, 숫자가 포함되어야합니다."
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">비밀번호 확인</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder=""
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">전화번호</label>
            <div className="flex mb-2">
              <input
                type="text"
                name="phone"
                placeholder="'-'를 제외하고 입력해주세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-l"
                onChange={handleChange}
                value={formData.phone}
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                onClick={handlePhoneVerificationRequest}>
                인증번호 요청
              </button>
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            <div className="flex mb-4">
              <input
                type="text"
                name="phoneVerificationCode"
                placeholder="인증번호를 입력해주세요."
                className="w-full px-3 py-2 border border-gray-300 rounded-l"
                onChange={handleChange}
                value={formData.phoneVerificationCode}
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                onClick={handlePhoneVerificationCode}>
                인증번호 확인
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">이메일 인증</label>
            <div className="flex mb-2">
              <input
                type="email"
                name="email"
                placeholder="인증번호를 받을 이메일을 입력해주세요."
                className="w-full px-3 py-2 border border-gray-300 rounded-l"
                onChange={handleChange}
                value={formData.email}
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                onClick={handleEmailVerificationRequest}>
                인증번호 요청
              </button>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            <div className="flex mb-4">
              <input
                type="text"
                name="verificationCode"
                placeholder="인증번호를 입력해주세요."
                className="w-full px-3 py-2 border border-gray-300 rounded-l"
                onChange={handleChange}
                value={formData.verificationCode}
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                onClick={handleEmailVerificationCode}>
                인증번호 확인
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">생일 및 성별</label>
            <div className="flex mb-4">
              <input
                type="date"
                name="birth"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-l"
                onChange={handleChange}
                value={formData.birth}
              />
              <div className="flex items-center w-1/2 px-3 py-2 border border-gray-300 rounded-r bg-white">
                <label className="mr-4 flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="true"
                    onChange={handleChange}
                    checked={formData.gender === 'true'}
                    className="mr-1"
                  />
                  남성
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="false"
                    onChange={handleChange}
                    checked={formData.gender === 'false'}
                    className="mr-1"
                  />
                  여성
                </label>
              </div>
            </div>
            {errors.birth && <p className="text-red-500 text-xs mt-1">{errors.birth}</p>}
            {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
          </div>
          <div className="border-b-2 border-yellow-500 mb-4"></div>
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}