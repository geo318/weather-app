import Divider from "./divider"
import Flx from "./flex"
import Txt from "./text"
import Spinner from "./spinner/spinner"
import { weatherData } from "../contexts/weather-data-context"
import { useContext } from "react"

export default function Label({label, text, lSize, tSize, className, gap, lBold, tBold}) {
    const data = useContext(weatherData)
    const loadingStyle = !data ? {
        'backgroundColor': '#eee',
        'width': '100%',
        'color': 'transparent',
    } : {}

    return (
        <div className={`flx${className ? ` ${className}` : ''}`}>
            <Flx render = {[
                <Txt key = 'label' bold = {lBold} style = {{...{'flexGrow':1},...loadingStyle}} text = {data && label} size={lSize} className= {`${data ? 'label-val' : 'label filler'}`} />,
                <Divider key='div' width = {gap}/>,
                <Txt key = 'label-val' bold = {tBold} style = {loadingStyle}  text = {data && text} size={tSize} className= {`${data ? 'label-val' : 'label-val filler'}`} />,
            ]}/>
        </div>
    )
}