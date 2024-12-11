import PropTypes from "prop-types"; // Import PropTypes
import { Link } from 'react-router-dom';
import InputField from "../components/InputField";

function Page2({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Page 2</h2>
      <InputField
        name="studyAbroad"
        value={formData.studyAbroad}
        onChange={handleChange}
        placeholder="Study Abroad"
      />
      <InputField
        name="iletsStatus"
        value={formData.iletsStatus}
        onChange={handleChange}
        placeholder="Ielts Status"
      />
      <InputField
        name="preferedProgram"
        value={formData.preferedProgram}
        onChange={handleChange}
        placeholder="Preferred Program"
      />
      <Link to="/page3">
        <button>Next</button>
      </Link>
    </div>
  );
}

// Define prop types for the component
Page2.propTypes = {
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

export default Page2;
