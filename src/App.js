import logo from './logo.svg';
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


function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <section className='home-page'>
	  <a><h3>Pine Lake Retreat</h3></a>
          <h2>Welcome to Vertical Camp 2024!</h2>
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
	  <h3>When: June 5th-7th</h3>
        </section>
        <section className='theme-nights'>
          <h2>Themed Nights</h2>
          <p>Get ready for endless fun! Join us for three unforgettable nights of themed parties. Don't forget to bring your best outfit for each night!</p>
	  <div className='night'>
            <img src={place7} alt="Pine Lake Retreat"/>
	    <div className='night-info'>
              <h3>4th of july</h3>
              <p>Embark on a transformative journey on this  3-night retreat designed to deepen your faith and foster lasting connections</p>
	    </div>
	  </div>
          <div className='night'>
            <div className='night-info opposite'>
              <h3>4th of july</h3>
              <p>Embark on a transformative journey on this  3-night retreat designed to deepen your faith and foster lasting connections</p>
	    </div>
            <img src={place7} alt="Pine Lake Retreat"/>
	  </div>
          <div className='night'>
            <img src={place7} alt="Pine Lake Retreat"/>
	    <div className='night-info'>
              <h3>4th of july</h3>
              <p>Embark on a transformative journey on this  3-night retreat designed to deepen your faith and foster lasting connections</p>
	    </div>
	  </div>
        </section>
        <section className='what-to-bring'>
          <h2>What to Bring to Vertical Camp:</h2>
          <p>To make sure you have an amazing time at our camp, here’s a list of essentials you’ll need to pack:</p>
          <div className= 'items'>
   	    <ul>
              <li>Repelant</li>
              <li>Bible</li>
              <li>Lantern</li>
              <li>Personal Hygine Items (Toothbrush, toothpaste, sunscreen, deodorant, etc.)</li>
              <li>Everyday clothing (T-shirts, bottoms, underwear, shoes)</li>
              <li>Swimwear</li>
              <li>Towels</li>
              <li>Bed sheets, pillow, blanket</li>
              <li>Clothing for each themed night (4th of July, Juline Party, Costume Party)</li>
            </ul>
	  </div>
        </section>
        <section className='our-info-pay'>
          <h2>Ready to Join Us?!</h2>
          <p>We’re thrilled that you’re considering joining us for an unforgettable camp experience! Here’s how you can secure your spot:</p>

          <h2>Contact Us</h2>
          <p>Have questions or need assistance? We’re here to help! Reach out to us at [Phone Number]</p>
          <p>Don’t miss out on this incredible adventure. Secure your spot today and get ready for the best summer ever!</p>
        </section>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
