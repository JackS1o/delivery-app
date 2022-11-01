import PropTypes from 'prop-types';

function RegisterError({ message }) {
  return (
    <span
      data-testid="common_register__element-invalid_register"
    >
      <p>{ message }</p>
    </span>
  );
}

RegisterError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default RegisterError;
