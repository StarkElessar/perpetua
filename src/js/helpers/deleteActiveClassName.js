const deleteActiveClassName = (selector, className) => {
  const items = document.querySelectorAll(selector)

  if (items.length) {
    items.forEach((item) => item.classList.remove(className))
  }
} 

export { deleteActiveClassName }