import './style.scss';
import linkedin from '../../assets/img/linkedin-ico.png';
import github from '../../assets/img/github-ico.png';
import instagram from '../../assets/img/instagram-light.png';
import facebook from '../../assets/img/facebook.png';

function Footer(){
    return(
        <div>
            <div className='footer'> 
                <div className='icons-social'>
                    <div>
                        <a href="https://www.linkedin.com/in/alik-arzumanyan-812197247/"><img src={linkedin} className='linkedin'/></a>
                    </div>
                    <div>
                        <a href="https://github.com/AlikArzumanyan001"><img src={github} className='github'/></a>
                    </div>
                    <div >
                        <a href="https://www.instagram.com/al.arzumanyan01/"><img src={instagram} className='instagram'/></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100007486717291"><img src={facebook} className='facebook-square'/></a>
                    </div>
                </div>
                <p className='info'>© Copyright 2023. Made by Alik Arzumanyan</p>
            </div>
        </div>
    )
}
export default Footer