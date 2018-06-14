import React, { Component } from 'react';
import FooterAboutCompany from '../FooterAboutCompany/FooterAboutCompany';
import InformativeLinks from '../InformativeLinks/InformativeLinks';
import NewsLetter from '../NewsLetter/NewsLetter';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="text-center">About Company</h4>
                            <FooterAboutCompany></FooterAboutCompany>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-center">Information</h4>
                            <InformativeLinks></InformativeLinks>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-center">Newsletter</h4>
                            <NewsLetter></NewsLetter>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer