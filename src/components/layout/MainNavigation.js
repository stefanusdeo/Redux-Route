import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/quotes'>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/new-quotes'>
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
