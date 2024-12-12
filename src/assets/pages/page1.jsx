import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 
import ButtonGroup from "../components/ButtonGroup";

const Page1 = ({ formData, setFormData }) => {
  const handleClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
    
  };

  return (
            <div className = "mx-auto max-w-4xl text-center">
            <p>When do you want to study abroad?</p>
        <ButtonGroup
          field="studyAbroad"
          options={["Jan 2025", "May/Sep 2025", "Year 2026"]}
          handleClick={handleClick}
        />
        <Link to="/page2">
             <button className = "rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</button>
          </Link>
        </div>
   
  );
};
Page1.propTypes = {
    formData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      studyAbroad: PropTypes.string.isRequired,
      iletsStatus: PropTypes.string.isRequired,
      preferedProgram: PropTypes.string.isRequired,
      City: PropTypes.string.isRequired,
      passStatus: PropTypes.string.isRequired,
      needGuidence: PropTypes.string.isRequired,
      highEdu: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
  };

export default Page1;
