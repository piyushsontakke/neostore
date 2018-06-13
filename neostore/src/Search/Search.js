import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="input-group search-bar">
                    <input className="form-control" name="searchbar" />
                </div>
            </div>
        )
    }
}

export default Search