const scenaFour = () => {
  const scena = document.querySelector('.scene__3')

  const callback = ([entry]) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
        console.log(entry);
    }
  }

  const scenaObserver = new IntersectionObserver(callback)

  scenaObserver.observe(scena)

  window.onscroll = (e) => {
    console.log('sdads');
  }
}

export { scenaFour }
