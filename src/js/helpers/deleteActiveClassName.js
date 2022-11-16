const deleteActiveClassName = (selector, className) => {
  const items = document.querySelectorAll(selector)

  items.forEach((item) => item.classList.remove(className))
} 

export { deleteActiveClassName }