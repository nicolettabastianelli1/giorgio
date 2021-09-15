'use strict';
export class ToggleColor {
    constructor(el) {
        this.el = el;
        el.addEventListener('click', () => {
            if (el.checked == true) {
                document.body.classList.add('change-color');
            } else {
                document.body.classList.remove('change-color');
            }
            sessionStorage.setItem('isWhite', el.checked == true);
        });
       
        //sessionStorage.getItem('repeatVideoNumber')
    }

}
