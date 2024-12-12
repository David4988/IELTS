import PropTypes from "prop-types";
const Button = ({ name, value, onClick, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}</label>
      <button
        type="button"
        id={name}
        name={name}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
// Define prop types for the component
Button.propTypes = {
  name: PropTypes.string.isRequired, // Name of the input field
  value: PropTypes.string.isRequired, // Value of the input field
  onClick: PropTypes.func.isRequired, // Change handler function
  placeholder: PropTypes.string, // Placeholder text (optional)
};

// Default props for optional props
Button.defaultProps = {
  placeholder: "",
};
export default Button;