import 'bootstrap/dist/css/bootstrap.css'
import "./Footer.css"
import Logo from '../../assets/Logo.svg'

const Footer = () => {

    return (
       <>
       <div className='Footer'>
        <img src={Logo} />
        <ul className='Contacts'>
            <li><a href="https://www.linkedin.com/in/stevenkingdesign/">LinkedIn</a></li>
            <li><a href="https://github.com/kingsteven1113">GitHub</a></li>
            <li><a href="">Resume</a></li>
        </ul>
       </div>
       </> 
    )
}

export default Footer;