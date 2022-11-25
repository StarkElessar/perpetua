import { clearInputs } from '../helpers/clearInputs'
import { postData } from '../helpers/postData'

const sendingDataForms = () => {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      const formData = new FormData(form)

      event.preventDefault()

      for (const key of formData.keys()) {
        console.log(`${key}: ${formData.get(key)}`)
      }

      postData('./../files/mailPostNotify.php', formData)
        .then((result) => {
          alert("Thank's")
          console.log(result)
        })
        .catch((error) => {
          alert('Ошибка, попробуйте снова!', error)
        })
        .finally(() => {
          clearInputs(form.querySelectorAll('input'))
        })
    })
  })
}

export { sendingDataForms }
