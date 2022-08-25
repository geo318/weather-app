import { fetchApiData } from "./fetchdata";

export const getAutocompleteData = async (querry) => {
    if(querry.length < 3) return

    const url = "https://api.geoapify.com/v1/geocode/autocomplete";
    const place = `?text=${querry}`
    const apiKey = "&apiKey=4cf28329d7854de0b75f95cf17bacb25"
    const urlToFetch = `${url}${place}${apiKey}`

    const data = await fetchApiData(urlToFetch)
    return data
}