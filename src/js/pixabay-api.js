import axios from 'axios';

const API_KEY = '51679229-dd2564c95deaf9a31a7294431';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

const DEFAULT_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
};

export async function getImagesByQuery(query, page = 1) {
  const params = { ...DEFAULT_PARAMS, q: String(query || '').trim(), page };
  const { data } = await axios.get(BASE_URL, { params });
  return data; 
};