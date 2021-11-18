import '../style/style.css'
import UI from './config/ui.config'
import { validate } from './helpers/validate.helper'
import { showInputError, removeInputError } from './views/form.view'
import { login } from './services/auth.service';
import { notify } from './views/notification.view';
import { getNews } from './services/news.service';


const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
})

inputs.forEach( el => el.addEventListener('focus', ()=>{
    removeInputError(el);
}))

// handlers
async function onSubmit() {
    const isValidForm = inputs.every( (el) => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    })

    if (!isValidForm) return;
    
    try {
        await login(inputEmail.value, inputPassword.value);
        await getNews();
        form.reset();
        // show success notify
        notify({msg:'Login Success', className:'notify-container__alert--success'})
    }
    catch(err) {
        // show error notify
        notify({msg:'Login Success', className:'notify-container__alert--error'})

    }
}