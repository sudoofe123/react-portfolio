
import { useState } from 'react'
import  styles from './navbar.scss';
function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="Apps">
      <header className="App-header">
        <nav className="navbar">
          {/* logo */}
          <a href='#home' className="logo">SUD</a>
          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className="navLink">Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#about' className="navLink">About</a>
            </li>
            <li onClick={removeActive}>
              <a href='#project' className="navLink">Projects</a>
            </li>
            <li onClick={removeActive}>
              <a href='#contact' className="navLink">Contact</a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>

            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;