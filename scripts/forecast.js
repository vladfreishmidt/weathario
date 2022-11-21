// Interacting with the weather API
const API_KEY = '';

const getWeather = async (id) => {
    const base = '';
    const query = `${id}?apikey=${API_KEY}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const base = '';
    const query = `?apikey=${API_KEY}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity('manchester').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));