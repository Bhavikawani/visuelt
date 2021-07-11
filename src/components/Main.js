
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Main() {
    return (
        <div>
            <div className="part">
            <div className="">
                <h1 className="bold bold1">Visuelt is a modern <span className="new2">template for startups.</span></h1>
                <p className="grey">
                    Kickstart your next project and grow your revenue with this high-<span className="new">converting, beautifully crafted template.</span>
                </p>
            </div>
        
        <div className="buttons">
            <a href="#" className="button2">BUY TEMPLATE</a>
            <a href="#" className="button3">GET IN TOUCH</a>
        </div>
        </div>
   
   
         <div className="part sec2">
             <div className="para">
               <h2 className="bold bold2">Get your project running. Fast.</h2>
               <p className="grey grey2">Kickstart your next project and grow your revenue without breaking a sweat. Just add your content to this professionally designed templates and you are ready to go.</p>
               <div className="bn"> <a href="#" className="button2 button4">BUY TEMPLATE</a></div>
            </div>
            <div className="b">
              <img className="img2" src="Assets/5f79e6079f88ca9f52dea0bd_Visuelt_ill_3.svg" alt=""/></div>
            </div>
   
        <div className="part sec3">
            <div className="shadow"><img className="img3" src="Assets/5f7add9c19656d4650ee154a_testimonial (1)-p-500.jpeg" alt=""/></div>
           <div className="space"> <p className="bold3">The best money I have spent in my life. We saw a 120% increase in conversion rates and doubled revenue in three hours.</p>
             <p className="grey aaa"><span className="temp">No One Ever</span> CEO & Founder</p>
            </div>
        </div>
  
        <div className="part logos">
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs none disp" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs none disp" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs none disp2" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
            <img className="imgs none disp2" src="Assets/5f71eecfe96c966fa19b55fb_logo3.png" alt=""/>
        </div>
   
    <section className="last">
        <div className="sec part">
            <div className="left">
            <h2 className="bold4">Ready to get started?</h2>
            <p className="grey grey3">Kickstart your next project and grow your revenue with this high-converting, beautifully crafted template.</p>
            </div><div className="bn1">
            <a href="#" className="button2 bg">BUY TEMPLATE</a></div>
        </div>
    </section>
        </div>
    )
}

export default Main
