import React from 'react';
import '../styles/home.css';
import Languages from './Languages';



class Home extends React.Component {
 render() {
   return (
   <div className="master">
    <header className="header"/>
      <div className="top">
      </div>


      <div className="hero-image" id="home">
        <div className="hero-text-master">
          <div className="hero-text" >
            <p>Hi, I'm Jacob A. Allen</p>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "and I am a Web Developer and Graphic Designer", "Let me build your website"]'>
            </span>
          </div>
        </div>
      </div>

        <div className="about" id="about"/>
    <div className="about-master">
    <div className="about-text">
      <div className="aboutPic">
        <img src="images/IMG_0776-2-small.jpg" alt="aboutPic" width="300" height="375" />
      </div>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <p>
        I was born and raised in West Palm Beach, Florida. I am a graduate of Wyncode where I earned my certification as a Full Stack Web Developer. Before Wyncode,
        I studied studio art at Florida Atlantic University. I took post graduate courses in web design and publication design at Palm Beach State College while working
        as a substitute teacher for the Palm Beach County School District. I combined my art background with coding to meet the needs of our growning technology based workforce.
        I've focused on creating websites with an innovative and artistic vision. Now, I'd like to use my skills for the benefit of your organization.
      </p>
      <div className="list">
        <p>
          Languages: HTML5, CSS3, JavaScript, PHP, Ruby
        </p>
        <p>
          Libraries: React.JS, AngularJS, Rails, React on Rails
        </p>
        <p>Programs: Adobe Photoshop, Adobe Indesign, Adobe Animate, Adobe After Effects, Adobe Illustrator, Imovie, Word, Excel, Pages, Numbers, Keynote, Atom, VSCode, Shopify </p>
      </div>
      <div className="button-master">
          <div className="resume-download">
              <a href='my-resume-10.pdf' download>Download Resume</a>
          </div>
        <div className="contact-button">
            <a className="contact-button" href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  </div>

  <div className="bgimage-2" id="portfolio">
    <div className="transbox">
      <div className="portfolio">
        <p>Portfolio</p>
      </div>
    </div>
   </div>

     <div className="projects" id="projects">
       <div className="responsive">
         <div className="gallery">
           <a href="/WebPortfolio">
             <img src="images/websites-design-small.png" alt="AnimeFanHelper" width="800" height="600"/>
           </a>
           <div className="desc">Websites</div>
         </div>
       </div>
       <div className="responsive">
       </div>
       <div className="responsive">
         <div className="gallery">
           <a href="/Warning">
             <img src="images/art-design-2.png" alt="art" width="800" height="400"/>
           </a>
           <div className="desc">Art & Design</div>
         </div>
       </div>
      </div>


     <div className="contact-text" id="contact">
       <p>Contact</p>
     </div>

  <div className="contact-master">


    <div className="contact-icons">
        <div className="form">
        <form action="https://formspree.io/jacob@jacobaallen.com" method="POST" className="contact_form" id="contact_form">
          <div className="wrap">
            <p>Name:</p>
            <input name="name" id="name" type="text" placeholder="Your Name"/>
          </div>
          <div className="wrap">
            <p>Email:</p>
            <input name="_replyto" id="email" type="text" placeholder="Your Email"/>
          </div>
          <div className="wrap">
            <p>Message:</p>
            <textarea name="message" id="message" placeholder="Your Message"></textarea>
          </div>
          <div className="arlo_tm_button">
            <button type="submit">Send</button>
          </div>
        </form>

        <div className="icons-4">
          <img src="images/email-icon.png" alt="email" height="100" />
          <p>jacob@jacobaallen.com</p>
        </div>
        <div className="icons-5">
          <img src="images/phone-icon-circle.png" alt="phone" height="100" width="100"/>
          <p>(561) 315-5460</p>

        </div>
      </div>
    </div>
  </div>

    <div className="top-button">
      <a href="#top">Back to Top</a>
   </div>
</div>

   )
 }
}
export default Home;
