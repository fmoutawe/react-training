import {Component} from "react";
import css from './Header.module.css';
import {Menu} from "../Menu/Menu";
import {Container} from "../Container/Container";

export class Header extends Component {
  render() {
    return <div className={css.root}>
      <Container className={css.container}>
        <p className={css.title}>React first app</p>
        <Menu />
      </Container>
    </div>
  }
}