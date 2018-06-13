import React, { Component } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import './FooterAboutCompany.css';

class FooterAboutCompany extends Component {
    render() {
        return (
            <div className="details text-center">
                <p>NeoSOFT Technologies is here at your quick and easy service for shooping .</p>
                <ContactInfo></ContactInfo>
            </div>
        );
    }
}

export default FooterAboutCompany