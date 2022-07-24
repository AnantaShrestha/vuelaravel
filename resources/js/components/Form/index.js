import FormHandling from './core/formHandling'
window.FormHandling =new FormHandling()
import FormData from './core/formData'
window.FormData = new FormData()
// import Error from './core/errorHandling'
// window.Error = new Error()
export {default as Form} from './form'
export {default as Button} from './button'
export {default as TextField } from './textField';