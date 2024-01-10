import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./components/About/About.js";
import Certifications from "./components/Certifications/Certifications.jsx";
import Experience from "./components/Experience/Experience.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects/Projects.js";
import Resume from "./components/Resume/ResumeNew.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Skills from "./components/Skills/Skills.jsx";
import "./style.css";

// const PrivateRoute = ({ element }) => {
//   return false ? element : <Navigate to="/login" replace />;
// };

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />

          {/* Protected Route */}
          {/* <Route
            path="/dashboard"
            element={<PrivateRoute element={<Resume />} />}
          /> */}

          {/* Default Redirect */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
