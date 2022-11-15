// import './libs/fullpage/scrolloverflow.min'
// import './libs/fullpage/jquery.easings.min'
// import './libs/fullpage/jquery.fullPage.min'

import $ from 'jquery'
import fullpage from 'fullpage.js'

import { isWebp, headerFixed } from './modules'
import { scenaFour } from './modules/scenaFour'
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

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================
document.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
    menu: '#navigation',
    css3: true,
    scrollingSpeed: 1000,
    slidesNavPosition: 'bottom',
    lazyLoading: true,
    sectionSelector: '.section',
    observer: true,
    licenseKey: 'KH50H-8SVN7-KQ07H-MJ62I-MDXUO',
    afterLoad(origin, destination, direction, trigger) {
      console.log(destination.item.classList.contains('scene__4'))
      if (destination.item.classList.contains('scene__4')) {
        const scene4 = destination.item
        const box1 = scene4.querySelector('.box-1')

        setTimeout(() => {
          box1.classList.add('active')
        }, 5000)
        setTimeout(() => {
          box1.classList.remove('active')
        }, 10000)
      }
    },
  })

  if ($('.section').hasClass('active')) {
    $('.section.active video').currentTime = 0
  }
  $('.burger__menu').click(function () {
    if ($('.navmenu').hasClass('active')) {
      $('.navmenu').removeClass('active')
    } else {
      $('.navmenu').addClass('active')
    }
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
