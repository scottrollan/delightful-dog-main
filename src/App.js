import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatBot from './components/chat/ChatBot';
import Home from './pages/Landing';
import About from './pages/Trainers';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Training from './pages/Training';
import GuestTrainers from './pages/GuestTrainers';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <ChatBot />
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
