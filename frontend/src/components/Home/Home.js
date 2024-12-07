import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <Carousel className="home-carousel" indicators={false} controls={false} interval={3000}>
        {/* First Image: Adopt a Pet */}
        <Carousel.Item>
          <div className="carousel-img-container" style={{ backgroundImage: "url('https://northernvirginiamag.com/wp-content/uploads/2020/07/adopt-a-pet.jpg')" }}>
            <div className="carousel-caption">
              <h3>Adopt a Pet</h3>
              <p>Find your new best friend today.</p>
              <Button className="home-btn" variant="primary" href="/adoption">Start Adopting</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Image: Join Events */}
        <Carousel.Item>
          <div className="carousel-img-container" style={{ backgroundImage: "url('https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg')" }}>
            <div className="carousel-caption">
              <h3>Join Events</h3>
              <p>Connect with other pet lovers at our fun events.</p>
              <Button className="home-btn" variant="primary" href="/events">See Events</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* Third Image: Access Services */}
        <Carousel.Item>
          <div className="carousel-img-container" style={{ backgroundImage: "url('https://www.ovrs.com/blog/wp-content/uploads/2023/08/OVRS-connect-shutterstock_2132259743.jpeg')" }}>
            <div className="carousel-caption">
              <h3>Access Services</h3>
              <p>Find grooming, vet services, and more.</p>
              <Button className="home-btn" variant="primary" href="/services">Find Services</Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Home;
