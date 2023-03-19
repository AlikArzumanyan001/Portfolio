import './style.scss';

function About(){
    return(
        <div style={{backgroundColor:"#fafafa"}} id='about'>
            <div className='about'>
                <div className='about-name-cont'>
                    <h1 className='name'>About me</h1>
                    <hr className='hr'/>
                    <p className='text'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className='aftor-skills-cont'>
                    <div className='aftor-info'>
                        <h2 className='h2'>Get to know me!</h2>
                        <p className='p'>I'm a <strong style={{fontWeight:"bolder",fontSize:"18px"}}>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong style={{fontWeight:"bolder",fontSize:"18px"}}>Projects</strong> section.</p>
                        <p className='p'>I also like sharing content related to the stuff that I have learned over the years in <strong style={{fontWeight:"bolder",fontSize:"18px"}}>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/alik-arzumanyan-812197247/" className='linkedin-link'>Linkedin</a> where I post useful content related to Web Development and Programming</p>
                        <p className='p'>I'm open to <strong style={{fontWeight:"bolder",fontSize:"18px"}}>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong style={{fontWeight:"bolder",fontSize:"18px"}}>contact</strong> me.</p>
                    </div>
                    <div className='aftor-skills'>
                        <h2 className='h2'>My Skills</h2>
                        <div className='skills'>
                            <div className='skills-div'>
                                <p className='language'>HTML</p>
                                <p className='language'>CSS</p>
                                <p className='language'>SASS</p>
                                <p className='language'>GIT</p>
                                <p className='language'>Github</p>
                                <p className='language'>JavaScript</p>
                                <p className='language'>React</p>
                                <p className='language'>Redux, Toolkit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About