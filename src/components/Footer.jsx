export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container container--main">
          <nav className="footer__nav">
            <div className="footer__nav-column">
              <div className="footer__nav-column-title">
                SERVICES
              </div>
              <ul className="footer__nav-column-content">
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/order">
                    Radio Server
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/tv">
                    Online TV Hosting
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/app" >
                    Mobile App
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/alexa-skill">
                    Alexa Radio Skill
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav-column">
              <div className="footer__nav-column-title">
                RESOURCES
              </div>
              <ul className="footer__nav-column-content">
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/radio-directory">
                    Radio Directory
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/help">
                    Tutorials
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/faq">
                    FAQ
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="https://billing.fastcast4u.com/serverstatus.php">
                    Server Uptime
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav-column">
              <div className="footer__nav-column-title">
                SUPPORT
              </div>
              <ul className="footer__nav-column-content">
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/contact">
                    LiveChat
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/contact">
                    Call
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/ticket">
                    Message us
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="/login">
                    Client Area
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav-column">
              <div className="footer__nav-column-title">
                social
              </div>
              <ul className="footer__nav-column-content">
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="//www.facebook.com/freeshoutcast/">
                    Facebook
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link"  href="https://www.youtube.com/user/FastCast4u/videos/">
                    YouTube
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="https://www.linkedin.com/company/fastcast4u">
                    LinkedIn
                  </a>
                </li>
                <li className="footer__nav-link-container">
                  <a className="footer__nav-link" href="https://www.instagram.com/fastcast4u/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr className="hr hr--dark-theme" />
          <div className="footer__copyright-block">
            <div className="footer__copyright-text">
              Copyrights © 2008-2022 All Rights Reserved by FastCast DWC-LLC
            </div>
            <div className="footer__copyright-text">
              <a className="footer__copyright-link" href="/tos">
                Terms of Service
              </a>
              /
              <a className="footer__copyright-link" href="/privacy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}