import axios from 'axios';

const getLatLong = async (search) => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
    params: { query: search ? search : 'Bali' },
    headers: {
      'X-RapidAPI-Key': '0598613c52msha7ed4913e26d0d7p1720cajsnaf17581b23e6',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  const res = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return await res;
};

const getHotel = async ({ latitude, longitude }) => {
  try {
    const res = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
      params: { latitude: latitude ? latitude : '-8.36977497199996', longitude: longitude ? longitude : '115.13165412300009', limit: '14' },
      headers: {
        'X-RapidAPI-Key': '0598613c52msha7ed4913e26d0d7p1720cajsnaf17581b23e6',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export { getLatLong, getHotel };
