import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component{
  render () {
    return (
      <div className="footer">
        <div className="social-media">
          <div className="git">
            <a href="https://github.com/Jacobaallen">
              <img src="images/github-logo.png" alt="github" height="50" width="50"/>
            </a>
          </div>
          <div className="linkin">
            <a href="https://www.linkedin.com/in/jacobaallen/">
              <img src="images/linkin-cicle.png" alt="linkedin" height="50" width="50"/>
            </a>
          </div>
          <div className="linkin">
            <a href="https://www.instagram.com/jacobaallen/">
              <img src="images/instagram-logo.png" alt="instagram" height="50" width="50"/>
            </a>
          </div>
          <div className="linkin">
            <a href="https://www.youtube.com/user/JacobAAllen/videos">
              <img src="images/youtube-logo.png" alt="youtube" height="50" width="50"/>
            </a>
          </div>
          <div className="linkin">
            <a href="https://www.patreon.com/jacoballen">
              <img src="images/patreon-logo.png" alt="patreon" height="50" width="50"/>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>All Rights Reserved Copyright 2021 Jacob A. Allen</p>
        </div>
      </div>
    )
  }
}

export default Footer;
