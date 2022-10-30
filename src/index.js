import './style.css';
import { display } from './modules/displayfood.js';
import { font } from './modules/footer.js';
import { foodApiObj } from './modules/APIs.js';

const itemCounter = document.querySelector('.item_count');

itemCounter.innerHTML = `Total Items:${foodApiObj.length}`;
display();
font();