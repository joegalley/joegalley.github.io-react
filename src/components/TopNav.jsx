import React, {Component} from 'react';

class TopNav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar">
                    <div class="container">
                        <ul class="navbar-list">
                            <span id="navbar-list-lg">
                                <li class="navbar-item"><a class="navbar-link" href="/">About</a></li>
                                <li class="navbar-item"><a class="navbar-link" href="/articles">Articles</a></li>
                                <li class="navbar-item"><a class="navbar-link" href="/software">Software</a></li>
                            </span>

                            <span id="navbar-list-sm">
                                <li id="sm-menu-btn" class="navbar-item">
                                    <a class="navbar-link">
                                        <span id="menu-icon">
                                            <span class="fa fa-bars fa-2x"></span>
                                        </span>
                                        </a><div class="menu-dropdown-content"><a class="navbar-link">
                                            </a><a href="/">About</a>
                                            <a href="/articles">Articles</a>
                                            <a href="/software">Software</a>
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
