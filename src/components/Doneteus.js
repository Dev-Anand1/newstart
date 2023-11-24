import React from 'react';
import '../components/Donetus.css';

function DonetUs() {
  return (
    <div className="donate-us-container">
      <div className="donate-us-header">
        <h1>DONATE US</h1>
        <h3>APULKI DIVYANG SEVA FOUNDATION</h3>
      </div>

      <div className="donate-us-section">
        <div className="donate-us-info">
          <h2>CONTRIBUTE US</h2>
          <h4>Your contribution can fuel our mission for positive change. By donating to our cause, you directly support disabled individuals’ empowerment and well-being. Your generosity enables us to provide essential therapies, education, and opportunities, fostering independence and a more inclusive society. Together, we can make a significant impact.</h4>
        </div>
   

        <div className="donate-us-bank-info">
          <div>
            <h2>Bank Information</h2>
            <p>Bank Name: Pune District Central Cooperative Bank Limited</p>
            <p>Branch Name: Bhosari</p>
            <p>Account No: 152001600000390</p>
            <p>IFSC Code: HDFC0CPD152</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonetUs;
