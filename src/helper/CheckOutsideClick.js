import {useRef, useEffect} from 'react'

export default function CheckOutsideClick({onClickOutside, children, className, style, reRender}) {
    const ref = useRef()

    const handleClickOutside = e => {
        if(ref.current && !ref.current.contains(e.target)) {
            onClickOutside && onClickOutside()
        }
    }

    useEffect(()=> {
        document.addEventListener('click', handleClickOutside, true)
        return () => document.removeEventListener('click', handleClickOutside, true)
    },[reRender]);

    if(!children) return null
    return <div className={className} style={style} ref={ref}>{children}</div>
}