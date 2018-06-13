import React, { Component } from 'react';
import './AppHeader.css';
import Search from '../Search/Search';

class AppHeader extends Component {
    render(){
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="#">
                                    <strong>NeoSTORE</strong>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <Search></Search>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default AppHeader