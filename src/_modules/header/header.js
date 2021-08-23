'use strict';
export class HeaderMenu {
    constructor(el) {
        this.el = el;
        var iconMenu = this.el.querySelector('.j-openMenu');
        iconMenu.addEventListener('click', () => {
            el.classList.toggle("headerNav--open");
        })
}

}
