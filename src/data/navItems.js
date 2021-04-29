import Home from '../pages/Landing';
import About from '../pages/Trainers';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import Training from '../pages/Training';
import GuestTrainers from '../pages/GuestTrainers';

export const routes = [
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
