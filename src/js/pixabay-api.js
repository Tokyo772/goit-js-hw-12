import axios from 'axios';

async function serviceImage(userSearch) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '43457723-16bfd608d3311c06907a5c683',
    q: userSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return await axios.get(`${BASE_URL}?${params}`);
}

export { serviceImage };
