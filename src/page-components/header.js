import { useState } from "react";
import Icon from "../ui-components/icon";
import Flx from "../ui-components/flex";
import Input from "../ui-components/input";
import Heading from "../ui-components/heading";
import logo from "../media/icons/logo.svg"
import search from "../media/icons/search.svg"
import Form from "../ui-components/form";
import Button from "../ui-components/button";
import Divider from "../ui-components/divider";
import Wrapper from "../ui-components/wrapper";
import location from "../media/icons/location.svg";
import Spinner from "../ui-components/spinner/spinner";

export default function Header({place, querry, searchPlace, onSubmit}) {

    return (
        <>
            <Wrapper style = {{'padding':'15px 0'}} render = {
                <Flx key = 'flex-container' className = {'header'} vCenter='center' render = {[
                    <Icon key = 'logo' width = '40px' render={logo} />,
                    <Divider key = 'divider-1' width = '20px'/>,
                    <Flx key = 'flex-location-container' vCenter='center' render = {[
                        <Icon key = 'location-icon' width = '15px' render={location}/>,
                        <Divider key = 'divider-1' width = '10px'/>,
                        <Heading key = 'location-name' h5 text={place || <Spinner key='spin2' width = '30' color = '#f8b62d'/>}/>
                    ]}/>,
                    <Divider key = 'divider-2' grow = '.5'/>,
                    <Flx key = 'flex-search-cont' className='search-bar' render = {[
                        <Button key = 'search-icon-button' type = 'submit' onClick={onSubmit} render = {
                            <Icon width = '20px' render={search}/>
                        }/>,
                        <Form key = 'search-form' onSubmit={onSubmit} render = {[
                            <Input key = 'search-input' onChange = {searchPlace} value = {querry} placeholder = 'search place...'/>,
                        ]}/>
                        
                    ]}/>,
                    <Divider key = 'divider-3' grow = '.5'/>,
                    <Divider key = 'divider-4' grow = '.5'/>,
                    
                ]}/>
            }/>
        </>
    )
}