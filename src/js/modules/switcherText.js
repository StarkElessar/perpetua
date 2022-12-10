const switcherText = () => {
  const switchTextForm = document.querySelector('[data-form="switchText"]')
  const textData = {
    journey: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore obcaecati cupiditate provident consectetur molestiae ea deleniti sed non vero possimus voluptates error iusto explicabo, exercitationem eum facere quod, fuga sit.',
    few: 'Sdipisicing elit. Tempore obcaecati cupiditate provident consectetur molestiae ea deleniti sed non vero possimus voluptates error iusto explicabo, exercitationem eum facere quod, fuga sit.',
    unexpected: 'Dolor sit amet consectetur, adipisicing elit. Tempore obcaecati cupiditate provident consectetur molestiae ea deleniti sed non vero possimus voluptates error iusto explicabo, exercitationem eum facere quod, fuga sit.',
    owner: 'Voluptates error iusto explicabo, exercitationem eum facere quod, fuga sit.',
    investor: 'Possimus voluptates error iusto explicabo, exercitationem eum facere quod, fuga sit.',
  }

  if (switchTextForm) {
    const switcher = () => {
      const category = switchTextForm.querySelector('input[name="switch"]:checked').value
      switchTextForm.querySelector('.capsule__content').innerText = textData[category]
    }

    switcher()

    switchTextForm.querySelectorAll('input[type="radio"]').forEach((inputRadio) => {
      inputRadio.addEventListener('input', switcher)
    })
  }
}

export default switcherText