import React from 'react';
import '../styles/WebPortfolio.css';


class WebPortfolio extends React.Component {
 render() {
   return (
     <>
     <div className="bgimage-2">
        <div className="transbox">
          <div className="portfolio">
            <p>Web Portfolio:</p>
            <h6>Website that I have development and worked on.</h6>
          </div>
        </div>
      </div>

        <div className="projects">
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.animefanhelper.com">
                <img src="images/afh-1.png" alt="AnimeFanHelper" width="800" height="400"/>
              </a>
              <div className="desc">Anime Fan Helper is a mulltifunction website that has anime related news stories, anime theme games, and your able to search for any anime you want using the Jikan API. I Created it in 2019. I continue to make new news story and videos for it.</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.southeastrealtygroup.net/index.html">
                <img src="images/SE-website.png" alt="southeast-realty-group" width="800" height="400"/>
              </a>
              <div className="desc"> I created this site in 2019 for the company Southeast Realty Group Inc.</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a href="http://www.x1law.com">
                <img src="images/x1law-website.png" alt="AnimeFanHelper" width="800" height="400"/>
              </a>
              <div className="desc">I did not create the site. I updated the SEO and a few of the pages as well as many of the images all in WordPress in 2020.</div>
            </div>
          </div>
        </div>
         <div className="row-2">
           <div className="responsive">
             <div className="gallery">
               <a href="https://github.com/Jacobaallen/Ichi.world">
                 <img src="images/Untitle-Travel.png" alt="Untitle-Travel" width="800" height="400"/>
               </a>
               <div className="desc">This site current being built. It is a weekend travel app design to help users find things to do on the weekend. I am currently making it in 2019.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://beat-blender.herokuapp.com/">
                 <img src="images/BeatBleader.png" alt="" width="800" height="400"/>
               </a>
               <div className="desc">I was part of the team behind. BeatBleader, it uses Geolocation and the Spotify API to connect you with other people around you through music. It was my teams final project at Wyncode in 2019</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://github.com/Jacobaallen/Weekend-Game-2">
                 <img src="images/game.png" alt="game" width="800" height="400"/>
               </a>
               <div className="desc">Elder Tales is a game made for the terminal based on the anime "Log Horizon". I created it in 2019.</div>
             </div>
           </div>
         </div>
           <div className="row-2">
             <div className="responsive">
               <div className="gallery">
                 <a href="https://github.com/rmbeavin/DishWish">
                   <img src="images/dishwish.png" alt="dishwish" width="800" height="400"/>
                 </a>
                 <div className="desc">Dishwish was a team project made at Wyncode. I was a part of. We created it in 2018.</div>
               </div>
             </div>
           <div className="responsive">
             <div className="gallery">
               <a href="http://www.animefanhelper.com/whackaluffy.html">
                 <img src="images/whackaluffy0.png" alt="whackaluffy" width="800" height="400"/>
               </a>
               <div className="desc">Based on the anime One Piece and the game Whack-a-mole comes Whack-a-Luffy. Created in 2019.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="http://www.animefanhelper.com/space-invaders.html">
                 <img src="images/arcade-game-si.png" alt="Space-invaders" width="800" height="400"/>
               </a>
               <div className="desc">Based on the most game popular ever made. Created in 2019.</div>
             </div>
           </div>
         </div>
         <div className="row-2">
           <div className="responsive">
             <div className="gallery">
               <a href="http://www.animefanhelper.com/space-invaders.html">
                 <img src="images/arcade-game-si.png" alt="Space-invaders" width="800" height="400"/>
               </a>
               <div className="desc">Based on the most game popular ever made. Created in 2019.</div>
             </div>
           </div>
           <div className="responsive">
             <div className="gallery">
               <a href="https://tourdeendofsummer.herokuapp.com/index.html">
                 <img src="images/Tourdeendofsummer.png" alt="TourDeEndofSummer" width="800" height="400"/>
               </a>
               <div className="desc">A event sited I create using Adobe Dreamweaver in 2016.</div>
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
