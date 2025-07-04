import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

export default function useSmoothScroll(target) {
  const locoScroll = new LocomotiveScroll({ el: document.querySelector(target), smooth: true })
  locoScroll.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(target, {
    scrollTop(value) { return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y },
    getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight } },
    pinType: document.querySelector(target).style.transform ? 'transform':'fixed'
  })
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
  return { locoScroll }
}
