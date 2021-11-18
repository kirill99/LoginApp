/**
 * 
 * @param {String} msg 
 */
function inputErrorTemplate(msg){
    const div = document.createElement('div');
    div.classList.add('invalid-feedback');
    div.innerText = msg;
    return div;
}


/**
 * 
 * @param {HTMLInputElement} el 
 */
export function showInputError(el) {
    const parent = el.parentElement;
    const msg = 'Invalid input';
    const template = inputErrorTemplate(msg);
    el.classList.add('is-invalid');
    parent.insertAdjacentElement('beforeend', template);
}

/**
 * 
 * @param {HTMLInputElement} el 
 */
export function removeInputError(el) {
    const parent = el.parentElement;

    const err = parent.querySelector('.invalid-feedback');
    if(!err) return ;

    el.classList.remove('is-invalid');
    parent.removeChild(err);
}