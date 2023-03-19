import './style.scss';

function Footer(){
    return(
        <div>
            <div className='footer'> 
                <div className='icons-social'>
                    <div>
                        <a href="https://www.linkedin.com/in/alik-arzumanyan-812197247/"><i className='icon-linkedin'/></a>
                    </div>
                    <div>
                        <a href="https://github.com/AlikArzumanyan001"><i className='icon-github'/></a>
                    </div>
                    <div >
                        <a href="https://www.instagram.com/al.arzumanyan01/"><i className='icon-instagram'/></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100007486717291"><i className='icon-facebook-square'/></a>
                    </div>
                </div>
                <p className='info'>© Copyright 2023. Made by Alik Arzumanyan</p>
            </div>
        </div>
    )
}
export default Footer