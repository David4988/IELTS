import PropTypes from "prop-types"; // Import PropTypes
import { Link } from 'react-router-dom';
import InputField from "../components/InputField";
import ButtonGroup from "../components/ButtonGroup";

function Page2({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
    
  };
  

  return (
    <section className="flex h-screen">
    {/* Left side with image */}
    <div className="hidden lg:block w-1/2">
      <img
        src="../IELTS2.png"
        alt="IELTS"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right side with form */}
    <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-r from-orange-300 to-yellow-200">
            <div className = " sm:mx-8 lg:mx-0 sm:rounded-3xl sm:p-10 sm:ring-1 sm:ring-gray-900/10 lg:ring-0 lg:rounded-none lg:p-0">
              <h1 className="text-center font-black text-4xl pb-12">Eligibility Check</h1>
  <p className="m-2 font-semibold">What is your current City?</p>
  <InputField
    name="City"
    value={formData.City}
    onChange={handleChange}
    placeholder="Enter your City"
  />
  <p className="m-2 font-semibold">Do you have a Passport?</p>
  <ButtonGroup
          field="passStatus"
          options={["Yes","No"]}
          handleClick={handleClick}
  />
  <p className="m-2 font-semibold">How can we help you?</p>
  <ButtonGroup
          field="needGuidance"
          options={["I want to Check my Admit Eligibility", "I want End to End Guidance", "I want University Shortlist","I am not sure"]}
          handleClick={handleClick}
  />
  <p className="m-2 font-semibold">What is your highest level of education?</p>
  <ButtonGroup
          field="highEdu"
          options={["10th Grade", "12th Grade", "Bachelor's Degree", "Master's Degree, MBBS/MD"]}
          handleClick={handleClick}
  />
  
  <Link to="/">
    <button className="rounded-md bg-green-500 px-2.5 py-1.5 m-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-800 hover:text-white">
      Prev
    </button>
  </Link>
  <Link to="/page3">
    <button className="rounded-md bg-blue-600 px-2.5 py-1.5 m-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800">
      Next
    </button>
  </Link>
</div>
</div>
</section>

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
      needGuidance: PropTypes.string.isRequired,
      highEdu: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
  };

export default Page2;
