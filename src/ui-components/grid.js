export default function Grid({row, column, render}) {

    const gridStyle = {
        "display": "grid",
        "gridTemplateRows": row,
        "gridTemplateColumns": column
    }

    return (
        <>
            <div className="grid" style = {gridStyle}>
                { 
                    render.map((e, i) => <div key={i}>{ e }</div>)
                }
            </div>
        </>
    )
}