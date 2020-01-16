import React from "react";
import {connect} from "react-redux";
import Sidebar from '../Sidebar/sidebar'
import '../Left/left.css';

class left extends React.Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="left">
                <div className="content">
                    <div className="main-content">
                        <img className="main-img" src={articles[0].urlToImage}/>
                        <div className="main-title">{articles[0].title}</div>
                        <div className="main-author">By
                            <span className="author">
                                {articles[0].author}
                            </span>
                            <span className="staff"> Forbes Staff</span>
                        </div>
                        <br/>
                        <div className="main-desc">{articles[6].description}</div>
                        <hr className="hr"></hr>
                    </div>
                    <div className="boxes">
                        <div className="first">
                            <div className="first-image"><img src={articles[1].urlToImage} alt="image"/></div>
                            <div className="Forbes">Forbes</div>
                            <div className="first-title">{articles[1].title}</div>
                            <br/>
                            <div className="first-desc">{articles[1].description}</div>
                        </div>
                        <div className="second">
                            <div className="second-image"><img src={articles[2].urlToImage} alt="image"/></div>
                            <div className="Forbes">Forbes</div>
                            <div className="second-title">{articles[2].title}</div>
                            <br/>
                            <div className="second-desc">{articles[2].description}</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <Sidebar/>
            </div>
        )
    }
}
const mapStateTOProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateTOProps)(left);
