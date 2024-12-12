import PropTypes from "prop-types";

const ButtonGroup = ({ field, options, handleClick }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => handleClick(field, option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  field: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonGroup;
