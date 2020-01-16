import React from "react";
import {connect} from "react-redux";
import Left from '../Left/left';
import Sidebar from '../Sidebar/sidebar';
import Bottom from '../Bottom/Bottom';
import '../Body/body.css'

class body extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        // const articles = this.props.articles;
        return (
            <div>
                <div className="main">
                    <div className="top">
                        <div className="forbes-now">Forbes Now</div>
                        <div className="asia">Asia Edition</div>
                    </div>
                    <hr/>
                    <div>
                        <Left/>
                    </div>
                    <div>
                        <Bottom/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateTOProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateTOProps)(body);
