import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 
import InputField  from "../components/InputField";
import ButtonGroup from "../components/ButtonGroup";

const Page1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <h2>Page 1</h2>
      <InputField
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <InputField
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <InputField
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
      <div>
        <p>Are you planning to study abroad?</p>
        <ButtonGroup
          field="studyAbroad"
          options={["Yes", "No"]}
          handleClick={handleClick}
        />
      </div>
      <Link to="/page2">
        <button>Next</button>
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
