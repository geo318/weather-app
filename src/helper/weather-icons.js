import Icon from "../ui-components/icon";
import { customGetHours } from "./date";

import icon01 from "../media/icons/weather-svg-icon-set/1530361_weather_cloudy_storm_wind_windy_icon.svg"
import icon02 from "../media/icons/weather-svg-icon-set/1530362_weather_clouds_cloudy_forecast_rain_icon.svg"
import icon03 from "../media/icons/weather-svg-icon-set/1530363_weather_clouds_night_storm_icon.svg"
import icon04 from "../media/icons/weather-svg-icon-set/1530364_weather_rain_shower_storm_icon.svg"
import icon05 from "../media/icons/weather-svg-icon-set/1530365_weather_cloud_drizzel_rain_icon.svg"
import icon06 from "../media/icons/weather-svg-icon-set/1530366_weather_hurricane_storm_tornado_icon.svg"
import icon07 from "../media/icons/weather-svg-icon-set/1530367_weather_cloud_sand_sandstorm_storm_icon.svg"
import icon08 from "../media/icons/weather-svg-icon-set/1530368_weather_clouds_cloudy_fog_foggy_icon.svg"
import icon09 from "../media/icons/weather-svg-icon-set/1530369_weather_cloud_clouds_cloudy_icon.svg"
import icon10 from "../media/icons/weather-svg-icon-set/1530370_weather_clouds_hail_hailstone_snow_icon.svg"
import icon11 from "../media/icons/weather-svg-icon-set/1530371_weather_clouds_snow_winter_icon.svg"
import icon12 from "../media/icons/weather-svg-icon-set/1530372_weather_sand_sandstorm_storm_icon.svg"
import icon13 from "../media/icons/weather-svg-icon-set/1530373_weather_forecast_temperature_thermometer_icon.svg"
import icon14 from "../media/icons/weather-svg-icon-set/1530374_weather_day_sand_sandstorm_sun_icon.svg"
import icon15 from "../media/icons/weather-svg-icon-set/1530375_weather_moon_moonset_morning_icon.svg"
import icon16 from "../media/icons/weather-svg-icon-set/1530376_weather_cloudy_storm_wind_icon.svg"
import icon17 from "../media/icons/weather-svg-icon-set/1530377_weather_fog_foggy_moon_night_icon.svg"
import icon18 from "../media/icons/weather-svg-icon-set/1530378_weather_moon_moonrise_night_icon.svg"
import icon19 from "../media/icons/weather-svg-icon-set/1530379_weather_clouds_moon_night_rain_icon.svg"
import icon20 from "../media/icons/weather-svg-icon-set/1530380_weather_moon_night_snow_icon.svg"
import icon21 from "../media/icons/weather-svg-icon-set/1530381_weather_night_rain_storm_icon.svg"
import icon22 from "../media/icons/weather-svg-icon-set/1530382_weather_moon_moonlight_night_icon.svg"
import icon23 from "../media/icons/weather-svg-icon-set/1530383_weather_clouds_cloudy_moon_icon.svg"
import icon24 from "../media/icons/weather-svg-icon-set/1530384_weather_evening_sun_sunset_icon.svg"
import icon25 from "../media/icons/weather-svg-icon-set/1530385_weather_clouds_rain_storm_thunder_icon.svg"
import icon26 from "../media/icons/weather-svg-icon-set/1530386_weather_clouds_fog_foggy_icon.svg"
import icon27 from "../media/icons/weather-svg-icon-set/1530387_weather_morning_sun_sunrise_icon.svg"
import icon28 from "../media/icons/weather-svg-icon-set/1530388_weather_christmas_snow_snowflake_winter_icon.svg"
import icon29 from "../media/icons/weather-svg-icon-set/1530389_weather_clouds_storm_sunny_icon.svg"
import icon30 from "../media/icons/weather-svg-icon-set/1530390_weather_clouds_cloudy_rain_sunny_icon.svg"
import icon31 from "../media/icons/weather-svg-icon-set/1530391_weather_clouds_sun_sunny_icon.svg"
import icon32 from "../media/icons/weather-svg-icon-set/1530392_weather_sun_sunny_temperature_icon.svg"

import {weatherCodes} from './weather-codes'

