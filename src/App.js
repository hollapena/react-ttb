import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayText from './components/DisplayText';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="display" element={<DisplayText />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
