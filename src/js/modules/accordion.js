const accordion = () => {
  const accordionItems = document.querySelectorAll('.accordion__item')
  const accordionContainer = document.querySelector('.accordion')

  if (accordionContainer) {
    accordionItems.forEach((item, index) => {
      const header = item.querySelector('.accordion__header')
      const content = item.querySelector('.accordion__content')
  
      if (item.hasAttribute('data-open')) {
        item.classList.add('open')
        content.style.height = `${content.scrollHeight}px`
      }
  
      header.addEventListener('click', () => {
        item.classList.toggle('open')
        if (item.classList.contains('open')) {
          content.style.height = `${content.scrollHeight}px`
        } else {
          content.style.height = 0
        }
  
        if (accordionContainer.dataset.autoClosing === 'true') {
          removeOpen(index)
        }
      })
    })

    function removeOpen(i) {
      accordionItems.forEach((item, index) => {
        if (i !== index) {
          item.classList.remove('open')
          item.querySelector('.accordion__content').style.height = 0
        }
      })
    }
  }
}

export { accordion }
