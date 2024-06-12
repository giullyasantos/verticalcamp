import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <section className='home-page'>
          <p>Welcome</p>
        </section>
        <section className='theme-nights'>
          <h2>Themed Nights</h2>
          <p>Get ready for endless fun! Join us for three unforgettable nights of themed parties. Don't forget to bring your best outfit for each night!</p>

        </section>
        <section className='what-to-bring'>
          <h2>What to Bring to Vertical Camp:</h2>
          <p>To make sure you have an amazing time at our camp, here’s a list of essentials you’ll need to pack:</p>
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
        </section>
        <section className='location'>
          <h2>Camp Location:</h2>
          <p>Our camp is nestled in the beautiful <a id='location'>Pine Lake Retreat</a>, providing the perfect backdrop for adventure and fun.</p>
          <a>Pine Lake Retreat, 21725 FL-33, Groveland, FL 34736</a>
          <div className='photo-slider'>
            <div className='slide-track'>
              <div className='slide'>
                 <img/>
              </div>



            </div>          
          </div>
        </section>
        <section className='our-info-pay'>
          <h2>Ready to Join the Adventure? Here’s How to Secure Your Spot!</h2>
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
