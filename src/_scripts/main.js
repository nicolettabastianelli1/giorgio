// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
// import './jquery-global.js';;

import { HeaderMenu } from '../_modules/header/header';

let menu = document.getElementsByClassName('j-menu');
if (menu.length > 0) {
  for (var i = 0; i < menu.length; i++) {
    new HeaderMenu (menu[i])
  }
}