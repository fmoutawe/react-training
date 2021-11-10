import {MenuItem} from "./MenuItem/MenuItem";
import css from './Menu.module.css';

export function Menu() {
  const links = [
    {
      label: 'Home',
      link: '/'
    }
  ]

  return <nav className={css.root}>
    <ul className={css.menu}>
      {links.map((link, index) => <MenuItem key={index} link={link} />)}
    </ul>
  </nav>;
}