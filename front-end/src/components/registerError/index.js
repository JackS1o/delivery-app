import PropTypes from 'prop-types';

function RegisterError({ message, type }) {
  const testId = type === 'common'
    ? 'common_register__element-invalid_register'
    : 'admin_manage__element-invalid-register';

  return (
    <span
      data-testid={ testId }
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
