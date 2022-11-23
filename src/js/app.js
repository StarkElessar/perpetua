import fullpage from 'fullpage.js'

import { isWebp } from './modules'

import { toggleSidebarButton, sidebar } from './helpers/elementsNodeList'
import { deleteActiveClassName } from './helpers/deleteActiveClassName'
import { round } from './helpers/round'

import { toggleSidebarMenu } from './modules/toggleSidebarMenu'
import { toggleAnimation } from './modules/toggleAnimation'

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
      const video = destination.item.querySelector('video') || null

      if (video) video.currentTime = 0

      deleteActiveClassName('.box-text', 'active')

      if (destination.anchor === 'scene__4') {
        const video = destination.item.querySelector('video')
        const articleText = destination.item.querySelector('.article-block')

        articleText.style.opacity = 1
        video.style.opacity = 1

        video.addEventListener('timeupdate', ({ target }) => {
          console.log(round(target.currentTime));

          toggleAnimation('spaceVideo', round(target.currentTime), fullpage_api)
        })
      }
      if (destination.anchor === 'scene__5') {
        const video = destination.item.querySelector('video')

        video.addEventListener('timeupdate', ({ target }) => {
          console.log(round(target.currentTime));

          toggleAnimation('maskVideo', round(target.currentTime))
        })
      }
    },
    onLeave(origin, destination, direction) {
      if (origin.anchor === 'scene__1') {
        if (!toggleSidebarButton.classList.contains('_show-burger')) {
          toggleSidebarButton.classList.add('_show-burger')
        }
      }
      if (origin.anchor === 'scene__4') {
        const video = origin.item.querySelector('video')
        const articleText = origin.item.querySelector('.article-block')
        
        video.style.opacity = 0
        articleText.style.opacity = 0
      }
    },
  })
})
