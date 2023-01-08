import React, { useContext } from "react";
import "./Portfolio.css";

import Payment_method from './payment_method.pdf';

import { themeContext } from "../../Context";




const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  if (darkMode) {
    console.log('Dark mode is enabled')
  }
  return (
    <>
        
       
                
            <div class="requisites">
                <div class="column1">
                    <h3>Signal Subscription</h3>
                    <div className=" columnbody"> 
                    <ul>
                      
                        <li>Lifetime access to our private signals group</li>
                        
                        <li>10 ready to use proven strategies which we use everyday</li>
                        
                        <li>List of Common Mistakes that most traders make and how to avoid them</li>
                        <li>Much, much more!</li>
                      </ul>
                      <ul>
                        <li>Next Step Explained On your Mail Box</li>

                        </ul>
                      <ul>100$</ul>
                    </div> 
                    <a href={Payment_method} download>
                    <button className="button n-button1">Subscribe</button>
                    </a>
                </div>
                <div class="column1">
                    <h3>Course Subscription</h3>
                    <div className="columnbody">
                    <ul>
                      
                        <li>Lifetime access to our private signals group</li>
                        <li>Complete Forex Course</li>
                        <li>6 ready to use proven strategies which we use everyday</li>
                        <li>Over 30 chart and Candlestick patterns explained step by step</li>
                        <li>Mistakes and Solution to the same</li>
                        
                        
                      </ul>
                      <ul>
                        <li>Next Step Explained On your Mail Box</li>
                      </ul>
                      <ul>100$</ul>
                    </div>
                    <a href={Payment_method} download>
                    <button className="button n-button2">Subscribe</button>
                    </a>
                </div>
                
                <div class="column1">
                    <h3>Step 3</h3>
                    <div className="columnbody">
                                        
                      <ul>
                      
                        <li>Approved binary trading bot</li>
                        <li>Update after 3 days</li>
                        
                      </ul>
                      <ul>
                        <li>Next Step Explained On your Mail Box</li>
                      </ul>
                      <ul >100$</ul>
                    </div>
                    <a href={Payment_method} download>
                    <button className="button n-button3">Subscribe</button>
                    </a>
                    
                    
                </div>
                
            </div>
           
    </>
)
};

export default Portfolio;
