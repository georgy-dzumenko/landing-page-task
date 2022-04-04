import { useEffect, useRef, useState } from "react";

export const AbilitiesSlider = () => {
  const slides = [
    {
      title: 'Social Media Content',
      description: 'Direct listeners to your Social Media',
      src: "../../slides/0.png",
    },
    {
      title: 'Radio Player',
      description: 'Player for your Online Radio with track details and Cover Art display',
      src: "../../slides/1.png"
    },
    {
      title: 'Custom Design',
      description: 'Build a unique App with your own logo, graphics and theme.',
      src: "../../slides/2.png"
    },
    {
      title: 'Live TV/Video Player',
      description: 'Play Live TV/Video stream in the in-bulit player.',
      src: "../../slides/3.png"
    },
    {
      title: 'Facebook',
      description: 'Display the social media profile of your Radio Station',
      src: "../../slides/4.png"
    },
    {
      title: 'Social Media Content',
      description: 'Direct listeners to your Social Media',
      src: "../../slides/5.png"
    },
    {
      title: 'YouTube',
      description: 'Link up your Social Media channels like YouTube',
      src: "../../slides/6.png"
    },
    {
      title: 'Your Website',
      description: 'Present your own Website within the App in WebView',
      src: "../../slides/7.png"
    },
    {
      title: 'Ads & Monetization',
      description: 'Display interstitial and banner Ads from your AdMob account.',
      src: "../../slides/8.png"
    },
    {
      title: 'Background Mode',
      description: 'App optimized for Listening while using other Apps.',
      src: "../../slides/9.png"
    },
    {
      title: 'Push Notifications',
      description: 'Send Push Notifications to App users.',
      src: "../../slides/10.png"
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
        <img src={require("../static/img/mobilePhoneBorder.png")} alt="" className="abilities-slider__mobile-border" />
        <div ref={ref} className="abilities-slider__slider">
          {slides.map((slide, index) => (
            <img id={index} src={slide.src} alt="" className="abilities-slider__slide" />
          ))}
        </div>
      </div>
    </div>
  )
}