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
      8: () => boxCollection.classList.add('active'),
      16: () => boxCollection.classList.remove('active'),
      17: () => boxSignature.classList.add('active'),
      23: () => boxSignature.classList.remove('active'),
      25: () => boxConversion.classList.add('active'),
      30: () => boxConversion.classList.remove('active'),
      31: () => api.moveTo(4),
    },
    maskVideo: {
      1: () => boxAsset.classList.add('active'),
      7: () => boxAsset.classList.remove('active'),
      8: () => boxGeneration.classList.add('active'),
      13: () => boxGeneration.classList.remove('active'),
      14: () => boxSpiral.classList.add('active'),
      20: () => boxSpiral.classList.remove('active'),
      23: () => boxCapsule.classList.add('active'),
    },
  }

  return timeToActionMapping[video][time]?.()
}

export { toggleAnimation }
