import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ArticlesPage extends Component {
    render() {
        return (
            <div className="container"
                 style={{'width': '100%', 'border-bottom': '1px solid #eee', 'margin-bottom': '40px'}}>
                <div className="main">
                    <h2 className="title">Articles</h2>
                    <div className="article-row">
                        <div>
                            <Link to='/articles/one' className="article-title">
                                Spring Boot: Handling Errors Globally Without ExceptionHandler
                            </Link>
                        </div>
                        <span className="tags">Tags:
					        <span className="article-tag tag-spring">Spring Boot</span>
					        <span className="article-tag tag-java">Java</span>
                        </span>
                    </div>
                    <div className="article-row">
                        <div>
                            <a href="/articles/spring-boot-show-properties.html" className="article-title">
                                Spring Boot: How to List All Properties and their Values
                            </a>
                        </div>
                        <span className="tags">Tags:
                            <span className="article-tag tag-spring">Spring Boot</span>
                            <span className="article-tag tag-java">Java</span>
                        </span>
                    </div>
                    <div className="article-row">
                        <div>
                            <a href="/articles/eclipse-stop-formatting-comments.html" className="article-title">
                                How to Stop Eclipse from Auto-Formatting Comments
                            </a>
                        </div>
                        <span className="tags">Tags:
                            <span className="article-tag tag-eclipse">Eclipse</span>
                        </span>
                    </div>
                    <div className="article-row">
                        <div>
                            <a href="/articles/unix-view-and-kill-process-by-port.html" className="article-title">
                                Unix: How to View and Kill Processes Running on a Specific Port
                            </a>
                        </div>
                        <span className="tags">Tags:
                            <span className="article-tag tag-linux">Unix</span>
                        </span>
                    </div>
                    <div className="article-row">
                        <div>
                            <a href="/articles/in-memory-authentication-in-spring.html" className="article-title">
                                In-Memory Authentication in Spring
                            </a>
                        </div>
                        <span className="tags">Tags:
                            <span className="article-tag tag-java">Java</span>
                            <span className="article-tag tag-spring">Spring</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesPage;

