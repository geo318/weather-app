import { useEffect, useState } from 'react';
import '../media/css/main.css'
import './App.css';
import { sendQuerry } from '../api/place-querry';
import { getWeatherData } from '../api/weather';
import Flx from '../ui-components/flex';
import Compass from '../ui-components/compass/compass';
import Button from '../ui-components/button';
import Header from '../page-components/header';
import Spinner from '../ui-components/spinner/spinner';
import { weatherDescLookup } from '../helper/weather-codes';
import Heading from '../ui-components/heading';
import { weatherSymbolLookup } from '../helper/weather-icons';
import Error from '../ui-components/error';
import { getWeekday, getTime } from '../helper/date';
import { locationApi, getLocation, reverseGeoLocation } from '../api/geolocation';
import Wrapper from '../ui-components/wrapper';
import Label from '../ui-components/label';
import Divider from '../ui-components/divider';
import Windmill from '../ui-components/windmill/windmill';
import { calculateDirection } from '../helper/compass-direction';
import { weatherData } from '../contexts/weather-data-context';

function App() {
  const [place, setPlace] = useState('')
  const [querry, setQuerry] = useState('')
  const [placeData, setPlaceData] = useState('')
  const [weather, setWeather] = useState('')
  const [arragedData, setArragedData] = useState()

  const printRes = async (e) => {
    e.preventDefault()
    setPlaceData('')
    if(querry === "") return
    const res = await sendQuerry(querry)
    const latitude = res?.data[0]?.latitude
    const longitude = res?.data[0]?.longitude
    setPlace(querry);
    const weatherData = await getWeatherData(latitude,longitude)
    setPlaceData(weatherData)
    const data = await rearragedData(weatherData)
    setArragedData(data)

  }

  const showPosition = async (position) => {
    const weatherData = await getWeatherData(position.coords.latitude, position.coords.longitude)
    const accuratePosition = await reverseGeoLocation(position.coords.latitude, position.coords.longitude);
    const positionResived = accuratePosition?.features?.[0]?.properties
    setPlace(positionResived?.city || positionResived?.village || positionResived?.county || positionResived?.country);
    setPlaceData(weatherData)
    const data = await rearragedData(weatherData)
    setArragedData(data)
    console.log(weatherData)
  }

  useEffect(()=> {
    return () => getLocation(showPosition)
  },[])

  const searchPlace = (querry) => {
    setQuerry(querry)
  }

  const rearragedData = async (array) => {
    const data = array.daily
    let newOrder = []
    data?.time?.forEach((e,i) => {
      newOrder.push(
        { time: e, 
          at_max : data?.apparent_temperature_max[i], 
          at_min : data?.apparent_temperature_min[i], 
          rad : data?.shortwave_radiation_sum[i], 
          s_rise : data?.sunrise[i], 
          s_set : data?.sunset[i], 
          t_max : data?.temperature_2m_max[i],
          t_min : data?.temperature_2m_min[i],
          w_code : data?.weathercode[i] 
        }
      )
    })
    return await Promise.all(newOrder)
  }

  const sunSet = arragedData?.[0]?.s_set
  const sunRise = arragedData?.[0]?.s_rise

  return (
    <>
      <Wrapper style = {{'paddingInline':'20px'}} render = {
        <>
          <Header searchPlace = {searchPlace} onSubmit={printRes} place = {place} querry = {querry}/>
          
          <Flx render = {[ 
            <Heading h2 text={placeData && place}/>,
            <Flx grow render = {[<Divider/>,]}/>
          ]}/>

          

          <Flx className='weather-cards-container' vCenter = 'flex-start' render = {[
            <weatherData.Provider value = {arragedData}>
            <Flx key = '2day' column className='card today' render = {[
              <div key='card-today-inner-content'>
                <Heading h2 bold='600' text = {getWeekday(arragedData?.[0]?.time)}/>
                
                <Flx render = {[
                  <Flx grow className='weather-icon-2day' key='weather-icon' render = {[ (placeData && <div key='w-ic'>{weatherSymbolLookup(placeData?.current_weather?.weathercode, placeData?.current_weather?.time, sunSet, sunRise)}</div>) || <Flx hCenter='center' render={[<Spinner key = 'spin-weather' width = '30' color = '#f8b62d'/>]}/> || <Error key='err' render = {placeData.error}/> ]}/>,
                  <Divider key = 'v-div' width={10}/>,
                  <Flx width='40%' key = 'windset' className='wind-cont' column render={[
                    <Divider key = 'w-div-0' height={10}/>,
                    <Heading key = 'w-dir' h6 text={`${calculateDirection(placeData?.current_weather?.winddirection)}`}/>,
                    <Divider key = 'w-div-1' height={10}/>,
                    <Wrapper key='compass' style = {{'padding': '0 10px'}} render = {<Compass key = 'compass' size = {35} rotate = {placeData?.current_weather?.winddirection}/>} />,
                    <Divider key = 'border-b' height='15px' border = '1px solid #eee'/>,
                    <Heading key = 'w-speed' h6 text={`${placeData?.current_weather?.windspeed} ${placeData?.daily_units?.windspeed_10m_max}`}/>,
                    <Windmill key='windmill' size = {40} speed={placeData?.current_weather?.windspeed}/>,
                  ]}/>
                ]}/>
                
                
                <Divider height='15px' border = '1px solid #eee'/>
                <Heading h4 text={weatherDescLookup(placeData?.current_weather?.weathercode)}/>
                <Divider height='5px'/>
                <Label label = 'current temperature:' lSize='14px' tSize='18px' tBold lBold text = {`${placeData?.current_weather?.temperature} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='10px'/>
                <Divider height='15px' border = '1px solid #eee'/>
                <Label label = 'Highest today:' lSize='12px' tSize='12px' tBold text = {`${arragedData?.[0]?.t_max.toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='10px'/>
                <Divider height='10px'/>
                <Label label = 'Lowest today:' lSize='12px' tSize='12px' tBold text = {`${arragedData?.[0]?.t_min.toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='10px'/>
                
              </div>
            ]}/>
            </weatherData.Provider>
            ,

            <Flx key = 'next-days' hCenter = 'center' vCenter= 'center' className='card-container' render= {
              arragedData?.slice(1)?.map((e,i)=> {
                const data = arragedData?.slice(1); 
                return (
                  <div key = {i} className='card'>
                    <Flx hCenter='center' render = {[<div key='weather symbol'>{weatherSymbolLookup(e.w_code)}</div>]}/>
                    <Heading h4 bold='600' text = {getWeekday(data?.[i]?.time)}/>
                    <Divider height='15px' border = '1px solid #eee'/>
                    <Label label = 'Highest °C:' lSize='13px' tSize='14px' tBold text = {`${data[i].t_max.toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='20px'/>
                    <Divider height='5px'/>
                    <Label label = 'Lowest °C:' lSize='13px' tSize='14px' tBold text ={`${(data[i].t_min).toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='20px'/>
                    <Divider height='10px' border = '1px solid #eee'/>
                    <Label label = 'sunrise:' lSize='12px' tSize='12px' text = {`${getTime(data[i].s_rise)} am`} className='card-label' gap='10px'/>
                    <Divider height='5px'/>
                    <Label label = 'sunset:' lSize='12px' tSize='12px' text = {`${getTime(data[i].s_set)} pm`} className='card-label' gap='10px'/>
                  </div>
                )
              })
            }/>,
          ]}/>

        </>
      }/>
    </>
  );
}

export default App;
