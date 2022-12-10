const switcherText = () => {
  const switchTextForm = document.querySelector('[data-form="switchText"]')
  const textData = {

  }

  if (switchTextForm) {
    const switcher = () => {
      const category = switchTextForm.querySelector('input[type="radio"]:checked').value
    }

    switcher()

    switchTextForm.querySelectorAll('input[type="radio"]').forEach((inputRadio) => {
      inputRadio.addEventListener('input', switcher)
    })
  }
}

export default switcherText