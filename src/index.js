import './style.css';
import getMenuList from './modules/APIs.js';
import renderData from './modules/displayfood.js';

const loadFoodData = () => {
  getMenuList()
    .then((response) => response.json())
    .then((data) => renderData(data.results));
};

window.onload = loadFoodData();