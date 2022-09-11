
import { fetchApiData } from "./fetchdata";

export const getLocation = async (callBack) => {
    navigator.geolocation.getCurrentPosition(callBack)
}

export const locationApi = async () => {
    const url = "https://ipgeolocation.abstractapi.com/v1/";
    const apiKey = "?api_key=223d90050de14898b18876c34c9c3d5c"
    const urlToFetch = `${url}${apiKey}`
    return await fetchApiData(urlToFetch)
}


export const reverseGeoLocation = async (lat, lon) => {
    const url = "https://api.geoapify.com/v1/geocode/reverse"
    const params = `?lat=${lat}&lon=${lon}`
    const apiKey = "&apiKey=4cf28329d7854de0b75f95cf17bacb25"
    const urlToFetch = `${url}${params}${apiKey}`
    return await fetchApiData(urlToFetch)
}