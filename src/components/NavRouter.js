import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Landing";
import About from "./Trainers";
import Services from "./Services";
import Contact from "./ContactUs";
import Training from "./Training";
import GuestTrainers from "./GuestTrainers";

class NavRouter extends Component {
  state = {
    routes: [
      {
        toPath: "/",
        nav: "Home",
        page: <Home />
      },
      {
        toPath: "/about",
        nav: "About",
        page: <About />
      },
      {
        toPath: "/services",
        nav: "Services",
        page: <Services />
      },
      {
        toPath: "/training",
        nav: "Training",
        page: <Training />
      },
      {
        toPath: "/guestTrainers",
        nav: "Guest Trainers",
        page: <GuestTrainers />
      },
      {
        toPath: "/training",
        nav: "Training",
        page: <Training />
      },
      {
        toPath: "/contact",
        nav: "Contact",
        page: <Contact />
      }
    ]
  };
  render() {
    const routes = this.state.routes;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {routes.map(r => {
                return (
                  <li>
                    <Link key={r.toPath} to={r.toPath}>
                      {r.nav}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Switch>
            {routes.map(p => {
              return (
                <Route key={p.nav} path={p.toPath}>
                  {p.page}
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavRouter;

// Home = () => {
//   return <Home />;
// }

// About = () => {
//   return <About />;
// }

// Services = () => {
//   return <Services />;
// }
