import axios from "axios";

const getLocation = async () => {
    const ipResponse = axios.get('https://api.ipgeolocation.io/getip');
    const ip = (await ipResponse).data.ip;
    const LOCATION_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=4068c780648d49b3b40f808e6963b049&ip=${ip}&output=xml`;

    const response = await axios.get(LOCATION_URL);
    return response.data;
}

const getWeather = async (lat, lon) => {

    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bac9f71264248603c36f011a991ec5f6`;

    const response = await axios.get(WEATHER_URL)
    return response.data;
}

const getForcast = async (lat, lon) => {
    const FORCAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f68a220fe5aebfe490d5ec94874ee5db`;

    const response = await axios.get(FORCAST_URL);
    return response.data;
}


export {getLocation, getWeather, getForcast};