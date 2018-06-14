import React, { Component } from 'react';
import './ContactInfo.css';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact_Info_wrappr">
                <h4>Contact information</h4>
                <p>Email: contactneosofttech.com</p>
                <p>Phone: +91 0000000000</p>
                <p>MUMBAI, INDIA</p>
            </div>
        );
    }
}

export default ContactInfo