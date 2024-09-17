import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import AboutSite from "./Components/AboutSite";

function App() {
  return (
    <div className="animation">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              {" "}
              <AboutSite />
            </Home>
          }
        />
        <Route
          path="/resume"
          element={
            <Home>
              <Resume />
            </Home>
          }
        />
        <Route
          path="/about"
          element={
            <Home>
              <About />
            </Home>
          }
        />
        <Route
          path="/projects"
          element={
            <Home>
              <Projects />
            </Home>
          }
        />
        <Route
          path="/stats"
          element={
            <Home>
              <Stats />
            </Home>
          }
        />
        <Route
          path="/contact"
          element={
            <Home>
              <Contact />
            </Home>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
