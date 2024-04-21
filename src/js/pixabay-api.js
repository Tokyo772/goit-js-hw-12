import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43457723-16bfd608d3311c06907a5c683';

async function serviceImage(userSearch, page = 32) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: userSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 15,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}

export { serviceImage };
