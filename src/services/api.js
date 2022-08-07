import axios from "axios";

const getLocation = async () => {

    const LOCATION_URL = 'http://ip-api.com/json/?fields=country,city,lat,lon,timezone';

    const response = await axios.get(LOCATION_URL);
    return response.data;
}

