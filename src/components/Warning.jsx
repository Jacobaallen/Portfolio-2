import React from 'react';
import '../styles/warning.css';


class warning extends React.Component {
 render() {
   return (
     <div className="warning">
       <h1>Warning</h1>
      <p>Federal law provides severe civil and criminal penalties for the unauthorized reproduction, distribution or exhibition of copyrighted Jacob A. Allen artwork and design work in any form or in a forum now or in the future is NOT permissible without my expressed written consent.
         Any act to promote or gain profit in any manner (e.g. either monetarily or socially) from the use of Jacob A. Allen work is a violation of my privacy and subject to legal action. 
         Penalties of Copyright Infringement: By reproducing, republishing or redistributing the work of a copyright holder without permission, you may be violating or infringing on Jacob A. Allen rights under the Copyright Act.
         Criminal copyright infringement is investigated by the FBI and may constitute a felony with a maximum penalty of up to five years in prison and or a $500,000 USD Fine. By agreeing you have read and understood what can happen to you.</p>
       <p>Warning: Some content contains adult themes. Make sure you are 18 of age years or older before clicking.</p>
       <p>By clicking Artwork or Design Work you accepted the terms of this agement.</p>
       <p>The following art and design work are repetitive examples of my work.</p>
      <div className="buttons">
        <a className="nav-link" href="/Artarchive">Artwork</a>
        <a className="nav-link" href="/Design">Design Work</a>
        <a className="nav-link" href="/">Ignore</a>
      </div>
    </div>
  )
 }
}

export default warning;
