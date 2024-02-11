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


const LandingPage = () => {

    return (
    <>
    <section>
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
    
        </> 
    )
}

export default LandingPage;