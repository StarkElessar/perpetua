import {
  boxCollection,
  boxConversion,
  boxSignature,
  boxAsset,
  boxGeneration,
  boxSpiral,
  boxCapsule,
} from '../helpers/elementsNodeList'

const toggleAnimation = (video, time, api = null) => {
  const timeToActionMapping = {
    spaceVideo: {
      2: () => boxCollection.classList.add('active'),
      10: () => boxCollection.classList.remove('active'),
      11: () => boxSignature.classList.add('active'),
      17: () => boxSignature.classList.remove('active'),
      18: () => boxConversion.classList.add('active'),
      23: () => boxConversion.classList.remove('active'),
      24: () => api.moveTo(5),
    },
    maskVideo: {
      1: () => boxAsset.classList.add('active'),
      7: () => boxAsset.classList.remove('active'),
      8: () => boxGeneration.classList.add('active'),
      12: () => boxGeneration.classList.remove('active'),
      14: () => boxSpiral.classList.add('active'),
      20: () => boxSpiral.classList.remove('active'),
      23: () => boxCapsule.classList.add('active'),
    },
  }

  return timeToActionMapping[video][time]?.()
}

export { toggleAnimation }
