import './style.scss';
import aftor from '../../assets/img/Alik.jpg'
import { useState } from 'react';
function Header(){
    const [x,setx] = useState(false)
   
    return(
        <div>
            <div className='header-container'>
                <div className='name-img'>
                    <div className='img'>
                        <img src={aftor}  className='img-aftor'/>
                    </div>
                    <div className='name'>
                        <p className='name-p'>Alik Arzumanyan</p>
                    </div>
                </div>
                <div className='navbar-cont'>
                    <div className='navlink-cont' >
                        <a href="#home" className='home'>Home</a>
                        <a href="#about" className='home'>About</a>
                        <a href="#projects" className='home'>Projects</a>
                    </div>
                    
                    <div className='navlink-container'>
                        <i className='icon-bars' onClick={(e)=>{
                            setx(!x)
                        }}></i>
                        <div className='navlink' style={x ? {display:"block"} : {display:"none"}}>
                            <div className='navlink-cont2'>
                                <a href="#home" className='home'>Home</a>
                                <a href="#about" className='home'>About</a>
                                <a href="#projects" className='home'>Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"70px"}}></div>
        </div>
    )
}
export default Header