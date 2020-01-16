import React from "react";
import '../Header/header.css';
import '../../images/search.jpg'

const header = () => {
    return (
        <div className="header">
            <div className="forbes-icon">Forbes</div>
            <div>
                <ul className="navbar">
                    <li>Billionaires</li>
                    <li>Innovation</li>
                    <li>Leadership</li>
                    <li>Money</li>
                    <li>Business</li>
                    <li>Small Business</li>
                    <li>Lifestyle</li>
                    <li>Lists</li>
                    <li>Advisor</li>
                    <li>Featured</li>
                    <li>Breaking</li>
                    <li>More</li>
                </ul>
            </div>
            <div>
                <img className="search" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX15287127.jpg" alt="search"/>
            </div>
        </div>
    )
};
export default header;
