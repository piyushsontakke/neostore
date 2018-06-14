import React, { Component } from 'react';
import './InformativeLinks.css';

class InformativeLinks extends Component {
    render() {
        return (
            <div className="informative_links">
                <ul className="list-unstyled text-center">
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Guarantee & Return Policy</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Locate Us</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default InformativeLinks