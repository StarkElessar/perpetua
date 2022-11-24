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
      12: () => boxCollection.classList.add('active'),
      20: () => boxCollection.classList.remove('active'),
      21: () => boxSignature.classList.add('active'),
      27: () => boxSignature.classList.remove('active'),
      29: () => boxConversion.classList.add('active'),
      34: () => boxConversion.classList.remove('active'),
      36: () => api.moveTo(4),
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
