import React, { Component } from 'react';
import FooterAboutCompany from '../FooterAboutCompany/FooterAboutCompany';
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
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-center">Newsletter</h4>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer