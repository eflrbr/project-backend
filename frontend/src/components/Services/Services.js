import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Services.css'; // Import the CSS file

function Services() {
  const services = [
    {
      name: 'Happy Paws Grooming',
      type: 'Groomer',
      contact: '123-456-7890',
      image: 'https://www.petangel.com.au/wp-content/uploads/2022/06/Pet-Angel-Blog-2022-14-1080x648.png',
      description: 'Professional grooming services for your furry friends to keep them looking their best!',
      website: 'https://www.happypawsgrooming.com'
    },
    {
      name: 'VetCare Clinic',
      type: 'Veterinarian',
      contact: '987-654-3210',
      image: 'https://www.shutterstock.com/image-photo/portrait-mature-veterinarian-listening-heartbeat-260nw-1921637876.jpg',
      description: 'Comprehensive veterinary care to keep your pet healthy and happy.',
      website: 'https://www.vetcareclinic.com'
    },
    {
      name: 'Pet Sitters Co.',
      type: 'Pet Sitter',
      contact: '555-555-5555',
      image: 'https://images.ctfassets.net/sfnkq8lmu5d7/3gojkVyhL0j8n7fAcMZytq/974242651bafa7d4ef101e8e70feb340/The-Wildest_Editorial_Dog_Stretches_for_Dogs_With_Painful_Conditions_Hero.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg',
      description: 'Reliable pet sitting services while you are away, ensuring your pet is well taken care of.',
      website: 'https://www.petsittersco.com'
    },
    {
      name: 'Paws & Claws Boarding',
      type: 'Boarding',
      contact: '444-444-4444',
      image: 'https://blog.skoutshonor.com/hubfs/should-i-be-cleaning-my-dog-s-paws-what-to-know-skout-s-honor_520x500.webp',
      description: 'Comfortable boarding options for your pets with 24/7 care and attention.',
      website: 'https://www.pawsandclawsboarding.com'
    },
    {
      name: 'Furry Friends Walking',
      type: 'Dog Walking',
      contact: '222-222-2222',
      image: 'https://www.petbusinessinsurance.co.uk/img/0-featured-male-dog-walker-taking-three-dogs-for-a-walk-in-the-park.jpg',
      description: 'Fun and engaging dog walking services to keep your pup active and healthy.',
      website: 'https://www.furryfriendswalking.com'
    }
  ];

  return (
    <div className="container">
      <h2 className="services-heading">Pet Services</h2>
      <p className="services-description">Explore a variety of pet services including grooming, veterinary care, pet sitting, and more!</p>
      <Row className="service-cards">
        {services.map((service, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src={service.image} alt={`${service.name} Image`} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {service.type}
                  <br />
                  <strong>Description:</strong> {service.description}
                  <br />
                  <strong>Contact:</strong> <a href={`tel:${service.contact}`} className="service-contact">{service.contact}</a>
                </Card.Text>
                <Button variant="primary" href={`tel:${service.contact}`}>Contact Now</Button>
                {' '}
                <Button variant="link" href={service.website} target="_blank" className="service-link">Visit Website</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