export const weatherIconSet = [
    {code : 1, symbol : <Icon className='weather' alt="weather cloudy storm wind windy icon" render={icon01}/>},
    {code : 2, symbol : <Icon className='weather' alt="weather clouds cloudy forecast rain icon" render={icon02}/>},
    {code : 3, symbol : <Icon className='weather' alt="weather clouds night storm icon" render={icon03}/>},
    {code : 4, symbol : <Icon className='weather' alt="weather rain shower storm icon" render={icon04}/>},
    {code : 5, symbol : <Icon className='weather' alt="weather cloud drizzel rain icon" render={icon05}/>},
    {code : 6, symbol : <Icon className='weather' alt="weather hurricane storm tornado icon" render={icon06}/>},
    {code : 7, symbol : <Icon className='weather' alt="weather cloud sand sandstorm storm icon" render={icon07}/>},
    {code : 8, symbol : <Icon className='weather' alt="weather clouds cloudy fog foggy icon" render={icon08}/>},
    {code : 9, symbol : <Icon className='weather' alt="weather cloud clouds cloudy icon" render={icon09}/>},
    {code : 10, symbol : <Icon className='weather' alt="weather clouds hail hailstone icon" render={icon10}/>},
    {code : 11, symbol : <Icon className='weather' alt="weather clouds snow winter icon" render={icon11}/>},
    {code : 12, symbol : <Icon className='weather' alt="weather night sand sandstorm storm icon" render={icon12}/>},
    {code : 13, symbol : <Icon className='weather' alt="weather forecast temperature thermometer icon" render={icon13}/>},
    {code : 14, symbol : <Icon className='weather' alt="weather day sand sandstorm sun icon" render={icon14}/>},
    {code : 15, symbol : <Icon className='weather' alt="weather moon moonset morning icon" render={icon15}/>},
    {code : 16, symbol : <Icon className='weather' alt="weather cloudy storm wind icon" render={icon16}/>},
    {code : 17, symbol : <Icon className='weather' alt="weather fog foggy moon night icon" render={icon17}/>},
    {code : 18, symbol : <Icon className='weather' alt="weather moon moonrise night icon" render={icon18}/>},
    {code : 19, symbol : <Icon className='weather' alt="weather clouds moon night rain icon" render={icon19}/>},
    {code : 20, symbol : <Icon className='weather' alt="weather moon night snow icon" render={icon20}/>},
    {code : 21, symbol : <Icon className='weather' alt="weather night rain storm icon" render={icon21}/>},
    {code : 22, symbol : <Icon className='weather' alt="weather moon moonlight night icon" render={icon22}/>},
    {code : 23, symbol : <Icon className='weather' alt="weather night clouds cloudy moon icon" render={icon23}/>},
    {code : 24, symbol : <Icon className='weather' alt="weather evening sun sunset icon" render={icon24}/>},
    {code : 25, symbol : <Icon className='weather' alt="weather clouds rain storm thunder icon" render={icon25}/>},
    {code : 26, symbol : <Icon className='weather' alt="weather day clouds fog foggy icon" render={icon26}/>},
    {code : 27, symbol : <Icon className='weather' alt="weather morning sun sunrise icon" render={icon27}/>},
    {code : 28, symbol : <Icon className='weather' alt="weather christmas snow snowflake winter icon" render={icon28}/>},
    {code : 29, symbol : <Icon className='weather' alt="weather clouds storm sunny icon" render={icon29}/>},
    {code : 30, symbol : <Icon className='weather' alt="weather clouds cloudy rain sunny icon" render={icon30}/>},
    {code : 31, symbol : <Icon className='weather' alt="weather clouds sun sunny icon" render={icon31}/>},
    {code : 32, symbol : <Icon className='weather' alt="weather sun sunny temperature icon" render={icon32}/>},
]


export const weatherSymbolLookup = (code, currentTime, sunSet, sunRise) => {
    const symbolNum = 
         currentTime && weatherCodes.filter(e => e.code === code)[0]?.hasOwnProperty('night') &&
        (new Date(currentTime) < new Date(sunRise) || new Date(currentTime) > new Date(sunSet))
        ? weatherCodes.filter(e => e.code === code)[0]?.night
        : weatherCodes.filter(e => e.code === code)[0]?.symbol

    return weatherIconSet.filter(e => e.code === symbolNum)[0]?.symbol
}