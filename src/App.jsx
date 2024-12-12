import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./assets/pages/page1";
import Page2 from "./assets/pages/page2";
import Page3 from "./assets/pages/page3";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studyAbroad: "",
    iletsStatus: "",
    preferedProgram: "",
    City: "",
    passStatus: "",
    needGuidance: "",
    highEdu: "",
  });

  return (
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Page1 formData={formData} setFormData={setFormData} />}
            />
            <Route
              path="/page2"
              element={<Page2 formData={formData} setFormData={setFormData} />}
            />
            <Route
              path="/page3"
              element={<Page3 formData={formData} setFormData={setFormData} />}
            />
          </Routes>
        </Router>

  );
}

export default App;
