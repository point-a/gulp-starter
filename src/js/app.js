import sayHello from './sayHello.js';
import $ from 'jquery';


sayHello();


$(document).ready(() => {
  $('.content iframe').wrap('<div class="iframe__wrapper"></div>')
});