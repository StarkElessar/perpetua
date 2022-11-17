import { toggleSidebarButton, sidebar } from '../helpers/elementsNodeList'

const toggleAnimation = (time) => {
  const timeToActionMapping = {
    '11.9': () => toggleSidebarButton.classList.add('_show-burger'),
    '13': () => sidebar.classList.add('active'),
  }

  return timeToActionMapping[time]?.()
}

export { toggleAnimation }