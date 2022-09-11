import Flx from "../ui-components/flex";
import Wrapper from "../ui-components/wrapper";
import Spinner from "../ui-components/spinner/spinner";
import { useEffect, useState } from "react";

export default function Autocomplete({data, className, querry, setQuerry, setPosition}) {
    const [showDropdown, setShowDropdown] = useState(true)

    const handleClick = (lat,lon) => {
        setPosition({lat,lon})
        setQuerry('')
        setShowDropdown(false)
        return
    }

    useEffect(()=> {
        if(querry.length > 2 && !showDropdown)
        setShowDropdown(true)
    },[querry])
    
    return(
        <>
            {
                querry.length > 2 && showDropdown &&
                <Wrapper className = {className}>
                        <div className="autocomplete-content " style={{'position':'relative'}}>
                        {
                            (data && data.map((e,i) => {
                                const props = e.properties;
                                return (
                                    <Flx key = {i} className='autoc-result' hCenter = 'flex-start' column>
                                        <div onClick={()=>handleClick(props.lat,props.lon)}>{`${props.formatted}${props.state ? `, ${props.state}` : ''}`}</div>
                                    </Flx>
                                )
                            })) || <Spinner />
                        }
                        {data?.length === 0 ? "Place not found, try other keywords..." : null}
                        </div>
                </Wrapper>
            }
        </>
    )
}