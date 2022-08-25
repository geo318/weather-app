import './compass.css';
import Icon from '../icon';
import compass from './svg/compass.svg'
import arrow from './svg/compass-arrow.svg'
import Spinner from '../spinner/spinner';

export default function Compass({size, rotate}) {
    const degrees = rotate ? rotate : 0
    const initialDirection = 104;
    const directionStyle = {
        'transform': `rotate(${degrees - initialDirection}deg)`
    }
    const containerStyle = {
        'maxWidth': size,
        'maxHeight': size,
        'opacity': 0.7,
    }

    const compassSize = {
        'width': size,
        'height': size,
        'padding': 5,
        'border': "2px solid",
        'borderRadius': '100%'
    }
    return (
        <>
            {
                rotate ?
                <div className='comp-container' style = {containerStyle}>
                    <div className="compass-body" style = {compassSize}/>
                    <div className="comp-arrow-cont" style={directionStyle}>
                        <Icon className="compass-arrow" render={arrow}/>
                    </div>
                </div> :
                <Spinner width = '30' color = '#f8b62d'/>
            }
           
        </>
    )
}