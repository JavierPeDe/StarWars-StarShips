import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StarShips } from './components/StarShips';
import { NavBarApp, ImgLogo, InUp, ButtonLogin } from './styled';
import Logo from './assets/img/Logo.jpg';
export const App = () => {
  return (
    <div>
      <ImgLogo src={Logo} />
      <ButtonLogin>
        <InUp>LOG IN</InUp> // <InUp>SING IN</InUp>
      </ButtonLogin>

      <Router>
        <NavBarApp>
          <div>
            <Link
              to="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/star-ships"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              StarShips
            </Link>
          </div>
        </NavBarApp>
        <Switch>
          <Route path="/log-in"></Route>
          <Route path="/sign-in"></Route>
          <Route path="/star-ships">
            <StarShips />
          </Route>
          <Route path="/" exact>
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
