'use strict';
export class ToggleColor {
    constructor(el) {
        this.el = el;
        el.addEventListener('click', () => {
            if (el.checked == true) {
                sessionStorage.setItem('isWhite', true);
                document.body.classList.add('change-color');
            } else {
                document.body.classList.remove('change-color');
                sessionStorage.setItem('isWhite', false);
            }
        });

        if (sessionStorage.getItem('isWhite') == 'false') {
            document.body.classList.remove('change-color');
        }
        else if(sessionStorage.getItem('isWhite') == 'true') {
            document.body.classList.add('change-color');
            this.el.checked = true

        }

    }

}
