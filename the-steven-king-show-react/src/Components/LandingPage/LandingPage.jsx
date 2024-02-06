import "./LandingPage.css"
import Hello from "../../assets/HelloBubbles.svg"

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

        </div>
        </> 
    )
}

export default LandingPage;