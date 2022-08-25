export default function Wrapper({style, render, className}) {

    return (
        <div className={`wrapper ${className ? className : ''}`} style = {style}>
            { 
                render
            }
        </div>
    )
}