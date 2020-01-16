import React from "react";
import {connect} from "react-redux";
import Slider from "react-slick";
import '../Bottom/bottom.css'

class bottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className="bottom">
                <div className="quote">
                    <div className="quote-day">Quote of the day</div>
                    <div className="quote-text">“It’s a pretty fatalistic thought that you can’t be a profitable and good company.”</div>
                    <div><span className="quote-author">Josh Silverman</span>, CEO of Etsy</div>
                </div>
                <div className="bottom-nav">
                    <div>FORBES SOCIAL MEDIA</div>
                    <div className="bottom-nav-text">Feeding your feed with success.</div>
                    <div>
                        <img className="bottom-nav-img" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                        <img className="bottom-nav-img" src="http://plusodin.info/wp-content/themes/sg-template/img/vk.png"/>
                        <img className="bottom-nav-img" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                        <img className="bottom-nav-img" src="https://i.ya-webdesign.com/images/black-facebook-icon-png.png"/>
                        <img className="bottom-nav-img" src="https://www.pngitem.com/pimgs/m/11-114651_youtube-dark-png-youtube-icon-vector-transparent-png.png"/>
                    </div>
                </div>
                <hr/>

                <div className="bottom-images">
                    {/*<div><</div>*/}
                    {/*<div><img className="bottom-image bottom-image-2" src="https://virsec.com/wp-content/uploads/2020/01/bitcoin-block-chain-400x174.jpg" alt="img2"/></div>*/}
                    {/*<div><img className="bottom-image bottom-image-2" src="https://s.yimg.com/uu/api/res/1.2/nxWnWPEn_gmbftYEHjS6KQ--~B/aD0xMjQ0O3c9MTI5NjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/65c74c5ba989dc68e728f032412a443b" alt="img3"/></div>*/}
                </div>
                <div>
                    <h2> Multiple items </h2>
                    <Slider {...settings}>
                        <div>
                            <img className="bottom-image" src="https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/01/cybersecurity.jpg?fit=600%2C336&ssl=1" alt="img1"/>

                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://virsec.com/wp-content/uploads/2020/01/bitcoin-block-chain-400x174.jpg" alt="img2"/>
                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://s.yimg.com/uu/api/res/1.2/nxWnWPEn_gmbftYEHjS6KQ--~B/aD0xMjQ0O3c9MTI5NjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/65c74c5ba989dc68e728f032412a443b" alt="img3"/>
                        </div>
                        <div>
                            <img className="bottom-image" src="https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/01/cybersecurity.jpg?fit=600%2C336&ssl=1" alt="img1"/>

                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://virsec.com/wp-content/uploads/2020/01/bitcoin-block-chain-400x174.jpg" alt="img2"/>
                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://s.yimg.com/uu/api/res/1.2/nxWnWPEn_gmbftYEHjS6KQ--~B/aD0xMjQ0O3c9MTI5NjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/65c74c5ba989dc68e728f032412a443b" alt="img3"/>
                        </div>
                        <div>
                            <img className="bottom-image" src="https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/01/cybersecurity.jpg?fit=600%2C336&ssl=1" alt="img1"/>

                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://virsec.com/wp-content/uploads/2020/01/bitcoin-block-chain-400x174.jpg" alt="img2"/>
                        </div>
                        <div>
                            <img className="bottom-image bottom-image-2" src="https://s.yimg.com/uu/api/res/1.2/nxWnWPEn_gmbftYEHjS6KQ--~B/aD0xMjQ0O3c9MTI5NjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/65c74c5ba989dc68e728f032412a443b" alt="img3"/>
                        </div>
                    </Slider>
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
export default connect(mapStateTOProps)(bottom);
