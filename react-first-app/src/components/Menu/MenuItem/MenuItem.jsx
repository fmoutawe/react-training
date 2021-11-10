import css from './MenuItem.module.css';

export const MenuItem = ({link: {label, link}}) => {
  return <li className={css.root}>
    <a className={css.link} href={link}>{label}</a>
  </li>
}