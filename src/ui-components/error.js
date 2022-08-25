export default function Error({render}) {
    const flxStyle = {
        "display": "block",
    }

    return (
        <>
            <div className="error" style = {flxStyle}>
                <p>{ render }</p>
            </div>
        </>
    )
}