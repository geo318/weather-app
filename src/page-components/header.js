import { useEffect, useState, useRef } from "react";
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
import { getAutocompleteData } from "../api/autocomplete";
import Autocomplete from "./autocomplete-results";
import burger from "../media/icons/burger.svg"
import Menu from "../ui-components/menu/menu";

export default function Header({place, querry, setQuerry, searchPlace, onSubmit, setPosition}) {
    const [debounce, setDebounce] = useState('')
    const [autocompleteData, setAutocompleteData] = useState([])
    const timer = useRef(null)

    const debounceQuerry = (querry, delay = 1000) => {
        if(autocompleteData?.features?.length === 0 && debounce === querry.split('').slice(0, debounce?.length).join('')) return
        
        clearTimeout(timer.current)
        setAutocompleteData([])
        timer.current = setTimeout(()=> setDebounce(querry), delay)
    }

    useEffect(() => {
        debounceQuerry(querry)
    },[querry])

    useEffect(() => {
        if(debounce == null || !debounce || debounce === ' ') return

        (async function() {
            const data = await getAutocompleteData(debounce);
            setAutocompleteData(data)
        })()

    },[debounce])

    const handleSubmit = (e) => {
        const negativeResult = onSubmit(e);
        if(negativeResult) return
        setAutocompleteData([])
    }

    return (
        <>
            <Wrapper style = {{'padding':'15px 20px'}} className='header-wrapper'>
                <Flx key = 'flex-container' className = {'header'} vCenter='center'>
                    <Icon width = '40px' render={logo} />
                    <Divider width = '20px'/>
                    <Flx vCenter='center'>
                        <Icon width = '15px' render={location}/>
                        <Divider width = '10px'/>
                        <Heading h3 bold='700' fullWidth color='#454545' text={place ? place : ''}/>
                    </Flx>
                    <Divider grow = '.5'/>
                    <Flx className='search-bar' vCenter='flex-start'>
                        <div key = 'search'>
                            <>
                                <Button key = 'search-icon-button' type = 'submit' onClick={onSubmit} render = {
                                    <Icon width = '20px' render={search}/>
                                }/>
                                <Form key = 'search-form' onSubmit={handleSubmit} render = {[
                                    <Input key = 'search-input' onChange = {searchPlace} value = {querry} placeholder = 'search place...'/>,
                                ]}/>
                            </>
                        </div>
                        <Autocomplete key='autocomplete' className = 'autocomplete' querry = {querry} setQuerry={setQuerry} data = {autocompleteData?.features} setPosition={setPosition}/>
                    </Flx>
                    <Divider grow = '.5'/>
                    <Divider width='50px'/>
                    <Flx className='burger' width="40px">
                        <Menu right width='500'>blablabla</Menu>
                    </Flx>
                </Flx>
            </Wrapper>
        </>
    )
}