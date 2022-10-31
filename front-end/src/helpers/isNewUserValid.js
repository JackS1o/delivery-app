const MIN_PASSWORD_LENGTH = 6;
const MIN_NAME_LENGTH = 12;

export default ({ name, email, password }) => {
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i;
  const isNameValid = name.length >= MIN_NAME_LENGTH;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= MIN_PASSWORD_LENGTH;
  return isNameValid && isEmailValid && isPasswordValid;
};
