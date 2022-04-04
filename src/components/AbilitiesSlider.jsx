import { useEffect, useRef, useState } from "react";

const img1 = require("../static/img/slides/1.png");
const img2 = require("../static/img/slides/2.png");
const img3 = require("../static/img/slides/3.png");
const img4 = require("../static/img/slides/4.png");
const img5 = require("../static/img/slides/5.png");
const img6 = require("../static/img/slides/6.png");
const img7 = require("../static/img/slides/7.png");
const img8 = require("../static/img/slides/8.png");
const img9 = require("../static/img/slides/9.png");
const img10 = require("../static/img/slides/10.png");
const img0 = require("../static/img/slides/0.png");


export const AbilitiesSlider = () => {
  const slides = [
    {
      title: 'Social Media Content',
      description: 'Direct listeners to your Social Media',
      src: img0,
    },
    {
      title: 'Radio Player',
      description: 'Player for your Online Radio with track details and Cover Art display',
      src: img1
    },
    {
      title: 'Custom Design',
      description: 'Build a unique App with your own logo, graphics and theme.',
      src: img2
    },
    {
      title: 'Live TV/Video Player',
      description: 'Play Live TV/Video stream in the in-bulit player.',
      src: img3
    },
    {
      title: 'Facebook',
      description: 'Display the social media profile of your Radio Station',
      src: img4
    },
    {
      title: 'Social Media Content',
      description: 'Direct listeners to your Social Media',
      src: img5
    },
    {
      title: 'YouTube',
      description: 'Link up your Social Media channels like YouTube',
      src: img6
    },
    {
      title: 'Your Website',
      description: 'Present your own Website within the App in WebView',
      src: img7
    },
    {
      title: 'Ads & Monetization',
      description: 'Display interstitial and banner Ads from your AdMob account.',
      src: img8
    },
    {
      title: 'Background Mode',
      description: 'App optimized for Listening while using other Apps.',
      src: img9
    },
    {
      title: 'Push Notifications',
      description: 'Send Push Notifications to App users.',
      src: img10
    },
  ]

  const ref = useRef(null);

  const [selectedSlide, selectSlide] = useState(0);

  const selectNextSlide = () => {
    if(selectedSlide === slides.length - 1) {
      selectSlide(0)
      return
    }
    selectSlide(prev => prev + 1)
  }

  const selectPrevSlide = () => {
    if(selectedSlide === 0) {
      selectSlide(slides.length - 1)
      return
    }

    selectSlide(prev => prev - 1)
  }

  useEffect(() => {
    ref.current.scroll({
      left: document.getElementById(selectedSlide).offsetLeft,
      behavior: 'smooth',
    })
  }, [selectedSlide])

  return (
    <div className="abilities-slider">
      <div className="abilities-slider__controlls">
        <h3 className="abilities-slider__slide-title">
          {slides[selectedSlide].title}
        </h3>
        <p className="abilities-slider__slide-description">
          {slides[selectedSlide].description}
        </p>
        <div className="abilities-slider__controll-buttons">
          <button onClick={selectPrevSlide} className="button">{"< Prev"}</button>
          <button onClick={selectNextSlide} className="button">{"Next >"}</button>
        </div>
      </div>
      <div className="abilities-slider__slider-container">
        <img src={require("../static/img/icons/mobilePhoneBorder.png")} alt="" className="abilities-slider__mobile-border" />
        <div ref={ref} className="abilities-slider__slider">
          {slides.map((slide, index) => (
            <img id={index} src={slide.src} alt="" className="abilities-slider__slide" />
          ))}
        </div>
      </div>
    </div>
  )
}