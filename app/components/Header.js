import React, { Component } from 'react';
import style from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className={style.title}>Reelgood nice</div>
      </header>
    );
  }
}
