const MIN_PASSWORD_LENGTH = 6;
const MIN_NAME_LENGTH = 12;

export default ({ name, email, password }) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isNameValid = name.length >= MIN_NAME_LENGTH;
  console.log('nome maior ou igual a 12?', isNameValid);
  const isEmailValid = emailRegex.test(email);
  console.log('email valido?', isEmailValid);
  const isPasswordValid = password.length > MIN_PASSWORD_LENGTH;
  console.log('senha válida?', isPasswordValid);
  return isNameValid && isEmailValid && isPasswordValid;
};
