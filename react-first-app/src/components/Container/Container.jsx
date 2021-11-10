import cx from 'classnames';
import css from './Container.module.css';

export const Container = ({className, children}) => {
  return <div className={cx(className, css.root)}>
    {children}
  </div>
}