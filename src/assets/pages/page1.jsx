import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 
import ButtonGroup from "../components/ButtonGroup";

const Page1 = ({ formData, setFormData }) => {
  const handleClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
    
  };

  return (
    <section className="flex h-screen">
    {/* Left side with image */}
    <div className="hidden lg:block w-1/2">
      <img
        src="../IELTS.png"
        alt="IELTS"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right side with form */}
    <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-r from-orange-300 to-yellow-200">
            <div className = " sm:mx-8 lg:mx-0 sm:rounded-3xl sm:p-10 sm:ring-1 sm:ring-gray-900/10 lg:ring-0 lg:rounded-none lg:p-0">
              <h1 className="text-center font-black text-4xl">Eligibility Check</h1>
            <p className = "font-bold py-3">When do you want to study abroad?</p>
        <ButtonGroup
          field="studyAbroad"
          options={["Jan 2025", "May/Sep 2025", "Year 2026"]}
          handleClick={handleClick}
        />
        <p className = "font-bold py-3">What is your IELTS/PTE/Duolingo Status?</p>
        <ButtonGroup
          field="iletsStatus"
          options={["Not Decided", "Planning to Book", "Booked my Exam", "Already Given"]}
          handleClick={handleClick}
        />
        <p className = "font-bold py-3">What is your preferred program?</p>
        <ButtonGroup
          field="preferedProgram"
          options={["Masters", "PG Diploma", "MBA", "Bachelors","Phd","Not Decided"]}
          handleClick={handleClick}
        />
        <Link to="/page2" className="place-items-end ">
             <button className = "rounded-md bg-blue-400 px-2.5 py-1.5 m-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800">Next</button>
          </Link>
        </div>
        </div>
        </section>
   
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
      needGuidance: PropTypes.string.isRequired,
      highEdu: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
  };

export default Page1;
