import React, { Component } from 'react';
import style from './MainSection.css';


function isAuthed() {
  return new Promise(resolve => {
    chrome.cookies.getAll({ url: 'https://reelgood.com', secure: true }, (cookies) => {
      const auth = cookies.filter(({ name }) => (name === 'rg_rt' || name === 'rg_at')).reduce(
        (currentValue, { name, value }) => {
          currentValue[name] = value
  
          return currentValue
        },
        {}
      )
  
      resolve(!!(auth.rg_at && auth.rg_rt))
    })
  })
}


export default class MainSection extends Component {
  state = {
    isLoaded: false,
    isLoggedIn: false
  }

  async componentDidMount() {
    const isLoggedIn = await isAuthed()

    this.setState({ isLoaded: true, isLoggedIn })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
          a spinner or something
        </div>
      )
    }

    if (!this.state.isLoggedIn) {
      return (
        <div>
          a login link
        </div>
      )
    }


    return (
      <div className={style.main}>
        The search page / special stuff
      </div>
    );
  }
}

