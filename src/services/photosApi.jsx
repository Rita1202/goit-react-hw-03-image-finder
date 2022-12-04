const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30799425-c4e9026dcaafc7c45135155af';

export function fetchFunction(query, page) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
