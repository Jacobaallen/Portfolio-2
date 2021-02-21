import React from 'react';
import '../styles/WebPortfolio.css';


class WebPortfolio extends React.Component {
 render() {
   return (
     <>
     <div className="bgimage-2">
        <div className="transbox">
          <div className="portfolio">
            <p>Web Portfolio</p>
          </div>
        </div>
      </div>

        <div className="projects">
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.animefanhelper.com">
                <img src="images/afh-1.png" alt="AnimeFanHelper" width="800" height="400"/>
              </a>
              <div className="desc">Anime Fan Helper is a mulltifunction website I created. The site has reviews, information, games, a search engine, and more. Created it in 2019-ongoing project.</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.southeastrealtygroup.net/index.html">
                <img src="images/SE-website.png" alt="southeast-realty-group" width="800" height="400"/>
              </a>
              <div className="desc"> I created this website in 2019 for Southeast Realty Group Inc. Created in 2019-ongoing updates</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.x1law.com">
                <img src="images/x1law-website.png" alt="AnimeFanHelper" width="800" height="400"/>
              </a>
              <div className="desc">I updated an exsting WordPress website and SEO. 2020-ongoing.</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a href="https://www.shnoozr.com">
                <img src="images/shnoozr.png" alt="shnoozr" width="800" height="400"/>
              </a>
              <div className="desc"> I did Web consulting work for Shnoozr in 2020.</div>
            </div>
          </div>
        </div>
         <div className="row-2">
           <div className="responsive">
             <div className="gallery">
               <a href="https://github.com/Jacobaallen/Ichi.world">
                 <img src="images/Untitle-Travel.png" alt="Untitle-Travel" width="800" height="400"/>
               </a>
               <div className="desc">This is a weekend travel app designed to help users find things to do on the weekends. Created in 2019-on Hisutus as of 2020.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://beat-blender.herokuapp.com/">
                 <img src="images/BeatBleader.png" alt="" width="800" height="400"/>
               </a>
               <div className="desc">BeatBleader, a 2019 Wyncode team project, uses Geolocation and the Spotify API to connect you with other people nearby through music. Created in 2019-2019 done. </div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://github.com/Jacobaallen/Weekend-Game-2">
                 <img src="images/game.png" alt="game" width="800" height="400"/>
               </a>
               <div className="desc">Elder Tales is a game made for the terminal based on the anime "Log Horizon". I created it in 2019-2019 done.</div>
             </div>
           </div>
         </div>
         <div className="row-2">
           <div className="responsive">
             <div className="gallery">
               <a href="https://github.com/rmbeavin/DishWish">
                 <img src="images/dishwish.png" alt="dishwish" width="800" height="400"/>
               </a>
               <div className="desc">Dishwish was a 2018 Wyncode team project.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://tourdeendofsummer.herokuapp.com/index.html">
                 <img src="images/Tourdeendofsummer.png" alt="TourDeEndofSummer" width="800" height="400"/>
               </a>
               <div className="desc">An event site I created using Adobe Dreamweaver in 2016.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="http://garyramey.com/student-work/gra2144c-sp2016/jallen/project2/index.html">
                 <img src="images/ecommerce-site.png" alt="JaKob" width="800" height="400"/>
               </a>
               <div className="desc">A mock up ecommerce site I created using Adobe Muse in 2016.</div>
             </div>
           </div>
         </div>
           <div className="row-3">
             <div className="responsive">
               <div className="gallery">
                 <a href="http://garyramey.com/student-work/gra2144c-sp2016/jallen/project1/index.html">
                   <img src="images/event-site.png" alt="event" width="800" height="400"/>
                 </a>
                 <div className="desc">A mock up event site I created using Adobe Muse in 2016.</div>
               </div>
             </div>
         </div>
      </>
   )
  }
 }

 export default WebPortfolio;
