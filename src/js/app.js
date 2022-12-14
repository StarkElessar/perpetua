import fullpage from 'fullpage.js'

import { isWebp } from './modules'

import { toggleSidebarButton, sidebar, dataCollectionLink, dataExtractionLink } from './helpers/elementsNodeList'
import { deleteActiveClassName } from './helpers/deleteActiveClassName'
import { round } from './helpers/round'


import setAdaptiveVideo from './modules/setAdaptiveVideo'

import { toggleSidebarMenu } from './modules/toggleSidebarMenu'
import { toggleAnimation } from './modules/toggleAnimation'
import { sendingDataForms } from './modules/sendingDataForms'
import switcherText from './modules/switcherText'
import {accordion} from './modules/accordion'
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
window.addEventListener('resize', () => {
  setAdaptiveVideo
  location.reload()
})
document.addEventListener('DOMContentLoaded', () => {
  setAdaptiveVideo()
  
  const startTimerPageLoaded = Date.now()
  const audio = new Audio('/files/audio/background-sound.mp3')
  let isPlay = false

  const soundStartButton = document.querySelector('.start-sound')

  if (soundStartButton) {
    soundStartButton.addEventListener('click', () => {
      const timeClick = (Date.now() - startTimerPageLoaded) / 1000
  
      isPlay = !isPlay
  
      audio.currentTime = timeClick
      audio.play()
  
      soundStartButton.classList.toggle('_on')
  
      if (!isPlay) {
        console.log('Звук играет')
        audio.volume = 0
      } else {
        audio.volume = 1
        console.log('Звук не играет')
      }
  
      audio.addEventListener('timeupdate', () => {
        if(round(audio.currentTime) === 195) audio.currentTime = 0
      })
    })
  }

  if (document.getElementById('fullpage')) {
    new fullpage('#fullpage', {
      anchors: ['scene__1','scene__2','scene__3','scene__4','scene__5','scene__6','scene__7','scene__8',],
      menu: '#navigation',
      animateAnchor: false,
      css3: true, 
      scrollingSpeed: 1500,
      slidesNavPosition: 'bottom',
      lazyLoading: true,
      sectionSelector: '.section',
      observer: true,
      licenseKey: 'KH50H-8SVN7-KQ07H-MJ62I-MDXUO',
      afterLoad(origin, destination, direction, trigger) {
        if (trigger === 'menu') {
          sidebar.classList.remove('active')
        }
  
        deleteActiveClassName('.box-text', 'active')
  
        if (destination.anchor === 'scene__4') {
          const video = destination.item.querySelector('video')
  
          video.style.opacity = 1
  
          video.addEventListener('timeupdate', ({ target }) => {
            toggleAnimation('spaceVideo', round(target.currentTime), fullpage_api)
          })
        }
        if (destination.anchor === 'scene__5') {
          const video = destination.item.querySelector('video')
  
          video.addEventListener('timeupdate', ({ target }) => {
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
          
          video.style.opacity = 0
        }
        if (origin.anchor === 'scene__5') {
          if (destination.anchor === 'scene__4') {
            const video = destination.item.querySelector('video')
  
            video.currentTime = 0
          }
        }
      }
    })
  }

  if (sidebar) {
    sidebar.addEventListener('click', ({ target }) => {
      sidebar.classList.remove('active')
      
      const videoScene4 = document.querySelector('[data-scene-4]')
  
      if (target.hasAttribute('data-link-collection')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene4.currentTime = 2
        videoScene4.play()
      }
      if (target.hasAttribute('data-link-extraction')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene4.currentTime = 11
        videoScene4.play()
      }
      if (target.hasAttribute('data-link-conversion')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene4.currentTime = 18
        videoScene4.play()
      }
      const videoScene5 = document.querySelector('[data-scene-5]')
      if (target.hasAttribute('data-link-creation')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene5.currentTime = 1
        videoScene5.play()
      }
      if (target.hasAttribute('data-link-generation')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene5.currentTime = 8
        videoScene5.play()
      }
      if (target.hasAttribute('data-link-spiral')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene5.currentTime = 14
        videoScene5.play()
      }
      if (target.hasAttribute('data-link-installation')) {
        deleteActiveClassName('.box-text', 'active')
  
        videoScene5.currentTime = 23
        videoScene5.play()
      }
    })
  }

  
  sendingDataForms()
  switcherText()
  accordion()
})