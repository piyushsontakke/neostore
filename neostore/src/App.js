import React, { Component } from 'react';
import AppHeader from './AppHeader/AppHeader';
import Slider from './Slider/Slider';
import PopularProd from './PopularProd/PopularProd';
import Footer from './Footer/Footer';
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <Slider></Slider>
        <PopularProd></PopularProd>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
