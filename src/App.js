import "./App.scss";
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/hero/Hero';
// import Projects from "./components/projects/Projects";
// import About from './components/about/About';
// import Experience from './components/Experience/Experience';
// import Footer from './components/footer/Footer';
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProject from "./Pages/SingleProject";
import { projectData } from "./data/Data";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/" Component={projectData} />
          <Route exact path="/SingleProject/:id" element={<SingleProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
