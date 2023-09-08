import React, { useState, useContext } from 'react';
import axios from 'axios';

import { DataContext } from '../context/MainContext';

import '../styles/UserAddVenue.scss';

function UserAddVenue() {
    const { state, closeUserAddVenue } = useContext(DataContext);
    const { isUserAddVenueOpen } = state;
    
    const [userAddVenueType, setUserAddVenueType] = useState('business');
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
          if (userAddVenueType === "business") {
              response = await axios.post(
                  "http://localhost:3001/api/businesses",
                  formData
              );
          } else if (userAddVenueType === "event") {
              response = await axios.post(
                  "http://localhost:3001/api/events", // Assuming the endpoint for events is this, you can replace with the actual one
                  formData
              );
          }
          console.log(`${userAddVenueType.charAt(0).toUpperCase() + userAddVenueType.slice(1)} added:`, response.data);
          closeUserAddVenue(); // Close the modal after a successful submission
      } catch (error) {
          console.error(
              `There was an error submitting the ${userAddVenueType}:`,
              error.response ? error.response.data : error.message
          );
      }
  };

  // Temp business category
  const businessCategories = [
    { id: 1, name: "Restaurant" },
    { id: 2, name: "Retail" },
  ];
  

    if (!isUserAddVenueOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="user-add-venue-modal">
          <div className="venue-type-toggle">
            <button onClick={() => setUserAddVenueType("business")}>Business</button>
            <button onClick={() => setUserAddVenueType("event")}>Event</button>
          </div>

          {userAddVenueType === "business" ? (
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

              <select name="businessCategoryId" onChange={handleInputChange}>
                <option value="">Select a category...</option>
                {businessCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

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

              <select name="eventCategoryId" onChange={handleInputChange}>
                <option value="">Select an Event Category...</option>
                {/* You should populate this dropdown with available event categories from your API or static list */}
              </select>

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
              setUserAddVenueType("business");
              closeUserAddVenue();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
}

export default UserAddVenue;
