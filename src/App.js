import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Landing';
import About from './components/Trainers';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Training from './components/Training';
import GuestTrainers from './components/GuestTrainers';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const routes = [
    {
      toPath: '/',
      nav: 'Home',
      page: <Home />,
    },
    {
      toPath: '/about',
      nav: 'About',
      page: <About />,
    },
    {
      toPath: '/services',
      nav: 'Services',
      page: <Services />,
    },
    {
      toPath: '/training',
      nav: 'Training',
      page: <Training />,
    },
    {
      toPath: '/guestTrainers',
      nav: 'Guest Trainers',
      page: <GuestTrainers />,
    },
    {
      toPath: '/contact',
      nav: 'Contact',
      page: <ContactUs />,
    },
  ];

  return (
    <div className="App" onClick={() => setNavbarExpanded(false)}>
      <Router>
        <Header
          navItems={routes}
          expanded={navbarExpanded}
          expandNavbar={() => setNavbarExpanded(true)}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />
          <Route path="/training" component={Training} />
          <Route path="/guestTrainers" component={GuestTrainers} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
