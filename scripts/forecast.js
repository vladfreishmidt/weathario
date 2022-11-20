// Interacting with the weather API
const API_KEY = '';

const getCity = async (city) => {
    const base = '';
    const query = `?apikey=${API_KEY}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
}

getCity('manchester');