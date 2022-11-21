// Interacting with the weather API
const API_KEY = 'PXQ1d2IOomiMpJIzysxkqICEfaQWOL1c';

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${API_KEY}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${API_KEY}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

