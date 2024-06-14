import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';

import place1 from './images/pinelake1.jpg';
import place2 from './images/pinelake2.jpg';
import place3 from './images/pinelake3.jpg';
import place4 from './images/pinelake4.jpg';
import place5 from './images/pinelake5.jpg';
import place6 from './images/pinelake6.jpg';
import place7 from './images/pinelake7.jpg';
import place8 from './images/pinelake8.jpg';
import place9 from './images/pinelake9.jpg';
import place10 from './images/pinelake10.jpg';

import July4 from './images/4th.png';
import Julina from './images/julina.png';
import Costume from './images/costume.png';


import Pay from './images/pay.png';
import Communicate from './images/communicate.png';
import Signup from './images/signup.png';

import Instagram from './images/instagram.png';
import Whatsapp from './images/whatsapp.png';

import BibleChurch from './images/biblechurch white.png';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <section className='home-page' id='home'>
	  <a href="https://www.google.com/maps?sca_esv=0517884da1645327&sxsrf=ADLYWII_FFSlRTpo_zTgn2SBMw__Dyw4Eg:1718288074980&iflsig=AL9hbdgAAAAAZmsM2i7EUWg4eZsg1V5TCEskFW5WTCT-&gs_lp=Egdnd3Mtd2l6IgpwaW5lIGxha2UgKgIIADILEC4YgAQYxwEYrwEyDhAuGIAEGMcBGI4FGK8BMgUQLhiABDILEC4YgAQYsQMYgwEyDhAuGIAEGMcBGJgFGK8BMgsQABiABBixAxiDATILEC4YgAQYxwEYrwEyCxAuGIAEGMcBGK8BMgUQLhiABDILEC4YgAQYxwEYrwFIhGFQ-gZYulRwDHgAkAEAmAGaAaAB3hOqAQQ0LjE5uAEDyAEA-AEBmAIjoAL6FagCCsICBxAjGCcY6gLCAhcQLhiABBiRAhixAxjRAxiDARjHARiKBcICERAAGIAEGJECGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQABiABBixA8ICChAjGIAEGCcYigXCAgsQABiABBiRAhiKBcICCxAuGIAEGLEDGNQCwgIFEAAYgATCAgoQABiABBhDGIoFwgIIEC4YgAQYsQPCAg4QLhiABBixAxiDARiKBcICDhAuGIAEGLEDGNEDGMcBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIREC4YgAQYkQIYxwEYigUYrwHCAg4QABiABBixAxiDARiKBcICEBAAGIAEGLEDGEMYgwEYigXCAhQQLhiABBixAxiDARjHARiKBRivAcICCxAuGIAEGNEDGMcBmAMKkgcFMTUuMjCgB6rWAg&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KTVD_gj97OeIMSiOSkn7IL1S&daddr=21725+FL-33,+Groveland,+FL+34736">
    	    <div className='location'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" version="1.1" viewBox="0 0 1200 1200">
 	      <path d="m600 0c-224.47 0-406.45 181.98-406.45 406.44 0 4.8125 0.14453 9.707 0.35938 14.652 1.5234 42.695 9.5742 83.699 23.27 122.06 86.711 285.02 382.82 656.84 382.82 656.84s296.07-371.79 382.8-656.81c13.715-38.363 21.758-79.402 23.27-122.1 0.23828-4.9453 0.37109-9.8281 0.37109-14.652 0.011719-224.46-181.97-406.44-406.44-406.44zm0 605.51c-109.93 0-199.07-89.137-199.07-199.07 0-109.92 89.137-199.05 199.07-199.05 109.95 0 199.07 89.137 199.07 199.05 0 109.93-89.121 199.07-199.07 199.07z" fill="white"/>
	      </svg> 
	      <h3>Pine Lake Retreat</h3>
	    </div>
	  </a>	 
          <h2>WELCOME TO<br/>VERTICAL CAMP<br/>2024!</h2>
	  <p>Embark on a transformative journey on this  3-night retreat designed to deepen your faith and foster lasting connections. Come and be a part of our vibrant Christian community where faith and fellowship flourish.</p>
	  <div className='photo-slider'>
	    <div className='slide-track'>
	      <div className='slide'>
                <img src={place1} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place2} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place3} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place4} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place5} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place6} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place7} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place8} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place9} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place10} alt="Pine Lake Retreat"/>
              </div>
              <div className='slide'>
                <img src={place1} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place2} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place3} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place4} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place5} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place6} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place7} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place8} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place9} alt="Pine Lake Retreat"/>
              </div>
	      <div className='slide'>
                <img src={place10} alt="Pine Lake Retreat"/>
              </div>
	    </div>
          </div>
	  <h3>When: July 4th-7th</h3>
        </section>
        <section className='theme-nights' id='themedNights'>
          <h2>Themed Nights</h2>
          <p id='description'>Get ready for endless fun! Join us for three unforgettable nights of themed parties. Don't forget to bring your best outfit for each night!</p>
	  <div className='night'>
            <img src={July4} alt="Pine Lake Retreat"/>
	    <div className='night-info'>
              <h3>4th of july</h3>
              <p>Celebrate Independence Day with a spectacular fireworks display and patriotic festivities!</p>
	    </div>
	  </div>
          <div className='night'>
            <div className='night-info opposite'>
              <h3>Juline Party</h3>
              <p> Immerse yourself in the vibrant traditions of Brazil with delicious food, lively music, and festive dance!</p>
	    </div>
            <img src={Julina} alt="Pine Lake Retreat"/>
	  </div>
          <div className='night'>
            <img src={Costume} alt="Pine Lake Retreat"/>
	    <div className='night-info'>
              <h3>Costume Party</h3>
              <p>Unleash your creativity and join us for an unforgettable night of imaginative costumes and exciting fun!</p>
	    </div>
	  </div>
		
        </section>
        <section className='what-to-bring' id='whatToBring'>
          <h2>What to Bring:</h2>
          <p>To make sure you have an amazing time at our camp, here’s a list of essentials you’ll need to pack:</p>
          <div className= 'items'>
   	    <ul>
              <li>repelant</li>
              <li>bible</li>
              <li>lantern</li>
              <li>personal hygine items</li>
              <li>everyday clothing</li>
              <li>swimwear</li>
              <li>towels</li>
              <li>bed sheets, pillow, blanket</li>
              <li>clothing for each themed night</li>
            </ul>
	  </div>
        </section>
        <section className='our-info-pay' id='howToJoin'>
          <h2>Ready to Join Us?!</h2>
          <p>We’re thrilled that you’re considering joining us for an unforgettable camp experience! Here’s how you can secure your spot:</p>
	  <div className= 'steps-to-join'>
	    <img src={Signup} alt="Sign Up To Vertical Camp 2024"/>
            <div>
              <h3>sign up</h3>
              <p>Complete the <a style={{textDecoration: 'underline', color: '#fbdd00'}}>Google Form</a> to register. If you are under 18, please have a parent complete the form. </p>
            </div>
          </div>
	  <div className= 'steps-to-join'>
	    <img src={Pay} alt="Pay with Zelle Vertical Camp 2024"/>
            <div>
              <h3>make payment</h3>
              <p>Send a payment of $175 through  <a style={{textDecoration: 'underline', color: '#fbdd00'}}>Zelle to (407) 813-3750.</a> This fee includes food, all three nights of stay, and activities. Please make sure to include your name and Vertical Camp. Ex: Joe Smith, Vertical Camp 2024 </p>
            </div>
          </div>
	  <div className= 'steps-to-join'>
	    <img src={Communicate} alt="Join Meeting For Vertical Camp 2024"/>
            <div>
              <h3>participate at mandatory meeting</h3>
              <p>We’re thrilled that you’re considering joining us for an unforgettable camp experience! Here’s how you can secure your spot:</p>
            </div>
          </div>
	</section>
        <section className='contact' id='contact'>
          <h2>have any questions?</h2>
          <p>We’re here to help!Don’t miss out on this incredible adventure. Secure your spot today and get ready for the best summer ever! Reach out to us: </p>
          <a><div className='reach-out'>
	    <img src={Instagram} alt="Join Meeting For Vertical Camp 2024"/>
            <h3>@_thevertical</h3>
	  </div></a>
          <a><div className='reach-out'>
	    <img src={Whatsapp} alt="Join Meeting For Vertical Camp 2024"/>
            <h3>321 367-5987</h3>
	  </div></a>
        </section>
      <footer>
        <h3>An Event Led and Served by:</h3>
        <img id='bible-church' src={BibleChurch} alt="Join Meeting For Vertical Camp 2024"/>
      </footer>
    </div>
  );
}

export default App;
