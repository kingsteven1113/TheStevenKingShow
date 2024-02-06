import "./LandingPage.css"
import Hello from "../../assets/HelloBubbles.svg"
import GitHubBubble from '../../assets/GitHub.svg'
import LinkedInBubble from '../../assets/LinkedIn.svg'
import EmailBubble from '../../assets/Email.svg'
import Bubble from '../../assets/Bubble.svg'

const LandingPage = () => {

    return (
    <>
     <div className='HeroSection'>
        <div className='HeroSectionImage'>
          <img src={Hello} alt="" />
        </div>
        <div className='HeroSectionInformation'>
        <h1>I'm Steven King</h1>
        <h2>Front End Developer <br></br>& UX/UI Designer</h2>
        <p className="HeroParagraph">From Idea to Design to Code to Product. Through HTML, CSS, JavaScript and many other tools, I make ideas become usable and enjoyable experiences.</p>
        </div>
      </div>
    <div className='BodyContent'>
    <img className="FirstBubble" src={Bubble} alt="" />
    <img className="GitHubBubbleHero" src={GitHubBubble} alt="" />
    <img className="LinkedInBubbleHero" src={LinkedInBubble} alt="" />
    <img className="EmailBubbleHero" src={EmailBubble} alt="" />
    <img className="LastBubble" src={Bubble} alt="" />
        </div>
        </> 
    )
}

export default LandingPage;