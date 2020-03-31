import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const NavRouter = (props) => {
    const routes = props.routes
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
          </div>

      </Router>
    );
  
}

export default NavRouter;

