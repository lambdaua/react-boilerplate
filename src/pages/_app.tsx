import React from 'react';
import NextApp from 'next/app';
import {Provider} from 'react-redux';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {normalize} from 'styled-normalize';

import vars from '../styles/vars';
import {store} from '../redux/store';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=cyrillic');

    * {
        font-family: 'Roboto', sans-serif;
        color: ${vars.colors.grey};
        box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }
`;

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <GlobalStyles/>
          <Component {...pageProps}/>
        </ThemeProvider>
      </Provider>
    );
  }
}
