import { useState } from 'react';
import { requestPhoneVerification, verifyPhoneCode, requestEmailVerification, verifyEmailCode } from 'api/auth';

export default function RegisterForm({ register, handleSubmit, watch, errors }) {
  const [emailVerificationRequested, setEmailVerificationRequested] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerificationRequested, setPhoneVerificationRequested] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerificationError, setEmailVerificationError] = useState('');
  const [phoneVerificationError, setPhoneVerificationError] = useState('');

  const email = watch('email');
  const verificationCode = watch('verificationCode');
  const phone = watch('phone');
  const phoneVerificationCode = watch('phoneVerificationCode');

  const handleEmailVerificationRequest = async e => {
    e.preventDefault();
    try {
      await requestEmailVerification(email);
      setEmailVerificationRequested(true);
      setEmailVerificationError(''); // 성공 시 에러 메시지 초기화
    } catch (error) {
      setEmailVerificationError(error.message || '이메일 인증 요청에 실패했습니다.');
    }
  };

  const handleEmailVerificationCode = async e => {
    e.preventDefault();
    try {
      await verifyEmailCode(email, verificationCode);
      setEmailVerified(true);
      setEmailVerificationError(''); // 성공 시 에러 메시지 초기화
    } catch (error) {
      setEmailVerificationError(error.message || '인증 코드 확인에 실패했습니다.');
    }
  };

  const handlePhoneVerificationRequest = async e => {
    e.preventDefault();
    try {
      await requestPhoneVerification(phone);
      setPhoneVerificationRequested(true);
      setPhoneVerificationError(''); // 성공 시 에러 메시지 초기화
    } catch (error) {
      setPhoneVerificationError(error.message || '전화번호 인증 요청에 실패했습니다.');
    }
  };

  const handlePhoneVerificationCode = async e => {
    e.preventDefault();
    try {
      await verifyPhoneCode(phone, phoneVerificationCode);
      setPhoneVerified(true);
      setPhoneVerificationError(''); // 성공 시 에러 메시지 초기화
    } catch (error) {
      setPhoneVerificationError(error.message || '인증 코드 확인에 실패했습니다.');
    }
  };

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback(e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-2">
      <div className="w-full max-w-2xl mx-4 bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">회원가입 JOIN</h2>
        <div className="border-b-2 border-yellow-500 mb-4"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">이메일 인증</label>
            <div className="flex mb-2">
              <input
                type="email"
                name="email"
                placeholder="인증번호를 받을 이메일을 입력해주세요."
                className="w-full px-3 py-2 border border-gray-300 rounded-l"
                {...register('email', { required: '이메일을 입력해주세요.' })}
                onKeyDown={e =>
                  handleKeyPress(e, () => {
                    handleEmailVerificationRequest(e);
                    setEmailVerificationRequested(true);
                  })
                }
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                onClick={handleEmailVerificationRequest}>
                인증번호 요청
              </button>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            {emailVerificationRequested && (
              <p className="text-green-500 text-xs mt-1">이메일 인증 요청이 전송되었습니다.</p>
            )}

            {emailVerificationRequested && (
              <div className="flex mb-2">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="인증번호를 입력해주세요."
                  className="w-full px-3 py-2 border border-gray-300 rounded-l"
                  {...register('verificationCode', { required: '인증번호를 입력해주세요.' })}
                  onKeyDown={e => handleKeyPress(e, handleEmailVerificationCode)}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                  onClick={handleEmailVerificationCode}>
                  인증번호 확인
                </button>
              </div>
            )}
            {emailVerificationError && <p className="text-red-500 text-xs mt-1">{emailVerificationError}</p>}
          </div>
          {emailVerified && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">전화번호</label>
              <div className="flex mb-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="'-'를 제외하고 입력해주세요"
                  className="w-full px-3 py-2 border border-gray-300 rounded-l"
                  {...register('phone', { required: '전화번호를 입력해주세요.' })}
                  onKeyDown={e => handleKeyPress(e, handlePhoneVerificationRequest)}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                  onClick={handlePhoneVerificationRequest}>
                  인증번호 요청
                </button>
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              {phoneVerificationRequested && (
                <div className="flex mb-4">
                  <input
                    type="text"
                    name="phoneVerificationCode"
                    placeholder="인증번호를 입력해주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-l"
                    {...register('phoneVerificationCode', { required: '인증번호를 입력해주세요.' })}
                    onKeyDown={e => handleKeyPress(e, handlePhoneVerificationCode)}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
                    onClick={handlePhoneVerificationCode}>
                    인증번호 확인
                  </button>
                </div>
              )}
              {phoneVerificationError && <p className="text-red-500 text-xs mt-1">{phoneVerificationError}</p>}
            </div>
          )}
          {phoneVerified && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">아이디</label>
                <input
                  type="text"
                  name="name"
                  placeholder="실명을 입력해주세요."
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  {...register('name', { required: '이름을 입력해주세요.' })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">비밀번호</label>
                <input
                  type="password"
                  name="password"
                  placeholder="8자리 이상 / 영어, 숫자가 포함되어야합니다."
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    minLength: { value: 8, message: '비밀번호는 최소 8자리여야 합니다.' },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">비밀번호 확인</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder=""
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  {...register('confirmPassword', { required: '비밀번호 확인을 입력해주세요.' })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">생일 및 성별</label>
                <div className="flex mb-4">
                  <input
                    type="date"
                    name="birth"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-l"
                    {...register('birth', { required: '생일을 입력해주세요.' })}
                  />
                  <div className="flex items-center w-1/2 px-3 py-2 border border-gray-300 rounded-r bg-white">
                    <label className="mr-4 flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="true"
                        {...register('gender', { required: '성별을 선택해주세요.' })}
                        className="mr-1"
                      />
                      남성
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="false"
                        {...register('gender', { required: '성별을 선택해주세요.' })}
                        className="mr-1"
                      />
                      여성
                    </label>
                  </div>
                </div>
                {errors.birth && <p className="text-red-500 text-xs mt-1">{errors.birth.message}</p>}
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
              </div>
              <div className="border-b-2 border-yellow-500 mb-4"></div>
              <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded">
                회원가입
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
