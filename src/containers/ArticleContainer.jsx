import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Article from '../components/Article';

class ArticleContainer extends Component {
    render() {
        return (
            <Switch>
                <Route path='/articles/:title' component={Article}/>
            </Switch>
        )
    }
}

export default ArticleContainer;
