const minimalPasswordLength = 6;
const nameMinLength = 12;
const emailRegex = /^[_.a-z0-9-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const isEmailValid = (email) => emailRegex.test(email);

const isValidName = (name) => name.length >= nameMinLength;

const isValidPassword = (password) => password.length >= minimalPasswordLength;

const registerIsDisabled = ({ name, email, password }) => !(isValidName(name)
&& isEmailValid(email)
&& isValidPassword(password));

const loginIsDisabled = ({ email, password }) => !(isEmailValid(email)
&& isValidPassword(password));

export { registerIsDisabled, loginIsDisabled };

// Verificação de email através do site do Stackoverflow no link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// Resolução do emailValidationRegex.test através do site do w3schools
