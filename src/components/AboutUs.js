// AboutUs.js

import React from 'react';
import '../components/aboutUS.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="section-heading">
        <h1>ABOUT US</h1>
        <h3>APULKI DIVYANG SEVA FOUNDATION</h3>
      </div>

      <div className="content-container">
        <div className="who-we-are">
          <h2 className="who-we-are-title">WHO WE ARE</h2>
          <h4 className="foundation-title">APULKI DIVYANG SEVA FOUNDATION</h4>
          <p className="foundation-description">
            Apulki Divyang Seva Foundation is a dedicated non-profit organization founded by a like-minded group of physically challenged persons committed to improving the lives of disabled individuals, with a particular focus on children with autism. Our core mission is to promote the welfare of disabled individuals, irrespective of age, gender, creed, religion, or origin. According to the Rights of Persons with Disabilities Act 201, there are 21 types of disability.
          </p>
        </div>

        <div className="types-of-disabilities">
          <h4 className="disabilities-title">Types of Disabilities</h4>
          <p className="disabilities-list">
            <span>1. Blindness</span>
            <span>2. Low-vision</span>
            <span>3. Hearing Impairment (deaf and hard of hearing)</span>
            <span>4. Speech and Language disability</span>
            <span>5. Locomotor Disability</span>
            <span>6. Mental Illness</span>
            <span>7. Specific Learning Disabilities</span>
            <span>8. Cerebral Palsy</span>
            <span>9. Autism Spectrum Disorder</span>
            <span>10. Multiple Disabilities including Deafblindness</span>
            <span>11. Leprosy Cured persons</span>
            <span>12. Dwarfism</span>
            <span>13. Intellectual Disability-</span>
            <span>14. Muscular Dystrophy</span>
            <span>15. Chronic Neurological conditions</span>
            <span>16. Multiple Sclerosis</span>
            <span>17. Thalassemia</span>
            <span>18. Hemophilia</span>
            <span>19. Sickle Cell Disease</span>
            <span>20. Acid Attack victim</span>
            <span>21. Parkinson’s disease</span>
          </p>
        </div>
      </div>

      <div className="card-container">
  <div className="mission-card">
    <h1 className="card-heading">MISSION</h1>
    <img src=''/>
    <p className="card-description">To empower disabled individuals of all ages, irrespective of their background, to support their education, health, and a nurturing community, fostering their independence and a higher quality of life.</p>
    <button className="explore-btn">Explore</button>
  </div>

  <div className="vision-card">
    <h1 className="card-heading">VISION</h1>
    <p className="card-description">To create a society where disabled individuals thrive independently, to promote inclusivity, awareness, and compassion, nurturing a more understanding</p>
    <button className="explore-btn">Explore</button>
  </div>

  <div className="objectives-card">
    <h1 className="card-heading">OBJECTIVES</h1>
    <p className="card-description">To commit to the welfare of disabled individuals, offering therapies and support to facilitate their integration into society and to empower them to achieve</p>
    <button className="explore-btn">Explore</button>
  </div>
</div>


    </div>
  );
}

export default AboutUs;
