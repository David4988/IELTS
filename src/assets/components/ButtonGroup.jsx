import { useState } from "react";
import PropTypes from "prop-types";

const ButtonGroup = ({ field, options, handleClick }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Local state to track selected option

  const onButtonClick = (option) => {
    setSelectedOption(option); // Update local state
    handleClick(field, option); // Call parent handler to update formData
    console.log(option)
  };

  return (
    <div>
      {options.map((option) => (
        <button
          className={`rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-gray-50 
            ${selectedOption === option ? "ring-blue-500 border-blue-500" : "ring-gray-300"}`}
          key={option}
          onClick={() => onButtonClick(option)}
        >
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
