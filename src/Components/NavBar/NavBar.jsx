import { useState, useEffect } from "react";
import "./NavBar.css"
import Logo from '../../assets/Logo.svg'


function AboutMeScroll() {
  const AboutMe = document.getElementById("AboutMe");
  AboutMe.scrollIntoView(true);
}
function ProjectsScroll() {
  const AboutMe = document.getElementById("Projects");
  AboutMe.scrollIntoView(true);
}
function AspirationsScroll() {
  const AboutMe = document.getElementById("Aspirations");
  AboutMe.scrollIntoView(true);
}

const NavBar = () => {

    const [count, setCount] = useState(0)

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    // 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  

    return (
        <>
        <div className='NavBar' id='NavBar'>
          <div className="NavBarLogo">
              <img src={Logo}alt="" />
          </div>
        <nav>
            <li>
              <a onClick={AboutMeScroll}>About Me</a>
            </li>
            <li>
            <a onClick={ProjectsScroll}>Projects</a>
            </li>
            <li>
            <a onClick={AspirationsScroll}>Aspirations</a>
            </li>
          </nav>
          <a href="mailto:kingsteven1113@gmail.com"><div className='ContactButton'>Contact Me</div></a>
      </div>
  
      <div className="progressMainWrapper">
          <div
            className="progressMainStyle"
            style={{ height: `${scrollTop}%` }}
          ></div>
        
        </div>

        

        </>
       
    )
}

export default NavBar;