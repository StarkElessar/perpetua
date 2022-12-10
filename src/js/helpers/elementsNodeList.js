const toggleSidebarButton = document.querySelector('.burger__menu')
const sidebar = document.querySelector('.navmenu')
const mainContainer = document.querySelector('.main')
const boxCollection = document.querySelector('[data-collection]')
const boxSignature = document.querySelector('[data-signature]')
const boxConversion = document.querySelector('[data-conversion]')
const boxAsset = document.querySelector('[data-asset]')
const boxGeneration = document.querySelector('[data-generation]')
const boxSpiral = document.querySelector('[data-spiral]')
const boxCapsule = document.querySelector('[data-capsule]')
const dataCollectionLink = sidebar?.querySelector('[data-link-collection]')
const dataExtractionLink = sidebar?.querySelector('[data-link-extraction]')
const dataConversionLink = sidebar?.querySelector('[data-link-conversion]')

export {
  toggleSidebarButton,
  sidebar,
  mainContainer,
  boxCollection,
  boxSignature,
  boxConversion,
  boxAsset,
  boxGeneration,
  boxSpiral,
  boxCapsule,
  dataCollectionLink,
  dataExtractionLink,
  dataConversionLink
}
