import React from 'react'
import {connect} from "react-redux";
import '../Sidebar/sidebar.css'

class sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopular: true
        }
    }
    popularClick = () => {
        this.setState({isPopular: true})
    };
    editClick = () => {
        this.setState({isPopular: false})
    };
    render() {
        const articles = this.props.articles;
        return (
            <div className="sidebar">
                <div className="sidebar-top">
                    <div className="popular" onClick={this.popularClick}>Popular</div>
                    <div className="editor" onClick={this.editClick}>Editor's Picks</div>
                </div>
                {
                    this.state.isPopular && <div className="pop_titles">
                        <ul>
                            {articles.slice(0,5).map(article =>
                                <li>{article.title}</li>
                            )}
                        </ul>
                    </div>
                }
                {
                    !this.state.isPopular && <div className="pop_titles">
                        <ul>
                            {articles.slice(3,8).map(article => (
                                    <li>
                                        {article.title}
                                        <div className="picks">
                                            <span>By </span>
                                            <a>{article.author}</a>
                                            <span>Forbes Staff</span>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
const mapStateTOProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateTOProps)(sidebar);
