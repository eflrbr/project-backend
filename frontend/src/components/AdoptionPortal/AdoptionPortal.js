import React, { useState, useEffect } from 'react';
import './AdoptionPortal.css'; // Import the CSS file

function AdoptionPortal() {
  const [adoptablePets, setAdoptablePets] = useState([]);
  const [newPet, setNewPet] = useState({ name: '', breed: '', age: '', shelter: '' });

  // Replace the fetch call with mock data for now
  useEffect(() => {
    // Mock data for pets (this will simulate the backend data)
    const mockPets = [
      { id: 1, name: 'Bella', breed: 'Labrador', age: 3, shelter: 'Happy Paws Shelter' },
      { id: 2, name: 'Charlie', breed: 'Beagle', age: 2, shelter: 'Paws & Claws Shelter' },
      { id: 3, name: 'Max', breed: 'Golden Retriever', age: 4, shelter: 'Furry Friends Shelter' },
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
    setNewPet({ name: '', breed: '', age: '', shelter: '' }); // Reset form fields
  };

  const handleDeletePet = (petId) => {
    setAdoptablePets(adoptablePets.filter(pet => pet.id !== petId)); // Remove from the state
  };

  return (
    <div className="container">
      <h2>Adoption Portal</h2>
      <div className="row">
        {adoptablePets.map((pet) => (
          <div key={pet.id} className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>{pet.name} ({pet.breed})</h5>
              </div>
              <div className="card-body">
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Shelter:</strong> {pet.shelter}</p>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeletePet(pet.id)}>Delete</button>
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
          <button type="button" className="btn btn-primary" onClick={handleAddPet}>Add Pet</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionPortal;
