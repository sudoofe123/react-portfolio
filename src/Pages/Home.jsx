import React ,{useState}from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from '../components/projects/Projects';
import Experience from '../components/Experience/Experience';
import Footer from '../components/footer/Footer';
import SingleProject from './SingleProject';
import { FaCircleArrowUp } from "react-icons/fa6";
import './Home.scss'
import { BsBorder } from 'react-icons/bs';
const Home = () => {
   const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
   {/* <div className='main'>
    <div className="gradient"></div> */}
    <Hero/>
   {/* </div> */}
    

    <About/>
    
    <Projects></Projects>
   
    {/* <Experience></Experience> */}
    <Footer/>
    <div>
      {isVisible && (
        <button className="scroll-btn" onClick={scrollToTop}>
         <FaCircleArrowUp />
        </button>
      )}
    </div>
    
    </>
  )
}

export default Home