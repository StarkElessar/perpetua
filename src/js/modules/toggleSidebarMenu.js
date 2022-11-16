const toggleSidebarMenu = () => {
  const toggleSidebarButton = document.querySelector('.burger__menu')
  const sidebar = document.querySelector('.navmenu')

  toggleSidebarButton.onclick = () => sidebar.classList.toggle('active')
}

export { toggleSidebarMenu }
