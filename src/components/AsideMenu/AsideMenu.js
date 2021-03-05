import './AsideMenu.scss';
import { NavLink } from "react-router-dom";

function AsideMenu() {
  return (
    <div className="AsideMenu">
      <nav>
          <ul className="AsideMenu__List">
              <li className="AsideMenu__List--item">
                  <NavLink className="AsideMenu__List--item--link" to="/">Home</NavLink>
              </li>
              <li className="AsideMenu__List--item">
                  <NavLink className="AsideMenu__List--item--link" to="/products">Products</NavLink>
              </li>
              <li className="AsideMenu__List--item">
                  <NavLink className="AsideMenu__List--item--link" to="/contacts">Contacts</NavLink>
              </li>
              <li className="AsideMenu__List--item">
                  <NavLink className="AsideMenu__List--item--link" to="/cabinet">Cabinet</NavLink>
              </li>
          </ul>
      </nav>
    </div>
  );
}

export default AsideMenu;