import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopNav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <ul className="navbar-list">
                            <span id="navbar-list-lg">
                                <li className="navbar-item">
                                    <Link to="/" className="navbar-link">About</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/articles" className="navbar-link">Articles</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/software" className="navbar-link">Software</Link>
                                </li>
                            </span>

                            <span id="navbar-list-sm">
                                <li id="sm-menu-btn" className="navbar-item">
                                    <a className="navbar-link">
                                        <span id="menu-icon">
                                            <span className="fa fa-bars fa-2x"></span>
                                        </span>
                                    </a>
                                    <div className="menu-dropdown-content">
                                        <Link to="/">About</Link>
                                        <Link to="/articles" className="navbar-link">Articles</Link>
                                        <Link to="/software" className="navbar-link">Software</Link>
                                    </div>
                                </li>
                            </span>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopNav;
