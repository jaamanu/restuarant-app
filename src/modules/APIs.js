// import { foods } from './food.js';

// const commentkey = 'HJ3nJrQxKFWMKnh6RtwV';
// const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentkey}/comments`;
// // const  = `${commentApi}/apps/${commentkey}/comments/`;

// const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const likeKey = 'HJ3nJrQxKFWMKnh6RtwV';
// const likeUrl = `${likeApi}/apps/:${likeKey}/likes/`;

// const foodApi = 'https://themealdb.com/api/json/v1/1/search.php?s';

// const foodApiObj = [];

// foods.forEach((food) => {
//   foodApiObj.push(`${foodApi}=${food}`);
// });

// export { commentUrl, likeUrl, foodApiObj };

const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b832b7cec8msh2f8d48dcae2c16ep1206eejsne9f8b9be1053',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20', options);
  return response;
};

export default getMenuList;