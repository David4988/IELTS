import PropTypes from "prop-types"; // Import PropTypes
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
function Page3({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log('Form Submitted', formData);
    // Send formData to backend or API here
    try {
        const response = await fetch('http://localhost:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to submit the form');
        }
  
        const result = await response.json();
        console.log('Response from server:', result);
        alert('Form Submitted Successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit the form. Please try again.');
      }
  };

  return (
    <div>
      <h2>Page 3</h2>
      <InputField
        name="City"
        value={formData.City}
        onChange={handleChange}
        placeholder="Enter your city"
      />
      <InputField
        name="passStatus"
        value={formData.passStatus}
        onChange={handleChange}
        placeholder="Enter pass status"
      />
      <InputField
        name="needGuidence"
        value={formData.needGuidence}
        onChange={handleChange}
        placeholder="Do you need guidance?"
      />
      <InputField
        name="highEdu"
        value={formData.highEdu}
        onChange={handleChange}
        placeholder="Enter your high education"
      />
      <Link to="/page2">
             <button className = "rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</button>
      </Link>
      <button className = "rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handleSubmit}>Submit</button>
    </div>
  );
}

Page3.propTypes = {
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

export default Page3;
