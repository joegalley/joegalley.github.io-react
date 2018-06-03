import React, {Component} from 'react';
import TopNav from './components/TopNav';
import MainContent from "./containers/MainContent";

class App extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <MainContent />
            </div>
        );
    }
}

export default App;
