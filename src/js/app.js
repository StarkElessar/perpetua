import $ from 'jquery'
import fullpage from 'fullpage.js'

import { isWebp, headerFixed } from './modules'
import { delay } from './helpers/delay'
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
    scrollingSpeed: 1500,
    slidesNavPosition: 'bottom',
    lazyLoading: true,
    sectionSelector: '.section',
    observer: true,
    licenseKey: 'KH50H-8SVN7-KQ07H-MJ62I-MDXUO',
    afterLoad(origin, destination, direction, trigger) {
      console.log(destination.item.classList.contains('scene__4'))
      if (destination.item.classList.contains('scene__4')) {
        const box1 = destination.item.querySelector('.box-1')
        const box2 = destination.item.querySelector('.box-2')
        const box3 = destination.item.querySelector('.box-3')

        delay(1000).then(() => box1.classList.add('active'))
        delay(10000).then(() => box1.classList.remove('active'))

        delay(11000).then(() => box2.classList.add('active'))
        delay(17000).then(() => box2.classList.remove('active'))

        delay(18000).then(() => box3.classList.add('active'))
        delay(23500).then(() => box3.classList.remove('active'))
      }
      if (destination.item.classList.contains('scene__5')) {
        const scene5 = destination.item
        let box1 = scene5.querySelector('.box-1')
        let box2 = scene5.querySelector('.box-2')
        let box3 = scene5.querySelector('.box-3')
        let box4 = scene5.querySelector('.box-4')
        box4.classList.remove('active')
        setTimeout(() => {
          box1.classList.add('active')
        }, 1000)
        setTimeout(() => {
          box1.classList.remove('active')
        }, 7000)
        setTimeout(() => {
          box2.classList.add('active')
        }, 7500)
        setTimeout(() => {
          box2.classList.remove('active')
        }, 13000)
        setTimeout(() => {
          box3.classList.add('active')
        }, 13500)
        setTimeout(() => {
          box3.classList.remove('active')
        }, 20500)
        setTimeout(() => {
          box4.classList.add('active')
        }, 23000)
        // setTimeout(() => {
        //   box4.classList.remove('active')
        // }, 28000)
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
