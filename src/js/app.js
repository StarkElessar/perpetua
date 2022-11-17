import fullpage from 'fullpage.js'

import { isWebp } from './modules'

import { toggleSidebarButton, sidebar } from './helpers/elementsNodeList'
import { deleteActiveClassName } from './helpers/deleteActiveClassName'
import { floorNumbers } from './helpers/floorNumbers'

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
  const pageLoadedStartTime = Date.now()

  document.querySelector('.mute-sound').onclick = () => {
    const audio = new Audio('https://starkelessar.github.io/perpetua/files/audio/background-sound.mp3')
    const timeClick = (Date.now() - pageLoadedStartTime) / 1000

    audio.currentTime = timeClick
    audio.play()
  }

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

      if (destination.item.classList.contains('scene__1')) {
        const video = destination.item.querySelector('video')

        video.addEventListener('timeupdate', ({ target }) => {
          toggleAnimation(floorNumbers(target.currentTime))
          toggleAnimation(floorNumbers(target.currentTime))
        })
      }

      if (destination.item.classList.contains('scene__4')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')
        const video = destination.item.querySelector('video')

        deleteActiveClassName('.box-text', 'active')

        video.addEventListener('timeupdate', () => {
          console.log(Math.round(video.currentTime))
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
            fullpage_api.moveTo(5)
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
        if (!toggleSidebarButton.classList.contains('_show-burger')) {
          toggleSidebarButton.classList.add('_show-burger')
        }
        if (sidebar.classList.contains('active')) {
          sidebar.classList.remove('active')
        }
      }
    },
  })
})
