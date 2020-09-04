import React, { Component } from 'react';
import style from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.page}>
        <img src={require('../images/logo.png').default} alt="logo" className={style.logo} />
      </header>
    );
  }
}
