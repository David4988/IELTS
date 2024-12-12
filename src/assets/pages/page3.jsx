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
    <section className="flex h-screen">
    {/* Left side with image */}
    <div className="hidden lg:block w-1/2">
      <img
        src="../IELTS3.png"
        alt="IELTS"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right side with form */}
    <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-r from-orange-300 to-yellow-200">
            <div className = " sm:mx-8 lg:mx-0 sm:rounded-3xl sm:p-10 sm:ring-1 sm:ring-gray-900/10 lg:ring-0 lg:rounded-none lg:p-0">
              <h1 className="text-center font-black text-4xl">Eligibility Check</h1>
      <p className="m-2 font-semibold">Enter your Name</p>
      <InputField
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <p className="m-2 font-semibold">Enter your Phone Number</p>
      <InputField
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter pass status"
      />
      <p className="m-2 font-semibold">Enter your Email</p>
      <InputField
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Do you need guidance?"
      />
      <Link to="/page2">
             <button className = "rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Prev</button>
      </Link>
      <button className = "rounded-md bg-white px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handleSubmit}>Submit</button>
    </div>
    </div>
    </section>
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
      needGuidance: PropTypes.string.isRequired,
      highEdu: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
  };

export default Page3;
