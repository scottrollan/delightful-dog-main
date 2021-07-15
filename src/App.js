import React, { useState, createContext, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import OmniModal from './components/OmniModal';
import ChatBot from './components/chat/ChatBot';
import Home from './pages/Landing';
import About from './pages/Trainers';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Training from './pages/Training';
import GuestTrainers from './pages/GuestTrainers';
import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './components/Privacy.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const UserContext = createContext();
export const ModalContext = createContext();

const App = () => {
  const thisUser = useAuth() ?? null;
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalHeader, setModalHeader] = useState(<>Initial Value Header</>);
  const [modalBody, setModalBody] = useState(<>and body.</>);
  const headerRef = useRef(<></>);
  const bodyRef = useRef(<></>);

  const setContent = (header, body) => {
    if (header) {
      headerRef.current = header;
    }
    if (body) {
      bodyRef.current = body;
    }
    setModalHeader(headerRef.current);
    setModalBody(bodyRef.current);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const setModal = {
    show: () => {
      return setShowModal(true);
    },
    hide: () => {
      return setShowModal(false);
    },
    setContent: (x, y) => {
      return setContent(x, y);
    },
  };

  return (
    <div className="App" onClick={() => setNavbarExpanded(false)}>
      <UserContext.Provider value={thisUser}>
        <ModalContext.Provider value={setModal}>
          <Router>
            <OmniModal
              show={showModal}
              onHide={hideModal}
              headerContent={modalHeader}
              bodyContent={modalBody}
            />
            <ChatBot />
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
              <Route path="/privacy" component={Privacy} />
            </Switch>
          </Router>

          <Footer />
        </ModalContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
