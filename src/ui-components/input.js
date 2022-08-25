export default function Input({placeholder, inputStyle, onChange, className, value}) {

    return (
        <>
            <div className={`flx input ${className ? className : ''}`}>
                <input onChange={(e) => onChange(e.target.value)} style = {inputStyle} value = {value} placeholder = {placeholder}/>
            </div>
        </>
    )
}