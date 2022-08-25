import Spinner from "./spinner/spinner"

export default function Flx({hCenter, vCenter, render, className, column}) {
    const flxStyle = {
        "display": "flex",
        "justifyContent": hCenter,
        "alignItems": vCenter || 'center',
        "flexDirection": column ? 'column' : 'row'
    }

    return (
        <div className={`flx${className ? ` ${className}` : ''}`} style = {flxStyle}>
            { 
                render?.map((e, i) => e ) || <Spinner width = '30' color = '#f8b62d'/>
            }
        </div>
    )
}