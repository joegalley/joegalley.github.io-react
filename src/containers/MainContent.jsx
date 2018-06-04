import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SoftwarePage from '../components/SoftwarePage';
import ArticlesPage from '../components/ArticlesPage';
import AboutPage from '../components/AboutPage';

class MainContent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={AboutPage}/>
                <Route exact path="/articles" component={ArticlesPage}/>
                <Route exact path="/software" component={SoftwarePage}/>
            </Switch>
        )
    }
}

export default MainContent;
