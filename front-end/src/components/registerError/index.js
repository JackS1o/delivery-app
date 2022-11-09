import PropTypes from 'prop-types';

function RegisterError({ message, type }) {
  return (
    <span
      data-testid={ `${type}_register__element-invalid_register` }
    >
      <p>{ message }</p>
    </span>
  );
}
RegisterError.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RegisterError;
