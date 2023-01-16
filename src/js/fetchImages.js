import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const key = '32812344-7b97d09a2c2134941397ef385';

export async function getImages(userInput, page) {
  const searchParams = new URLSearchParams({
    per_page: 40,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page
  });
  
  const response = await axios.get(`${BASE_URL}?key=${key}&q=${userInput}&${searchParams}`);
  const images = await response.data;
  return images;
}

