import "./LandingPage.css"
import Hello from "../../assets/HelloBubbles.svg"
import GitHubBubble from '../../assets/GitHub.svg'
import LinkedInBubble from '../../assets/LinkedIn.svg'
import EmailBubble from '../../assets/Email.svg'
import Bubble from '../../assets/FirstBubble.svg'
import HTMLIcon from '../../assets/HTML Icon.svg'
import ReactIcon from '../../assets/React Icon.svg'
import CSSIcon from '../../assets/CSS Icon.svg'
import JSIcon from '../../assets/JavaScript Icon.svg'
import FigmaIcon from '../../assets/Figma Icon.svg'
import AdobeIcon from '../../assets/Adobe Icon.svg'
import AboutMePhoto from '../../assets/PhotoGroup.svg'
import CJStones from '../../assets/CJStones.png'
import StayHealthy from '../../assets/StayHealthy.png'


const LandingPage = () => {

    return (
    <>
    
     <div className='HeroSection'>
        <div className='HeroSectionImage'>
          <img src={Hello} alt="" />
        </div>
        <div className='HeroSectionInformation'>
        <h1>I'm Steven King</h1>
        <h3>Front End Developer <br></br>& UX/UI Designer</h3>
        <p className="HeroParagraph">From Idea to Design to Code to Product. Through HTML, CSS, JavaScript and many other tools, I make ideas become usable and enjoyable experiences.</p>
        </div>
      </div>
      <div className='BodyContent'>
    <img className="FirstBubble" src={Bubble} alt="" />
    <a href="https://github.com/kingsteven1113"><img className="GitHubBubbleHero" src={GitHubBubble} alt="" /></a>
    <a href="https://www.linkedin.com/in/stevenkingdesign/"><img className="LinkedInBubbleHero" src={LinkedInBubble} alt="" /></a>
    <a href="mailto:kingsteven1113@gmail.com"><img className="EmailBubbleHero" src={EmailBubble} alt="" /></a>
    <img className="LastBubble" src={Bubble} alt="" />
    </div>
    <section id="About Me">
      <div className="AboutMe">
        <div className="AboutMeInformation">
        <div className="AboutMeTitle">
            <h2>About Me</h2>
            <div className="AboutMeLine"></div>
        </div>
          <p>
          I’m Steven King, I’m 22, originally went to college for Graphic Design and now pivoting into UX Design and Front End Development. <br />
            <br />
          I realized I enjoyed UX Design and Developing software one semester before I finished college. I finished out my degree and set out on my journey of teaching myself UX Design Principles and various development technologies. And here I am now! <br />
            <br />
          Here are a few current technologies I have worked with:
          </p>
          <div className="Technologies">
          <img src={HTMLIcon} alt="" />
          <img src={ReactIcon} alt="" />
          <img src={CSSIcon} alt="" />
          <img src={JSIcon} alt="" />
          <img src={FigmaIcon} alt="" />
          <img src={AdobeIcon} alt="" />
          </div>
        </div>
        <div className="AboutMePhoto">
          <img src={AboutMePhoto} alt="" />
        </div>
      </div>
    </section>

    <section id="Projects">
      <div className="Projects">
      <div className="ProjectsTitle">
            <h2>Projects</h2>
            <div className="ProjectsLine"></div>
        </div>
        
        {/* Project One - CJ Stones */}
      
      <div className="ProjectOne">
        <div className="ProjectOneInformation">
          <a href="https://www.cjstones.com/"><h4>CJ Stones</h4></a>
          <p className="ProjectInformationParagraph">As Lead Web Designer/Developer, I was tasked with redesigning the website to modernize its appearance and develop any additions to the site necessary to improve the user experience and solve pain points for both users and staff.</p>
          <div className="ProjectOneIcons">
          <img src={HTMLIcon} alt="" />
          <img src={AdobeIcon} alt="" />
          <img src={CSSIcon} alt="" />
          <img src={JSIcon} alt="" />
          </div>
        </div>

        <div className="ProjectOneImage">
          <div className="ProjectNumber"><span>01</span></div>
          <img src={CJStones} alt="" />
        </div>
      </div>

        {/* Project Two - CJ Stones */}

      <div className="ProjectOne">
        <div className="ProjectOneInformation">
          <a href="http://kingsteven1113.github.io/fecapstoneproject"><h4>StayHealthy</h4></a>
          <p className="ProjectInformationParagraph">As Frontend Developer and Designer, I was tasked with developing a site that allows patients of StayHealthy to book appointments, cancel appointments, keep track of appointments and allow for a review system for each doctor. This is the live project.</p>
          <div className="ProjectOneIcons">
          <img src={HTMLIcon} alt="" />
          <img src={CSSIcon} alt="" />
          <img src={JSIcon} alt="" />
          <img src={ReactIcon} alt="" />
          <img src={FigmaIcon} alt="" />
          </div>
        </div>

        <div className="ProjectOneImage">
          <div className="ProjectNumber"><span>02</span></div>
          <img src={StayHealthy} alt="" />
        </div>
      </div>

        {/* Project Three - CJ Stones */}

      <div className="ProjectOne">
        <div className="ProjectOneInformation">
          <a href="https://www.cjstones.com/"><h4>CJ Stones</h4></a>
          <p className="ProjectInformationParagraph">As Lead Web Designer/Developer, I was tasked with redesigning the website to modernize its appearance and develop any additions to the site necessary to improve the user experience and solve pain points for both users and staff.</p>
          <div className="ProjectOneIcons">
          <img src={HTMLIcon} alt="" />
          <img src={AdobeIcon} alt="" />
          <img src={CSSIcon} alt="" />
          <img src={JSIcon} alt="" />
          </div>
        </div>

        <div className="ProjectOneImage">
          <div className="ProjectNumber"><span>03</span></div>
          <img src={CJStones} alt="" />
        </div>
      </div>
      </div>
    </section>

    <section id="Aspirations">
      <div className="Aspirations">
        <div className="AspirationsTitle">
          <h2>Aspirations</h2>
          <div className="ProjectsLine"></div>
        </div>
        <div className="AspirationsInformation">
          <div className="AspirationOne">
            <div className="JobTitle">
            <h4>Jr Front End Engineer</h4>
            <i class="material-icons">&#xe148;</i>
            </div>
            <div className="TimelineOne">
              <h4>Right Now</h4>
            </div>
          </div>
          <div className="AspirationTwo">
          <div className="JobTitle">
            <h4>UX Engineer</h4>
            <i class="material-icons">&#xe148;</i>
            </div>
            <div className="TimelineOne">
              <h4> In 1 - 3 Years</h4>
            </div>
          </div>
          <div className="AspirationThree">
          <div className="JobTitle">
            <h4>Senior UX Engineer</h4>
            <i class="material-icons">&#xe148;</i>
            </div>
            <div className="TimelineOne">
              <h4>In 5 - 10 Years</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </> 
    )
}

export default LandingPage;