import { useState } from 'react';
import './style.scss';
import dope from "../../assets/img/dope.jpg";
import showcase from "../../assets/img/showcase.jpg";
import simple from "../../assets/img/simple.jpg";
import Projectsimg from '../../components/Projectsimg';

function Projects(){
    const [img,setimg] = useState([
        {
            id:1,
            img:dope,
            name:"Hotel"
        },
        {
            id:2,
            img:simple,
            name:"Simple House"
        },
        {
            id:3,
            img:showcase,
            name:"Showcase"
        },
    ])

    return(
        <div className='project' id='projects'>
            <div className='project-name-cont'> 
                <h1 className='name'>Projects</h1>
                <hr className='hr'/>
                <p className='text'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <div className='website-cont-img'>
                {img.map(el => <Projectsimg key={el.id} item={el}/>)}
            </div>
        </div>
    )
}
export default Projects