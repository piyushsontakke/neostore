import React, { Component } from 'react';
import './Slider.css';
import OwlCarousel from 'react-owl-carousel';



class Slider extends Component {
    render() {
        return(
            <div className="container">
                 <OwlCarousel
                    className="owl-theme"
                    items={1}
                    loop
                    margin={10}
                    nav
                >
                    <div className="item">
                        <img src="https://az760333.vo.msecnd.net/-/media/property/lansdowne-resort/resort/lansdowne_interior_hospitality_suite_parlor3-crpd1150x500.jpg?ts=a699b0e0-40d0-48b7-84cf-b3e8e8aaa270" />
                    </div>
                    <div className="item">
                        <img src="http://180.149.241.208:3000/storage/image/vitra_slow_chair_family_1_000.png" />
                    </div>
                    <div className="item">
                        <img src="http://180.149.241.208:3000/storage/image/tables.jpg" />
                    </div>
                    <div className="item">
                        <img src="http://180.149.241.208:3000/storage/image/sofa.jpeg" />
                    </div>
                </OwlCarousel>
            </div> 
        );
    }
}

export default Slider