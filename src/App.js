import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
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

export const UserContext = createContext();

const App = () => {
  const thisUser = useAuth() ?? null;
  console.log(`From App: ${thisUser}`);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <div className="App" onClick={() => setNavbarExpanded(false)}>
      <UserContext.Provider value={thisUser}>
        <ChatBot />
        <Router>
          <Header
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
      </UserContext.Provider>
    </div>
  );
};

export default App;
