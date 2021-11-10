import css from './Section.module.css';

export const Section = ({title, children}) => {
  return <section className={css.root}>
    <h2>{title}</h2>
    {children}
  </section>
}