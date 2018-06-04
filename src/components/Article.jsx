import React, {Component} from 'react';

class Article extends Component {
    render() {
        console.log(this.props.match.params.title);
        return (
            <div>article here</div>
        )
    }
}

export default Article;