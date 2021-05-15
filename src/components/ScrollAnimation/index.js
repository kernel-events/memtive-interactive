import React from 'react'

import Lottie from 'lottie-web'

import gsap from 'gsap'

import { ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin)

class ScrollAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.anim = null
    this.uniqueId = 'element_' + this.guidGenerator()
  }

  componentDidMount() {
    this.startAnimation()
  }

  __getScrollArea() {
    return (this.props.scrollArea)? '+=' + this.props.scrollArea : '+=1000'
  }

  guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    )
  }

  startAnimation() {
    this.anim = Lottie.loadAnimation({
      container: this.ref.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: URL.createObjectURL(
        new Blob([JSON.stringify(this.props.data)], {
          type: 'application/json',
        })
      ),
    })

    ScrollTrigger.create({
      trigger: '#' + this.uniqueId,
      scrub: true,
      pin: true,
      start: 'top top',
      end: this.__getScrollArea(),
      onUpdate: (self) => {
        this.anim.goToAndStop(self.progress * (this.anim.totalFrames - 1), true)
      },
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          ref={this.ref}
          id={this.uniqueId}
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>
    )
  }
}

export default ScrollAnimation
