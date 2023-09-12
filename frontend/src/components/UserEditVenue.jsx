import React, { useState, useContext } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';

import '../styles/UserEditVenue.scss';

function UserEditVenue() {
  const { state, closeUserEditVenue } = useContext(DataContext);

  const { isUserEditVenueOpen, eventCategoryData, businessCategoryData } = state;

  const { currentUser, signOut } = useAuth();

  const { isUserAddVenueOpen, closeUserAddVenue } = useContext(DataContext);
  const [venueType, setVenueType] = useState('business');
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async () => {
    try {
        let response;
        if (venueType === "business") {
            response = await axios.post(
                "http://localhost:3001/api/businesses",
                formData
            );
        } else if (venueType === "event") {
            response = await axios.post(
                "http://localhost:3001/api/events", // Assuming the endpoint for events is this, you can replace with the actual one
                formData
            );
        }
        console.log(`${venueType.charAt(0).toUpperCase() + venueType.slice(1)} added:`, response.data);
        closeUserAddVenue(); // Close the modal after a successful submission
    } catch (error) {
        console.error(
            `There was an error submitting the ${venueType}:`,
            error.response ? error.response.data : error.message
        );
    }
};

// Temp business category
const businessCategories = [
  { id: 1, name: "Restaurant" },
  { id: 2, name: "Retail" },
];
  

  if (!isUserEditVenueOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="user-add-venue-modal">
        <div className="venue-type-toggle">
          <button
            onClick={() => {
              setUserEditVenueType('business');
              setSelectedCategory(null);
            }}
          >
            Business
          </button>
          <button
            onClick={() => {
              setUserEditVenueType('event');
              setSelectedCategory(null);
            }}
          >
            Event
          </button>
        </div>




        {userEditVenueType === "business" ? (
            // Business form fields
            <>
              <input
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <input
                name="website"
                placeholder="Website"
                onChange={handleInputChange}
              />

              <div>
                <h5>Select an Business Category:</h5>
                <Select
                  options={businessCategoryOptions}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  onInputChange={handleInputChange}
                  placeholder="Select a business category..."
                />
                {selectedCategory && (
                  <div>
                    <h4>Selected Category:</h4>
                    <p>{selectedCategory.label}</p>
                  </div>
                )}
              </div>


              <div className="branding-section">
                <h4>Branding</h4>
                <input
                  name="bannerImageUrl"
                  placeholder="Banner Image URL"
                  onChange={handleInputChange}
                />
                <input
                  name="badgeImageUrl"
                  placeholder="Badge Image URL"
                  onChange={handleInputChange}
                />
                <input
                  name="pinImageUrl"
                  placeholder="Pin Image URL"
                  onChange={handleInputChange}
                />
              </div>

              <div className="social-media-section">
                <h4>Social Media</h4>
                <input
                  name="twitterLink"
                  placeholder="Twitter Profile URL"
                  onChange={handleInputChange}
                />
                <input
                  name="facebookLink"
                  placeholder="Facebook Profile URL"
                  onChange={handleInputChange}
                />
              </div>

              <div className="location-section">
                <h4>Location</h4>
                <input
                  name="streetAddress"
                  placeholder="Street Address"
                  onChange={handleInputChange}
                />
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleInputChange}
                />
                <input
                  name="region"
                  placeholder="Region"
                  onChange={handleInputChange}
                />
                <input
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleInputChange}
                />
                <input
                  name="country"
                  placeholder="Country"
                  onChange={handleInputChange}
                />
              </div>

              <button onClick={handleSubmit}>Add Business</button>
            </>
          ) : (
            // Event form fields
            <>
              <input
                name="title"
                placeholder="Title"
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
              />

              <input
                type="datetime-local"
                name="startTime"
                placeholder="Start Date & Time"
                onChange={handleInputChange}
              />

              <input
                type="datetime-local"
                name="endTime"
                placeholder="End Date & Time"
                onChange={handleInputChange}
              />

              <div>
                <h5>Select an Event Category:</h5>
                <Select
                  options={eventCategoryOptions}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  onInputChange={handleInputChange}
                  placeholder="Select an event category..."
                />
                {selectedCategory && (
                  <div>
                    <h4>Selected Category:</h4>
                    <p>{selectedCategory.label}</p>
                  </div>
                )}
              </div>

              <div className="branding-section">
                <h4>Branding</h4>
                <input
                  name="bannerImageUrl"
                  placeholder="Banner Image URL"
                  onChange={handleInputChange}
                />
                <input
                  name="badgeImageUrl"
                  placeholder="Badge Image URL"
                  onChange={handleInputChange}
                />
                <input
                  name="pinImageUrl"
                  placeholder="Pin Image URL"
                  onChange={handleInputChange}
                />
              </div>

              <div className="location-section">
                <h4>Location</h4>
                <input
                  name="streetAddress"
                  placeholder="Street Address"
                  onChange={handleInputChange}
                />
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleInputChange}
                />
                <input
                  name="region"
                  placeholder="Region"
                  onChange={handleInputChange}
                />
                <input
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleInputChange}
                />
                <input
                  name="country"
                  placeholder="Country"
                  onChange={handleInputChange}
                />
              </div>

              <button onClick={handleSubmit}>Add Event</button>
            </>
          )}


        <button
          onClick={() => {
            setUserEditVenueType('business');
            closeUserEditVenue();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserEditVenue;
