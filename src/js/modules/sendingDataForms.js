import { clearInputs } from '../helpers/clearInputs'
import { postData } from '../helpers/postData'

const sendingDataForms = () => {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      const textMessage = form.querySelector('.send-message')
      
      try {
        const formData = new FormData(form)
        const {  message, result } = await postData('./../files/server.php', formData)
        
        textMessage.style.display = 'block'
        textMessage.innerText = 'Sending...'

        if (result === 'success') {
          console.log(message);
          textMessage.innerText = message
        } else {
          console.log(message);
          textMessage.innerText = message
        }
        
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        clearInputs(form.querySelectorAll('input'))
        setTimeout(() => {
          textMessage.style.display = 'none'
          textMessage.innerText = ''
        }, 5000)
      }
    })
  })
}

export { sendingDataForms }
