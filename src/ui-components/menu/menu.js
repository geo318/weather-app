import { useState } from "react";
import CheckOutsideClick from "../../helper/CheckOutsideClick";
import burger from "../../media/icons/burger.svg"
import Icon from "../icon";
import Flx from "../flex";
import "./menu.css"
import close from "../../media/icons/close.svg"

export default function Menu({id, children, className, top, left, right, bottom, delay}) { 
    const [dropdown, setDropdown] = useState(false);
    const [animation, setAnimation] = useState({});
    const defaultStyle = {
        'position': 'fixed',
        'inset': `${(top && '-100%') || ((bottom && 'auto') || 0)} ${(right && '-100%') || ((left && 'auto') || 0)} ${(bottom && '-100%') || ((top && 'auto') || 0)} ${(left && '-100%') || ((right && 'auto') || 0)}`,
        'zIndex': 2,
        'transition': delay || '550ms',
    }
    const animationStyle = {
        [(right && 'right') || (left && 'left') || (top && 'top') || (bottom && 'bottom')] : 0
    }
    const animationStyleEnd = {
        [(right && 'right') || (left && 'left') || (top && 'top') || (bottom && 'bottom')] : '-100%'
    }

    const toggleMenu = (event) => {
        setAnimation(defaultStyle)
        if(!dropdown) {
                setDropdown(e => !e)
                setTimeout(()=> setAnimation({...defaultStyle, ...animationStyle}), 0)
                return
        }
        setAnimation({...defaultStyle, ...animationStyleEnd})
        setTimeout(()=> setDropdown(e => !e), delay || 550)    
    }

    return (
        <div id={id} className={className}>
            <Icon className='pointer burger' width="40px" render={burger} onClick = {toggleMenu}/>
            <div>
                <CheckOutsideClick className='menu-container' onClickOutside = {toggleMenu} style={animation} reRender ={dropdown}>
                    {/* <div onClick = {toggleMenu}>close</div> */}
                    {  
                        dropdown && 
                        <>
                            <Flx vCenter='flex-end'><Icon className = 'pointer close' width='40px' onClick = {toggleMenu} render={close}/></Flx>
                                <div className ='menu-contents'>
                                {children}
                            </div>
                        </>
                    }
                </CheckOutsideClick>
            </div>
        </div>
    )
}