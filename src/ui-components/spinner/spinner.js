import './spinner.css'


export default function Spinner({width, color}) {

    const spinnerStyle = {
        'width': `${width}px`,
        'height': `${width}px`,
        'borderWidth': width ? width / 10 : 2,
        'borderColor' : color,
        'borderTopColor': 'transparent',
    }
    return (
        <div className='loading_wrap'>
            <div style = {spinnerStyle} className='loading'/>
        </div>
    )
}