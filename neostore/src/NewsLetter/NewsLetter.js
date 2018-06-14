import React, { Component } from 'react';
import './NewsLetter.css';

class NewsLetter extends Component {
    render() {
        return (
            <div className="newsletter_wrappr text-center">
                <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
                    <form className="form-group">
                        <input className="form-control" type="email" name="newsletter" placeholder="Your Email..." />        
                    </form>
                    <button className="btn btn-default">Subscribe</button>
            </div>
        );
    }
}



export default NewsLetter