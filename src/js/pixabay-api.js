function serviceImage(userSearch) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '43457723-16bfd608d3311c06907a5c683',
    q: userSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { serviceImage };
