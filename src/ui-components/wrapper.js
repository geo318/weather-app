export default function Wrapper({style, render, children, className}) {

    return (
        <div className={`wrapper${className ? ` ${className}` : ''}`} style = {style}>
            { 
                render || children
            }
        </div>
    )
}