import styles from './style.js';
import React, {useState, useRef, useEffect} from 'react';
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, Popup} from './components';

const App = () => {

  const [showPopup, setShowPopup] = useState(false);
  
  const handleBillingButtonClick = () => {
    console.log(showPopup)    
    setShowPopup((prev) => !prev);
    
  };


  return (
  <div className="bg-primary w-full overflow-hidden" >
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`} >
        <Hero buttonClick={handleBillingButtonClick}/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}` } >
        <Stats />   
        <Business buttonClick={handleBillingButtonClick}/>     
        <Billing />
        <CardDeal buttonClick={handleBillingButtonClick}/>
        <Testimonials />
        <Clients />
        
      </div>
      {showPopup && (
        <div className='popupBackground'>
          <Popup buttonClick={handleBillingButtonClick}/>
        </div>
      )}
    </div>
    
  </div>
)};

export default App;