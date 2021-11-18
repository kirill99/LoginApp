function getContainer(){
    return document.querySelector('.notify-container');
}

function alertTemplate(msg, className, index) {
    return `
        <div class="notify-container__alert ${className}" data-index="${index}">
            ${msg}
        </div>
    `;
}

function notifyContainerTemplate() {
    return `
        <div class="notify-container" style="position:fixed; top:10px; z-index:999;"></div>
    `;
}

function createNotifyContainer() {
    const template = notifyContainerTemplate();
    document.body.insertAdjacentHTML('afterbegin', template);
}

function getAlertIndex() {
    return document.querySelectorAll('.notify-container .notify-container__alert').length;
}

export function notify( { msg, className, timeOut = 2000 } = {} ) {
    if (!getContainer()){
        createNotifyContainer();
    }

    const index = getAlertIndex();
    const template = alertTemplate(msg, className, index);
    const container = getContainer();
    
    container.insertAdjacentHTML('beforeend', template);
    setTimeout(()=>closeNotify(index), timeOut);
}

export function closeNotify(index) {
    let alert;

    if (index === undefined) {
        alert = document.querySelector('.notify-container__alert');

    }else{
        alert = document.querySelector(`.notify-container .notify-container__alert[data-index="${index}"]`);
    }

    if(!alert){
        console.warn('Alert not found');
        return;
    }

    const container = getContainer();
    container.removeChild(alert);
} 