import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Warning from './components/Warning';
import Artarchive from './components/Artarchive';


class App extends React.Component {
  render () {
  return (
      <Router>
        <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/warning" component={Warning} />
        <Route exact path="/artarchive" component={Artarchive} />
        <Footer/>
      </Router>
    )
  }
}

export default App;
