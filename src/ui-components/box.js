export default function Box({text, padding, onClick, className}) {
    const buttonStyle = {
        "display": "flex",
        "padding": padding,
    }

    return (
        <>
            <div className={`flx button ${className}`}>
                <button onClick={() => onClick()} style = {buttonStyle}>{ text }</button>
            </div>
        </>
    )
}