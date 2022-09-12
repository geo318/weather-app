export default function Icon({width, alt, render,className,onClick}) {

    const iconStyle = {
        'minWidth' :width,
        'width' : width,
        'height': width,
        'maxWidth' : 250
    }

    return (
        <>
            <div className={className ? `${className}-icon` : 'icon'} style = {iconStyle} onClick ={onClick}>
                {<img src={ render } alt={alt}/>}
            </div>
        </>
    )
}