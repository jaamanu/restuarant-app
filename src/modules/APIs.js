import { foods } from './food';

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const commentkey = 'jUTHHFhjhjmbJGYTMBJgyj';
const commentUrl = `${commentApi}/apps/:${commentkey}/comments/`;

const likeapi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const likekey = 'ahggGFtfjsuJHUTHhfyFHJ';
const likeurl = `${likeapi}/apps/:${likekey}/likes/`;

const foodApi = 'www.themealdb.com/api/json/v1/1/search.php?s';

const foodApiObj = [];

foods.forEach((food) => {
  foodApiObj.push(`${foodApi}=${food}`);
});

export { commentUrl, likeurl, foodApiObj };