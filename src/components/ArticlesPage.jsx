import React, {Component} from 'react';

class ArticlesPage extends Component {
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
                                    Articles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesPage;
