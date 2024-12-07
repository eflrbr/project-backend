import React, { useState, useEffect } from 'react';
import './EventCalendar.css'; // Import the CSS file

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '', mapUrl: '' });

  // Replace the fetch call with mock data for now
  useEffect(() => {
    // Mock data for events (this simulates the backend data)
    const mockEvents = [
      { id: 1, name: 'Adopt-a-thon', date: '2024-12-15', location: 'City Park', mapUrl: 'https://www.google.com/maps?q=City+Park' },
      { id: 2, name: 'Pet Health Expo', date: '2024-12-20', location: 'Downtown Convention Center', mapUrl: 'https://www.google.com/maps?q=Downtown+Convention+Center' },
      { id: 3, name: 'Puppy Playdate', date: '2024-12-25', location: 'Bark Park', mapUrl: 'https://www.google.com/maps?q=Bark+Park' },
    ];

    setEvents(mockEvents);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    const newEventWithId = { ...newEvent, id: events.length + 1 }; // Simulate adding an ID
    setEvents([...events, newEventWithId]); // Add to the state without re-fetching
    setNewEvent({ name: '', date: '', location: '', mapUrl: '' }); // Reset form fields
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId)); // Remove from the state
  };

  return (
    <div className="container">
      <h2>Event Calendar</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-6">
            <div className="card home-card">
              <div className="card-content">
                <div className="card-info">
                  <h5 className="card-title">{event.name}</h5>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <button className="btn btn-danger" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>
                <div className="card-map">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(event.location)}&key=AIzaSyD3FNJm5wrbfvPSb27f0CRHrBsF9EYHnyY`}
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Event Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="form-section">
        <h3>Add New Event</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newEvent.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter event name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Event Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={newEvent.location}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter event location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mapUrl">Map URL (Google Maps)</label>
            <input
              type="text"
              name="mapUrl"
              id="mapUrl"
              value={newEvent.mapUrl}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Google Maps URL for event location"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
        </form>
      </div>
    </div>
  );
}

export default EventCalendar;
