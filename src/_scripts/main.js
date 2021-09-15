// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
// import './jquery-global.js';;

// import { HeaderMenu } from '../_modules/header/header';
import { ToggleColor } from '../_modules/toggleColor/toggleColor';

// let menu = document.getElementsByClassName('j-menu');
// if (menu.length > 0) {
//   for (var i = 0; i < menu.length; i++) {
//     new HeaderMenu (menu[i])
//   }
// }

let toggleColor = document.getElementsByClassName('j-toggleColor');
if (toggleColor.length > 0) {
  for (var i = 0; i < toggleColor.length; i++) {
    new ToggleColor (toggleColor[i])
  }
}