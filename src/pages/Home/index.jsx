import './style.scss';
import linkedin from '../../assets/img/linkedin-dark.svg';
import github from '../../assets/img/github-dark.svg';
import instagram from '../../assets/img/instagram-11.png';
import facebook from '../../assets/img/facebookblack.png';

function Home(){
    return(
        <div>
           <section className='section-container' id="home">
                <div className='socials'>
                    <div>
                        <a href="https://www.linkedin.com/in/alik-arzumanyan-812197247/"><img src={linkedin} className='linkedin'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://github.com/AlikArzumanyan001"><img src={github} className='github'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://www.instagram.com/al.arzumanyan01/"><img src={instagram} className='instagram'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://www.facebook.com/profile.php?id=100007486717291"><img src={facebook} className='facebook-square'/></a>
                    </div>
                </div>
                <div className='home-hero'>
                    <div className='aftor-name'>
                        <h1>HEY, I'M ALIK</h1>
                    </div>
                    <h4 className='info'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h4>
                    <div className='projects-btn'>
                        <a href="#projects" className='proj-btn'>Projects</a>
                    </div>
                </div>
           </section>
        </div>
    )
}
export default Home