import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About PetConnect</h1>
        <p>Welcome to PetConnect, your one-stop platform for all things pets: adoption, events, services, and more!</p>
      </section>

      <section className="about-mission">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At PetConnect, we believe in connecting pet lovers with furry friends who need a home. Our mission is to 
            provide a safe and friendly platform for adopting pets, finding services, and connecting with the pet 
            community through events.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw="
            alt="PetConnect Mission"
          />
        </div>
      </section>

      <section className="about-gallery">
        <h2>Meet Our Furry Friends</h2>
        <p>Here are some of our adorable pets who are looking for their forever home!</p>
        <div className="gallery">
          <div className="gallery-item">
            <img src="https://www.harmonyanimalhospital.net/wp-content/uploads/2016/03/Happy-puppy-copy.jpeg" alt="Dog 1" />
          </div>
          <div className="gallery-item">
            <img src="https://blog.bravecto.co.za/wp-content/uploads/sites/47/2021/04/10-Tips-To-Socialise-Your-Puppy.jpg" alt="Dog 2" />
          </div>
          <div className="gallery-item">
            <img src="https://latchkeypets.com/wp-content/uploads/healthy-happy-puppy.jpg" alt="Dog 3" />
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at <a href="mailto:contact@petconnect.com">contact@petconnect.com</a>.</p>
      </section>
    </div>
  );
}

export default About;
