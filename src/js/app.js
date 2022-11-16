import fullpage from 'fullpage.js'

import { isWebp } from './modules'
import { delay } from './helpers/delay'
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
      console.log(origin)
      const video = destination.item.querySelector('video') || null

      if (video) {
        video.currentTime = 0
      }

      let timerScene4Box1In = null
      let timerScene4Box1Out = null
      let timerScene4Box2In = null
      let timerScene4Box2Out = null
      let timerScene4Box3In = null
      let timerScene4Box3Out = null

      if (destination.item.classList.contains('scene__4')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')

        deleteActiveClassName('.box-text', 'active')

        timerScene4Box1In = delay(1000).then(() => box1.classList.add('active'))
        timerScene4Box1Out = delay(10000).then(() => box1.classList.remove('active'))
        timerScene4Box2In = delay(11000).then(() => box2.classList.add('active'))
        timerScene4Box2Out = delay(17000).then(() => box2.classList.remove('active'))
        timerScene4Box3In = delay(18000).then(() => box3.classList.add('active'))
        timerScene4Box3Out = delay(23500).then(() => box3.classList.remove('active'))

        timerScene4Box1In
        timerScene4Box1Out
        timerScene4Box2In
        timerScene4Box2Out
        timerScene4Box3In
        timerScene4Box3Out
      }
      if (destination.item.classList.contains('scene__5')) {
        clearTimeout(timerScene4Box1In)
        clearTimeout(timerScene4Box1Out)
        clearTimeout(timerScene4Box2In)
        clearTimeout(timerScene4Box2Out)
        clearTimeout(timerScene4Box3In)
        clearTimeout(timerScene4Box3Out)

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
})
