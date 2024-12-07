import React, { useState, useEffect } from 'react';
import './EventCalendar.css'; // Import the CSS file

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '' });

  // Replace the fetch call with mock data for now
  useEffect(() => {
    // Mock data for events (this simulates the backend data)
    const mockEvents = [
      { id: 1, name: 'Adopt-a-thon', date: '2024-12-15', location: 'City Park' },
      { id: 2, name: 'Pet Health Expo', date: '2024-12-20', location: 'Downtown Convention Center' },
      { id: 3, name: 'Puppy Playdate', date: '2024-12-25', location: 'Bark Park' }
    ];

    setEvents(mockEvents);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    // Simulate adding a new event by appending it to the state
    const newEventWithId = { ...newEvent, id: events.length + 1 }; // Simulate adding an ID
    setEvents([...events, newEventWithId]); // Add to the state without re-fetching
    setNewEvent({ name: '', date: '', location: '' }); // Reset form fields
  };

  const handleDeleteEvent = (eventId) => {
    // Remove event from the state
    setEvents(events.filter(event => event.id !== eventId)); // Remove from the state
  };

  return (
    <div className="container">
      <h2>Event Calendar</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>{event.name}</h5>
              </div>
              <div className="card-body">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
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
              placeholder="Enter event date"
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
          <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
        </form>
      </div>
    </div>
  );
}

export default EventCalendar;
