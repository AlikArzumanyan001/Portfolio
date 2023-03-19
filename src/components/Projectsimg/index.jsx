import './style.scss';

function Projectsimg(props){
    const item = props.item;
    return(
        <div className='img-cont'>
            <div className='imges'>
                <img src={item.img} className="img"/>
            </div>
            <div className='name'>
                <p className='web-name'>{item.name}</p>
                <a className='btn-website' target={'_blank'} href={item.href}>click me</a>
            </div>
        </div>
    )
}
export default Projectsimg