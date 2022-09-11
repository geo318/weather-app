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
import Map from '../page-components/map/map';

function App() {
  const 
    [place, setPlace] = useState(''),
    [querry, setQuerry] = useState(''),
    [placeData, setPlaceData] = useState(''),
    [position, setPosition] = useState({lat:'', lon:''}),
    [arragedData, setArragedData] = useState();

  const printRes = async (e) => {
    e.preventDefault()
    if(querry === "") return
    const 
      res = await sendQuerry(querry), 
      lat = res?.data[0]?.latitude,
      lon = res?.data[0]?.longitude;
      if(!lat || !lon) return true
      setPlace(querry);
      setPosition({lat,lon})
  }

  const showPosition = async (position) => {
    getLocationInfo(position.coords.latitude, position.coords.longitude)
    const 
      lat = position.coords.latitude, 
      lon = position.coords.longitude;
    setPosition({lat,lon})
  }

  const getLocationInfo = async (lat, lon) => {
    const 
      accuratePosition = await reverseGeoLocation(lat,lon), 
      positionResived = accuratePosition?.features?.[0]?.properties
      console.log(positionResived)
    setPlace(positionResived?.city || positionResived?.village || positionResived?.county || positionResived?.country);
  }

  const fetchAndSetData = async (lat,lon) => {
    const weatherData = await getWeatherData(lat, lon)
    setPlaceData(weatherData)
    const data = await rearragedData(weatherData)
    setArragedData(data)
  }

  useEffect(()=> {
    return () => (async ()=> {
      getLocation(showPosition)
      if(position.lat) return
      const locationFromIp = await locationApi();
      setPosition({lat: locationFromIp.latitude, lon: locationFromIp.longitude})
    })()
  },[])

  useEffect(()=>{
    if(position.lat){
      getLocationInfo(position.lat, position.lon)
      fetchAndSetData(position.lat, position.lon)
    }
  },[position])

  const searchPlace = (querry) => {
    setQuerry(querry)
  }

  const rearragedData = async (array) => {
    let 
      data = array.daily,
      newOrder = [];

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

  const 
    sunSet = arragedData?.[0]?.s_set,
    sunRise = arragedData?.[0]?.s_rise;

  return (
    <>
      <Wrapper>
        <>
          <Header searchPlace = {searchPlace} onSubmit={printRes} place = {place} querry = {querry} setQuerry = {setQuerry} setPosition={setPosition}/>
          <Wrapper className='weather-wrapper' style={{'padding-inline':20, 'maxWidth':1335}}>
            <Divider height='20px'/>
            <Flx className='weather-cards-container' vCenter = 'flex-start' hCenter='flex-start'>
              <weatherData.Provider value = {arragedData}>
                <Flx key = '2day' column className='card today'>
                  <div key='card-today-inner-content'>
                    <Heading h3 bold='600' text = {getWeekday(arragedData?.[0]?.time)}/>
                    
                    <Flx>
                      <Flx grow className='weather-icon-2day' vCenter='flex-start'>
                        {
                          (placeData && <div key='w-ic'>{weatherSymbolLookup(placeData?.current_weather?.weathercode, placeData?.current_weather?.time, sunSet, sunRise)}</div>) || 
                          <Flx hCenter='center'>
                            <Spinner key = 'spin-weather' width = '30' color = '#f8b62d'/>
                          </Flx> || <Error key='err' render = {placeData.error}/>
                        }
                      </Flx>
                      <Divider width={10}/>
                      <Flx width='40%' key = 'windset' className='wind-cont' column>
                        <Heading h6 text={`${calculateDirection(placeData?.current_weather?.winddirection)}`}/>
                        <Divider height={5}/>
                        <Compass key = 'compass' size = {25} rotate = {placeData?.current_weather?.winddirection}/>
                        <Divider height='5px' border = '1px solid #eee'/>
                        <Heading h6 text={`${placeData?.current_weather?.windspeed} ${placeData?.daily_units?.windspeed_10m_max}`}/>
                        <Windmill size = {25} speed={placeData?.current_weather?.windspeed}/>
                      </Flx>
                    </Flx>
                    
                    <Divider height='5px' border = '1px solid #eee'/>
                    <Heading h4 text={weatherDescLookup(placeData?.current_weather?.weathercode)}/>
                    <Divider height='5px'/>
                    <Label label = 'current temperature:' lSize='14px' tSize='18px' tBold lBold text = {`${placeData?.current_weather?.temperature} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='20px'/>
                    <Divider height='5px' border = '1px solid #eee'/>
                    <Label label = 'Highest today:' lSize='12px' tSize='12px' tBold text = {`${arragedData?.[0]?.t_max.toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='20px'/>
                    <Divider height='5px'/>
                    <Label label = 'Lowest today:' lSize='12px' tSize='12px' tBold text = {`${arragedData?.[0]?.t_min.toString().split('.')[0]} ${placeData?.daily_units?.temperature_2m_max}`} className='card-label' gap='10px'/>
                    
                  </div>
                </Flx>
              </weatherData.Provider>

              <Flx key = 'next-days' hCenter = 'center' vCenter= 'flex-start' className='card-container' render= {
                arragedData?.slice(1)?.map((e,i)=> {
                  const data = arragedData?.slice(1); 
                  return (
                    <div key = {i} className='card'>
                      <Flx hCenter='center'>
                        <div key='weather symbol'>{weatherSymbolLookup(e.w_code)}</div>
                      </Flx>
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
              }/>
            </Flx>
            <Map coords={position}/>
          </Wrapper>
        </>
      </Wrapper>
    </>
  );
}

export default App;
