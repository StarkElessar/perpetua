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
  const toggleSidebarButton = document.querySelector('.burger__menu')
  const sidebar = document.querySelector('.navmenu')

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

      if (video) video.currentTime = 0

      if (destination.item.classList.contains('scene__1')) {
        const video = destination.item.querySelector('video')

        video.addEventListener('timeupdate', () => { 
          console.log(Math.round(video.currentTime));

          if (Math.round(video.currentTime) === 12) {
            toggleSidebarButton.classList.add('_show-burger')
          } 
          if (Math.round(video.currentTime) === 13) {
            sidebar.classList.add('active')
          } 
        })
      }

      if (destination.item.classList.contains('scene__4')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')
        const video = destination.item.querySelector('video')

        deleteActiveClassName('.box-text', 'active')

        video.addEventListener('timeupdate', () => {
          console.log(Math.round(video.currentTime));
          if (Math.round(video.currentTime) === 2) {
            box1.classList.add('active')
          }
          if (Math.round(video.currentTime) === 10) {
            box1.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 11) {
            box2.classList.add('active')
          }
          if (Math.round(video.currentTime) === 17) {
            box2.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 18) {
            box3.classList.add('active')
          }
          if (Math.round(video.currentTime) === 23) {
            box3.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 25) {
            fullpage_api.moveSectionDown();
          }
        })
      }
      if (destination.item.classList.contains('scene__5')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')
        const box4 = destination.item.querySelector('.box-4')
        const video = destination.item.querySelector('video')

        deleteActiveClassName('.box-text', 'active')

        video.addEventListener('timeupdate', () => {
          if (Math.round(video.currentTime) === 1) {
            box1.classList.add('active')
          }
          if (Math.round(video.currentTime) === 7) {
            box1.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 8) {
            box2.classList.add('active')
          }
          if (Math.round(video.currentTime) === 13) {
            box2.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 14) {
            box3.classList.add('active')
          }
          if (Math.round(video.currentTime) === 20) {
            box3.classList.remove('active')
          }
          if (Math.round(video.currentTime) === 23) {
            box4.classList.add('active')
          }
        })
      }
    },
    onLeave(origin, destination, direction) {
      if (origin.anchor === 'scene__1') {
        if (sidebar.classList.contains('active')) {
          sidebar.classList.remove('active')
        }
      }
    },
  })
})
