import PropTypes from "prop-types";
const InputField = ({ name, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
// Define prop types for the component
InputField.propTypes = {
  name: PropTypes.string.isRequired, // Name of the input field
  value: PropTypes.string.isRequired, // Value of the input field
  onChange: PropTypes.func.isRequired, // Change handler function
  placeholder: PropTypes.string, // Placeholder text (optional)
};

// Default props for optional props
InputField.defaultProps = {
  placeholder: "",
};
export default InputField;