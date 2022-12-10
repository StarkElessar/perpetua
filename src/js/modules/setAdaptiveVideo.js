const setAdaptiveVideo = () => {
  const tagsVideo = document.querySelectorAll('[data-video]')

  if (tagsVideo) {
    tagsVideo.forEach((video) => {
      if (video.dataset.video === 'scene-1') {
        changeVideoFormating(video)
      } else if (video.dataset.video === 'scene-4') {
        changeVideoFormating(video)
      } else {
        changeVideoFormating(video)
      }
    })
  }
}

const changeVideoFormating = (parentVideNode) => {
  const videoChildrens = parentVideNode.querySelectorAll('source')

  videoChildrens.forEach((children) => {
    if (window.innerWidth > 500) {
      children.type === 'video/webm'
        ? children.setAttribute('data-src', `files/video/${parentVideNode.dataset.video}.webm`)
        : children.setAttribute('data-src', `files/video/${parentVideNode.dataset.video}.mp4`)
    } else {
      children.type === 'video/webm'
        ? children.setAttribute('data-src', `files/video/mobile/${parentVideNode.dataset.video}.webm`)
        : children.setAttribute('data-src', `files/video/mobile/${parentVideNode.dataset.video}.mp4`)
    }
  })
}

export default setAdaptiveVideo