import './style.scss';

function Home(){
    return(
        <div>
           <section className='section-container' id="home">
                <div className='socials'>
                    <div>
                        <a href="https://www.linkedin.com/in/alik-arzumanyan-812197247/"><i className='icon-linkedin'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://github.com/AlikArzumanyan001"><i className='icon-github'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://www.instagram.com/al.arzumanyan01/"><i className='icon-instagram'/></a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <a href="https://www.facebook.com/profile.php?id=100007486717291"><i className='icon-facebook-square'/></a>
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