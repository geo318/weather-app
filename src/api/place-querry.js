export const sendQuerry = async (querry) => {
    const apiKey = '?access_key=793b4bd8cbbfa5125b6bacc9a9e4d7a2';
    const url = 'http://api.positionstack.com/v1/forward';
    const urlToFetch = `${url}${apiKey}&query=${querry}`
    try {
        const response = await fetch(urlToFetch);
        const jsonResponse = await response.json()
        return jsonResponse

    } catch(e) {
        console.log(e)
    }
}