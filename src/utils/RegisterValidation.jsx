import validator from 'validator';

export function RegisterValidation(formData) {
  const errors = {};

  if (!formData.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (formData.password.length < 8) {
    errors.password = '비밀번호는 최소 8자리여야 합니다.';
  } else if (!/[A-Za-z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
    errors.password = '비밀번호는 영어와 숫자를 포함해야 합니다.';
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
  }

  if (!formData.phone) {
    errors.phone = '전화번호를 입력해주세요.';
  } else if (!validator.isMobilePhone(formData.phone, 'ko-KR')) {
    errors.phone = '유효한 전화번호를 입력해주세요.';
  } else if (!formData.isPhoneVerified) {
    errors.phone = '전화번호 인증을 완료해주세요.';
  }

  if (!formData.email) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!validator.isEmail(formData.email)) {
    errors.email = '유효한 이메일을 입력해주세요.';
  } else if (!formData.isEmailVerified) {
    errors.email = '이메일 인증을 완료해주세요.';
  }

  if (!formData.birth) errors.birth = '생일을 입력해주세요.';
  if (!formData.gender) errors.gender = '성별을 선택해주세요.';
  return errors;
}
