import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './assets/pages/page1';
import Page2 from './assets/pages/page2';
import Page3 from './assets/pages/page3';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyAbroad: '',
    iletsStatus: '',
    preferedProgram: '',
    City: '',
    passStatus: '',
    needGuidence: '',
    highEdu: '',
  });

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
       <div style={{
             clipPath:
               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
           }}
           className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"/></div>
           <Router>
      <Routes>
        <Route path="/" element={<Page1 formData={formData} setFormData={setFormData} />} />
        <Route path="/page2" element={<Page2 formData={formData} setFormData={setFormData} />} />
        <Route path="/page3" element={<Page3 formData={formData} setFormData={setFormData} />} />
      </Routes>
    </Router>
        </div>
    
  );
}

export default App;
