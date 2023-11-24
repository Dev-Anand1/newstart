// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import '../components/page.css';

const Home = () => {
  return (
    <div>
   

      <main>
        <div className="image-container">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK85KLRZ-9z10P1sFybiINptwACcChYdOErQ&usqp=CAU' alt='img2' className="image" />

          <div className="text-container">
            <h1 className="image-title">Apulki Devyang Seva Foundation</h1>
            <Link to="/DonateUs" className="donate-us-button">Donate Us</Link>
          </div>
        </div>
      </main>

      <div className="cards">
        <div className="mission-card">
          <h1 className="card-title">Our Mission</h1>
          <p className="card-text">To empower disabled individuals of all ages, irrespective of their background, to support their education, health, and a nurturing community.</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>

        <div className="vision-card">
          <h1 className="card-title">Our Vision</h1>
          <p className="card-text">To create a society where disabled individuals thrive independently, to promote inclusivity, awareness, and compassion, nurturing a more understanding</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>

        <div className="objectives-card">
          <h1 className="card-title">Our Objectives</h1>
          <p className="card-text">To commit to the welfare of disabled individuals, offering therapies and support to facilitate their integration into society and to empower them to achieve</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>
      </div>

      <div className="foundation-container">
        <div className="image-section">
          <img src="data:image/jpeg;base64,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" alt="foundation" className="foundation-image" />
        </div>

        <div className="text-section">
          <p className="welcome-message"> Welcome To </p>
          <h1 className="foundation-title"> Apulki Divyang Seva Foundation </h1>
          <p className="foundation-description">
            Apulki Divyang Seva Foundation is a dedicated non-profit organization founded by a like-minded group of physically challenged persons committed to improving the lives of disabled individuals, with a particular focus on children with autism. Our core mission is to promote the welfare of disabled individuals, irrespective of age, gender, creed, religion, or origin.

            We operate a comprehensive autism therapy center, providing a wide range of therapies to enhance the quality of lives of these differently-abled people.

            Our unwavering commitment is to provide comprehensive support, services, and resources to help divyang individuals become self-sufficient and financially independent.
          </p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>
      </div>

      <div className="activities-container">
        <div className="activity-heading">
          <h4>Apulki Divyang Seva Foundation</h4>
          <h1>Our Recent Activities</h1>
        </div>

        <div className="activity-item">
          <img src="data:image/jpeg;base64,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" alt="altimage" className="activity-image" />
          <h3 className="activity-title">Autism Therapy Centre</h3>
          <p className="activity-description">Apulki Divyang Seva Foundation is committed to improving the lives of disabled children, with a special focus on those with autism.</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>

        <div className="activity-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ajgW47zivFNhBjXKWZJ3f8FnEAo9-UATuw&usqp=CAU" alt="altimage" className="activity-image" />
          <h3 className="activity-title">Different Therapies</h3>
          <p className="activity-description">The importance of therapy in addressing Autism Spectrum Disorder is paramount. At our autism center, we offer a diverse range of therapies</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>

        <div className="activity-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uHjiKT-5skSNO4RYWvLHeywu3K0Xbf5tRQ&usqp=CAU" alt="altimage" className="activity-image" />
          <h3 className="activity-title">Welfare of Disabled</h3>
          <p className="activity-description">As our primary objective is to advocate for the well-being of disabled individuals, regardless of gender, creed, religion, or origin we work tirelessly</p>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>
      </div>

      <div className="seva-foundation-container">
        <div className="seva-foundation-text-section">
          <h3 className="seva-foundation-title">Apulki Divyang Seva Foundation</h3>
          <h3 className="sub-title">Join Your Hand with Us for a Better Life and Future</h3>
          <h3 className="main-description">
            Apulki Divyang Seva Foundation
            Join Your Hand with Us for a Better
            Life and Future
            Join us in our mission to empower disabled individuals and create a more inclusive society. Your support can make a meaningful difference in their lives, helping them thrive independently and lead fulfilling lives. Together, we can foster compassion and understanding.
          </h3>
          <Link to="/Activity" className="learn-more-button">Learn More</Link>
        </div>
      </div>

      <div className="donate-contact-container">
        <div className="donate-section">
          <h1 className="donate-title">Donate Us & Contribute Now</h1>
          <h4 className="donate-description">Your contribution can fuel our mission for positive change. By donating to our cause, you directly support disabled individuals’ empowerment and well-being.</h4>
          <Link to="/DonateUs" className="donate-us-button">Donate Us</Link>
        </div>

        <div className="contact-section">
          <h1 className="contact-title">Contact Us & Get in Touch</h1>
          <h4 className="contact-description">Reach out to us today. We value your input and questions. Contact us for more information, partnerships, or to get involved in our mission for a better world.</h4>
          <Link to="/JoinUs" className="join-us-button">Join Us</Link>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <h1 className="stat-count">214</h1>
          <p className="stat-description">members</p>
        </div>

        <div className="stat-item">
          <h1 className="stat-count">23</h1>
          <p className="stat-description">COMPLETE PROJECT</p>
        </div>

        <div className="stat-item">
          <h1 className="stat-count">15</h1>
          <p className="stat-description">ONGOING ACTIVITIES</p>
        </div>

        <div className="stat-item">
          <h1 className="stat-count">712K</h1>
          <p className="stat-description">DONATION RAISED</p>
        </div>
      </div>

      <div className="activities-container">
        <div className="activity-item">
          <img src="data:image/png;base64,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" alt="altimage" className="activity-image" />
          <h3 className="activity-title">Business Opportunities</h3>
          <p className="activity-description">
            We also aspire to create a society where disabled individuals can thrive independently, free from the need to rely on others for their livelihood.
          </p>
          {/* Use Link component for navigation */}
          <button className="learn-more-button-fp">
            <Link to="/FuturePlan">Learn More</Link>
          </button>
        </div>

        <div className="activity-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnuDK8V0as-1lqrBXAMoIArR1_aYgPxmfUA&usqp=CAU" alt="altimage" className="activity-image" />
          <h3 className="activity-title">Scholarship Provision</h3>
          <p className="activity-description">We will also work to develop a scholarship program dedicated to disabled children and the children of single parents who will show better performance in their academics.</p>
          <button className="learn-more-button-fp">
            <Link to="/FuturePlan">Learn More</Link>
          </button>
        </div>
      </div>

      <div className="president-section">
        <div className="president-image">
          <img src="https://www.apulkidivyangsevafoundation.org.in/wp-content/uploads/2023/11/%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%AF-%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4-%E0%A4%AA%E0%A4%97%E0%A4%A1%E0%A5%87.jpeg" alt="Vijay Pandit Pagade" />
        </div>
        <div className="president-content">
          <p className="foundation-name">Apulki Divyang Seva Foundation</p>
          <h1 className="message-title">President's Message</h1>
          <h4 className="message-content">
            As the President of the Apulki Divyang Seva Foundation, I am deeply committed to our mission of enhancing the lives of disabled individuals. Our foundation is driven by a vision of inclusivity, compassion, and empowerment. We strive to provide therapies, educational support, and opportunities that enable these exceptional individuals to become self-sufficient and integrated members of society. It is our collective responsibility to ensure that disabled people receive the care and opportunities they deserve. We invite you to join us on this journey towards a more compassionate, understanding, and inclusive world. Together, we can make a meaningful difference in the lives of those we serve.
          </h4>
          <p className="president-name">Vijay Pandit Pagade</p>
          <h5 className="president-title">President, Apulki Divyang Seva Foundation</h5>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
