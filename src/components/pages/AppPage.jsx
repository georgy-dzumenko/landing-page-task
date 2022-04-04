import React from 'react';
import '../../styles/App.scss';
import { Navigation } from '../Navigation';
import { Header } from '../Header';
import { useTheme } from '../ThemeProvider';
import { Banner } from '../Banner';
import {OfferSection } from '../OfferSection';
import { AbilitiesSlider } from '../AbilitiesSlider';
import { OfferCards } from '../OfferCards';
import { Accordion } from '../Accordion';
import { AdditionalFeatureCard } from '../AdditionalFeatureCard';
import {ReactComponent as DownloadFromAppleStore} from '../../static/img/buttons/downloadFromAppleStore.svg'
import {ReactComponent as AndroidIcon} from '../../static/img/systems/android-little.svg';
import {ReactComponent as AppleIcon} from '../../static/img/systems/apple-little.svg';
import { Footer } from '../Footer';
import classNames from 'classnames';
import { PopUpVideo } from '../PopUpVideo';
import { MessageBlock } from '../MessageBlock';
import { MobileNavigation } from '../MobileNavigation';

export const AppPage = () => {
  const darkTheme = useTheme();
  
  document.body.style.background = darkTheme ? 'hsl(0, 0%, 9%)' : '#fff';
  document.body.style.color = darkTheme ? '#fff' : '#000';
  return (
    <div className="App">
      <Navigation />

      <Header />
      <MessageBlock />
      <PopUpVideo />
      <Banner />
      <main>
        <div className="container">
          <section className="section">
            <OfferSection />
          </section>
          <section className="section">
            <AbilitiesSlider />
          </section>
          <section className="section">
            <OfferCards />
          </section>
        </div>
        <div className="offer-stripe">
          <div className="offer-stripe__content">
            Your Mobile App for just $10 monthly with a New Radio Server Package
            <div className="button button--transparent">
              Get now
            </div>
          </div>
        </div>
        <section className="container section">
          <Accordion title="Android & iOS App Hosting" opened>
            <p>
              <AndroidIcon className="icon"/>
              {' Android App can be published and hosted for free on our '}
              <a
                rel="noopener noreferrer"
                href="//play.google.com/apps/publish/signup/"
                target="_blank"
              >
                Google Play
              </a>
              {' account or on your own Google Play account.'}
            </p>
            <p class="MuiTypography-root sc-dkPtRN jAnVkG MuiTypography-body1">
              <AppleIcon className="icon"/>
              {' You need your own '}
              <a
                rel="noopener noreferrer"
                href="//developer.apple.com/programs/enroll/"
                target="_blank"
              >
                Apple Developer Account
              </a>
              {' and Apple ID to have your iOS App submitted to Apple App Store. '}
            </p>
          </Accordion>
          <Accordion title="Product Delivery time" >
          Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.
          </Accordion>
          <Accordion title="Device Compatibility" >
            <p>
              <AndroidIcon className="icon"/>
              {' App is supported by Android 9.0 - Pie. It is also backward compatible with older Android builds, up till Android 4.1 JellyBean.'}
            </p>
            <p class="MuiTypography-root sc-dkPtRN jAnVkG MuiTypography-body1">
              <AppleIcon className="icon"/>
              {' Apple iOS App requires iOS 12.1 and above.'}
            </p>
          </Accordion>
        </section>
        <section className="container section">
          <div className="additional-feature-cards">
            <h2 className="h2 h2--mg-bottom">
              Additional features
            </h2>
            <div className="additional-feature-cards__cards-container">
              <AdditionalFeatureCard title={'Push Notifications'} price={"10.00"} priceDesc={"one-time"}>
                Improve interaction with your listeners by sending notifications through the App
              </AdditionalFeatureCard>
              <AdditionalFeatureCard title={'App Monetization'} price={"20.00"} priceDesc={"one-time"}>
                Generate revenue from AdMob Ads displayed in your App
              </AdditionalFeatureCard>
            </div>
          </div>
        </section>
        <section className="container section">
          <h2 className="h2">Product Specifications</h2>
          <h6 className={classNames("h6", "h6--mg-bottom", {"h6--dark-theme": darkTheme})}>Features available for your Application</h6>
          <Accordion title="Radio Stream, Live TV and Video" >
            The App supports Online Radio Streams (MP3, AAC or AAC+) Live TV Streams (.m3u8) and Video Streams (MP4). You can have multiple streams in one App!
          </Accordion>
          <Accordion title="Custom Design" >
            Easily design and preview your App with a free Online Mobile App Creator. Next, we create the App individually for your project. All Apps are released free from our branding.
          </Accordion>
          <Accordion title="Social Network & Web" >
            Share your Social Media Pages and view the content of websites in WebView without any external web browsers.
          </Accordion>
          <Accordion title="Podcasts" >
            Your broadcasts and shows from SoundCloud are listed and available on demand.
          </Accordion>
          <Accordion title="Push Notifications" >
            Keep your listeners updated by sending them Push Notifications from an online OneSignal Panel. It’s a great way to notify about your live broadcasts and scheduled shows.
          </Accordion>
          <Accordion title="Monetization" >
            Make money online on displaying Ads in your App. Ads are delivered by AdMob so you do not have to look for advertisers, we'll just hook up Apps with your AdMob account.
          </Accordion>
        </section>
        <section className="container section">
          <h2 className="h2 h2--mg-bottom">Download Demo App</h2>
          <div className="download-button-container">
            <a href="https://play.google.com/store/apps/details?id=com.fc4u.demo">
              <img src={require("../../static/img/buttons/downloadFromGooglePlay.png")} alt="" className="download-button"/>
            </a>
            <a href="https://apps.apple.com/us/app/fastcast4u-online-radio-app/id1456258846?l=en&ls=1">
              <DownloadFromAppleStore className="download-button" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
}