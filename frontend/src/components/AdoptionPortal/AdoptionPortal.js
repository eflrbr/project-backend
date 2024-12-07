import React, { useState, useEffect } from 'react';
import './AdoptionPortal.css'; // Import the CSS file

function AdoptionPortal() {
  const [adoptablePets, setAdoptablePets] = useState([]);
  const [newPet, setNewPet] = useState({ name: '', breed: '', age: '', shelter: '', image: '', description: '' });

  // Replace the fetch call with mock data for now
  useEffect(() => {
    // Mock data for pets (this will simulate the backend data)
    const mockPets = [
      { id: 1, name: 'Bella', breed: 'Labrador', age: 3, shelter: 'Happy Paws Shelter', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBU6snTCr31gejiVW9IToA617pq5phGSD11-abOb9T-M3qH4C0oUK4etTAuSW-x9K64_qFSAwejzmoqrs3OA0XA', description: 'Bella is a playful Labrador with a love for adventure. She enjoys being around people and other dogs.' },
      { id: 2, name: 'Charlie', breed: 'Beagle', age: 2, shelter: 'Paws & Claws Shelter', image: 'https://www.dogster.com/wp-content/uploads/2024/03/kerry-beagle-lying-on-the-grass_DannyWalshm-Shutterstock-e1666052141642.jpg', description: 'Charlie is a curious Beagle who loves to explore. He is friendly and gets along well with children and other pets.' },
      { id: 3, name: 'Max', breed: 'Golden Retriever', age: 4, shelter: 'Furry Friends Shelter', image: 'https://heronscrossing.vet/wp-content/uploads/Golden-Retriever-1024x683.jpg', description: 'Max is a gentle Golden Retriever. He is well-trained, loves long walks, and is a perfect family companion.' },
    ];

    setAdoptablePets(mockPets);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleAddPet = () => {
    const newPetWithId = { ...newPet, id: adoptablePets.length + 1 }; // Simulate adding an ID
    setAdoptablePets([...adoptablePets, newPetWithId]); // Add to the state without re-fetching
    setNewPet({ name: '', breed: '', age: '', shelter: '', image: '', description: '' }); // Reset form fields
  };

  const handleDeletePet = (petId) => {
    setAdoptablePets(adoptablePets.filter(pet => pet.id !== petId)); // Remove from the state
  };

  return (
    <div className="container">
      <h2>Adopt a Pet</h2>
      <div className="row">
        {adoptablePets.map((pet) => (
          <div key={pet.id} className="col-md-6">
            <div className="card home-card">
              <div className="card-content">
                <div className="card-info">
                  <h5 className="card-title">{pet.name} ({pet.breed})</h5>
                  <p><strong>Age:</strong> {pet.age}</p>
                  <p><strong>Shelter:</strong> {pet.shelter}</p>
                  <p><strong>Description:</strong> {pet.description}</p>
                  <button className="btn btn-danger" onClick={() => handleDeletePet(pet.id)}>Delete</button>
                </div>
                <img src={pet.image} alt={pet.name} className="card-img" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="form-section">
        <h3>Add New Pet</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newPet.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter pet's name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              name="breed"
              id="breed"
              value={newPet.breed}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter pet's breed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={newPet.age}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter pet's age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="shelter">Shelter</label>
            <input
              type="text"
              name="shelter"
              id="shelter"
              value={newPet.shelter}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter shelter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              value={newPet.image}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter pet image URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={newPet.description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter pet's description"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddPet}>Add Pet</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionPortal;
