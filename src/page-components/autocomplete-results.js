import Flx from "../ui-components/flex";
import Wrapper from "../ui-components/wrapper";
import Spinner from "../ui-components/spinner/spinner";

export default function Autocomplete({data, className, querry}) {
    const style = querry && querry.length > 2 ? {'display' : 'table'} : {'display' : 'none'}
    return(
        <Wrapper style = {style} className = {className} render = {
            <>
                {
                    (data && data.map((e,i) => {
                        const props = e.properties;
                        return (
                            <>  
                                <Flx className='autoc-result' hCenter = 'flex-start' column render = {[
                                    <div key = {i}>{`${props.formatted}${props.state ? `, ${props.state}` : ''}`}</div>
                                ]}/>
                            </>
                        )
                    })) || <Spinner />
                }
                {data?.length === 0 ? "Place not found, try other keywords..." : null}
            </>
        }/>
    )
}