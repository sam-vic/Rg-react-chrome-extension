import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.normal}>
        <Header />
        <MainSection />
      </div>
    );
  }
}