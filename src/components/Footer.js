
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Footer() {
    return (
        <div>
            <footer className="part">
        <div className="foot">
            <div className="v1"><img src="Assets/5f735864d7cb32b0e040afd8_webclip.jpg"/> </div>
            <div className="templates"><ul>
                <li><a href="#" className="title">TEMPLATE</a></li>
                <li><a href="#" className="desc">Midnight</a></li>
                <li><a href="#" className="desc">Pico</a></li>
                <li><a href="#" className="desc">Subperb</a></li>
                <li><a href="#" className="desc">Wonder</a></li>
            </ul></div>
            <div className="company">         
                <ul>
                    <li><a href="#" className="title">COMPANY</a></li>
                    <li><a href="#" className="desc">About us</a></li>
                    <li><a href="#" className="desc">Contact us</a></li>
                    <li><a href="#" className="desc">Privacy policy</a></li>
                    <li><a href="#" className="desc">Terms of service</a></li>
                </ul>
            </div>
            <div className="prdt">
                <ul>
                    <li><a href="#" className="title">PRODUCT</a></li>
                    <li><a href="#" className="desc">Blog</a></li>
                    <li><a href="#" className="desc">Home</a></li>
                    <li><a href="#" className="desc">How it works</a></li>
                    <li><a href="#" className="desc">Pricing</a></li>
                </ul>
            </div>
            <div className="v2"><img src="Assets/5f735864d7cb32b0e040afd8_webclip.jpg"/> </div>
        </div>
        <div className="end">Designed and developed by <a href="#" className="end2">flowyak </a> | Powered by<a href="#" className="end2"> Webflow</a> | <a href="#" className="end2">Licensing</a></div>
     </footer>
        </div>
    )
}

export default Footer
