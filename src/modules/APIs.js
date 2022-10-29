import { foods } from './food';

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const commentkey = 'IFeK7l7PraSs0mqfUMV';
const commentUrl = `${commentApi}/apps/:${commentkey}/comments/`;

const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const likeKey = 'ahggGFtfjsuJHUTHhfyFHJ';
const likeUrl = `${likeApi}/apps/:${likeKey}/likes/`;

const foodApi = 'https://themealdb.com/api/json/v1/1/search.php?s';

const foodApiObj = [];

foods.forEach((food) => {
  foodApiObj.push(`${foodApi}=${food}`);
});

export { commentUrl, likeUrl, foodApiObj };