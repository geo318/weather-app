export const getWeatherData = async (lat,lon) => {
    if(!lat || !lon ) return {error : 'Place not found! Please, check spelling...'}
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`
    const weatherParams = '&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,shortwave_radiation_sum&current_weather=true&windspeed_unit=ms&timezone=auto'
    const urlToFetch = url + weatherParams;
    try {
        const response = await fetch(urlToFetch)
        const jsonResponse = await response.json()
        return jsonResponse
    } catch(e) {
        console.log(e)
    }
}