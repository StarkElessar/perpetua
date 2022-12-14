class VideoResponser {
  constructor(selector) {
    const $video = document.querySelector(selector)
    this.options = {
      selector,
      breakpoints: {
        default: { src: $video.getAttribute('data-src') }
      },
    }

    // get a list of video switching points and links to the videos themselves
    $video.querySelectorAll('[data-src]').forEach((element) => {
      this.options.breakpoints[element.getAttribute('data-mw')] = {
        src: element.getAttribute('data-src'),
      }
    })
    $video.innerHTML = '' // we clean up so that there is nothing superfluous

    // run the handler and track the change in screen width
    this.responseVideo(this.options)
    this.resizer()
  }

  /** Function runs on resize  */
  resizer() {
    window.addEventListener('resize', () => this.responseVideo(this.options))
  }

  responseVideo(options) {
    const { selector, breakpoints } = options // get options
    console.log(options);
    const $video = document.querySelector(selector)
    const widthNow = $video.getAttribute('data-width-now') || null
    console.log(widthNow);
    const maxBreakpoint = Math.max( ...Object.keys(breakpoints).filter((key) => key <= document.body.clientWidth))
    console.log(maxBreakpoint);

    const nowBreakpoint = maxBreakpoint || 'default';

    if(widthNow && widthNow == nowBreakpoint) return;

    $video.setAttribute('data-width-now', nowBreakpoint)
    $video.src = breakpoints[nowBreakpoint].src
  }
}

export default VideoResponser