import './windmill.css';
import Icon from '../icon';
import windmill from './svg/windmill.svg'
import Spinner from '../spinner/spinner';

export default function Windmill({size, speed}) {
    const containerStyle = {
        'position': 'relative',
        'width': size,
        'height': size,
        'opacity': 0.7,
        'animation': `${ speed < 75 ? 2 - 3 * (speed/50) : .05}s spin linear infinite`
    }
    return (
        <>
            {
                speed ?
                <div className='windmill-container'>
                    <div style = {containerStyle}>
                        <Icon className="compass-body" render={windmill}/>
                    </div>
                </div> :
                <Spinner width = '30' color = '#f8b62d'/>
            }
           
        </>
    )
}