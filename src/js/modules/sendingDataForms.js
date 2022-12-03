import { clearInputs } from '../helpers/clearInputs'
import { postData } from '../helpers/postData'

const sendingDataForms = () => {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      
      try {
        const formData = new FormData(form)
        const {  message, result } = await postData('./../files/mailPostNotify.php', formData)

        if (result === 'success') {
          console.log(message);
        } else {
          console.log(message);
        }
        
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        clearInputs(form.querySelectorAll('input'))
      }
    })
  })
}

export { sendingDataForms }
