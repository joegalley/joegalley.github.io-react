import React, {Component} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className="container"
                 style={{'width': '100%', 'border-bottom': '1px solid #eee', 'margin-bottom': '40px'}}>
                <div className="main">
                    <div className="row">
                        <div className="four columns">
                            <div style={{'margin-left': 'auto', 'margin-right': 'auto', 'width': '75%'}}>
                                <h3 className="title" align="center">Joe Galley</h3>
                                <img id="main-img" className="u-max-full-width" style={{'margin-bottom': '30px'}}
                                     src=""/>

                                <div id="s-links" className="show-lg">
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/joegalley">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/joegalley">
                                                <i className="fa fa-github"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/joe_galley">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="show-sm">
                                    <ul id="sm-s-links">
                                        <li>
                                            <a href="https://www.linkedin.com/in/joegalley">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/joegalley">
                                                <i className="fa fa-github"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/joe_galley">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="eight columns">
                            <h5 className="content-paragraph-title">About Me</h5>
                            <div className="content-paragraph">
                                <p>
                                    Welcome to my website. I maintain this site to discuss some of my interests - mostly
                                    things related to software and technology. You can read some of the
                                    <a href="articles">articles</a> I've written or check out some
                                    of my <a href="software">software</a>.
                                </p>
                                <p>
                                    My software interests include cloud computing, distributed and concurrent systems,
                                    software architecture, machine
                                    learning, mathematical optimization, operating systems, virtualization, computer
                                    networks, and mobile apps.
                                </p>
                                <p>
                                    Some of my personal interests include: electronic music, travel, graphic design,
                                    soccer, boxing, economics, finance, electrical engineering, history, and writing.
                                </p>
                            </div>
                            <br />
                            <div className="content-paragraph">
                                <p style={{'font-size': '12px', 'color': '#a1a1a1'}}>
                                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                        <img alt="Creative Commons License" style={{'border-width': '0'}}
                                             src="/assets/img/cc.png"/></a>
                                    <br />
                                    The views and opinions expressed on this webside are solely my own and do not
                                    represent the
                                    views or opinions of my employer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;
