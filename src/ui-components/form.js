export default function Form({onSubmit, render, className}) {
    const flxStyle = {
        "display": "flex",
    }


    return (
        <form onSubmit={e => onSubmit(e)} className={`flx ${className ? className : ''}`} style = {flxStyle}>
            { 
                render?.map((e,i) =>  <div key = {i}>{e}</div> )
            }
        </form>
    )
}