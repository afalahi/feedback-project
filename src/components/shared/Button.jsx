import PropTypes from 'prop-types'

const Button = ({ children, type, isDisabled, variant }) => {
  return (
    <button className={`btn btn-${variant}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant:'primary',
  type:'button',
  isDisabled:false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string
}
export default Button;
