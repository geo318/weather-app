export default function Txt({size, capital, text, bold, color, className}) {
    const txtStyle = {
        'fontSize': size,
        'textTransform': capital ? 'capitalize' : 'none',
        'fontWeight': bold ? 600 : 400,
        'color': color, 
    }

    return (
        <div className={`txt${className ? ` ${className}` : ''}`} style = {txtStyle}>
            {text}
        </div>
    )
}