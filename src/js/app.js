import fullpage from 'fullpage.js'

import { isWebp } from './modules'
import { delay } from './helpers/delay'
import { scenaFour } from './modules/scenaFour'
import { deleteActiveClassName } from './helpers/deleteActiveClassName'
import { toggleSidebarMenu } from './modules/toggleSidebarMenu'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================
toggleSidebarMenu()
// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================
document.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
    menu: '#navigation',
    css3: true,
    scrollingSpeed: 1500,
    slidesNavPosition: 'bottom',
    lazyLoading: true,
    sectionSelector: '.section',
    observer: true,
    licenseKey: 'KH50H-8SVN7-KQ07H-MJ62I-MDXUO',
    afterLoad(origin, destination, direction, trigger) {
      console.log(destination.item)

      if (destination.item.classList.contains('scene__4')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')

        deleteActiveClassName('.box-text', 'active')

        delay(1000).then(() => box1.classList.add('active'))
        delay(10000).then(() => box1.classList.remove('active'))

        delay(11000).then(() => box2.classList.add('active'))
        delay(17000).then(() => box2.classList.remove('active'))

        delay(18000).then(() => box3.classList.add('active'))
        delay(23500).then(() => box3.classList.remove('active'))
      }
      if (destination.item.classList.contains('scene__5')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')
        const box4 = destination.item.querySelector('.box-4')

        deleteActiveClassName('.box-text', 'active')
        
        delay(1000).then(() => box1.classList.add('active'))
        delay(7000).then(() => box1.classList.remove('active'))
        
        delay(7500).then(() => box2.classList.add('active'))
        delay(13000).then(() => box2.classList.remove('active'))
        
        delay(13500).then(() => box3.classList.add('active'))
        delay(20500).then(() => box3.classList.remove('active'))
        
        delay(23000).then(() => box4.classList.remove('active'))
      }
    },
  })

  const videos = document.querySelectorAll('video')
  const options = { root: document.body }
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const video = entry.target

      if (entry.isIntersecting) {
        video.currentTime = 0

        console.log(video.currentTime);
      }
    })
  }

  const sectionObserver = new IntersectionObserver(callback, options)
  videos.forEach((videos) => sectionObserver.observe(videos))

  scenaFour()
})
