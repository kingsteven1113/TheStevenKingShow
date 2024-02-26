import 'bootstrap/dist/css/bootstrap.css'
import "./LandingPageMobile.css"
import { useRef } from 'react';
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





const LandingPageMobile = () => {

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
    <section id="AboutMe">
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
          <p className="ProjectInformationParagraph">As Founding Web Developer, I was tasked with redesigning the website to modernize its appearance and develop any additions to the site necessary to improve the user experience and solve pain points for both users and staff. Including a search system that allows you to search the images by name on the page and automatically updates itself whenever a new image is added to the page. It is also intgrated with a CMS known as Thryv.</p>
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

      </div>
    </section>

    <section id="Aspirations">
      <div className="Aspirations">
        <div className="AspirationsTitle">
          <h2>Aspirations</h2>
          <div className="ProjectsLine"></div>
        </div>
        <div id='accordion' className="AspirationsInformation panel-group">
          <div className="AspirationOne panel panel-default">
            <div className="JobTitle panel-heading">
            <h4 className='panel-title'>Jr Front End Engineer</h4>
            </div>
            <div className='TimelineButtonContainer'>
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"><i class="material-icons">&#xe148;</i></a>
            <div className="TimelineOne">
              <h4 style={{margin: "0"}}>Right <br></br> Now</h4>
            </div>
            </div>
          </div>
          <div id="collapse1" class="JobInfo panel-collapse collapse in">
            <h5>Jr. Front End Engineer</h5>
            <br />
            <h6 style={{marginTop: "30px"}}>What I am looking for from this role:</h6>
            <ul className='JobList'>
              <li>Mentorship to build on my skills and coding process</li>
              <li>Development of my skills in real world scenarios</li>
              <li>Having an effect on the team and the product produced</li>
              <li>To utilize my skillset effectively in the work I do</li>
              <li>Learn new technologies in the industry</li>
            </ul>
          </div>
          <div className="AspirationTwo panel panel-default">
          <div className="JobTitle panel-heading">
            <h4 className='panel-title'>UX Engineer</h4>
            </div>
            <div className='TimelineButtonContainer'>
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"><i class="material-icons">&#xe148;</i></a>
            <div className="TimelineOne">
              <h4 style={{margin: "0"}}>In 1 - 3 <br></br> Years</h4>
            </div>
            </div>
          </div>
          <div id="collapse2" class="JobInfo panel-collapse collapse in">
            <h5>UX Engineer</h5>
            <br />
            <h6 style={{marginTop: "30px"}}>What I am looking for from this role:</h6>
            <ul className='JobList'>
              <li>Mentor a intern/Jr Developer</li>
              <li>Take on new tasks in the development process</li>
              <li>Encourage a hardworking and effective work culture and make impactful decisions</li>
              <li>To expand my skillset to meet the needs of new work requirements</li>
              <li>To continue to learn new technologies in the industry</li>
            </ul>
            </div>
          <div className="AspirationThree panel panel-default">
          <div className="JobTitle panel-heading">
            <h4 class="panel-title">
        Senior UX Engineer</h4>
            </div>
            <div className='TimelineButtonContainer'>
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"><i class="material-icons">&#xe148;</i></a>
            <div className="TimelineOne">
              <h4 style={{margin: "0"}}>In 5 - 10 <br></br> Years</h4>
            </div>
            </div>
            
          </div>
          <div id="collapse3" class="JobInfo panel-collapse collapse in">
            <h5>Senior UX Engineer</h5>
            <br />
            <h6 style={{marginTop: "30px"}}>What I am looking for from this role:</h6>
            <ul className='JobList'>
              <li>Mentor multiple engineers to improve effectiveness of the team</li>
              <li>Make impactful decisions and be part of the end to end process of development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        </> 
    )
}

export default LandingPageMobile;