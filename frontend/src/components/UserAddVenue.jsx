import React, { useState, useContext } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';

import '../styles/UserAddVenue.scss';

function UserAddVenue() {
  const { state, closeUserAddVenue,createABusiness,createAnEvent } = useContext(DataContext);

  const { isUserAddVenueOpen, eventCategoryData, businessCategoryData } = state;

  const { currentUser, signOut } = useAuth();

  const [ userAddVenueType, setUserAddVenueType] = useState('business');
  const [ selectedCategory, setSelectedCategory] = useState(null);
  const [ businessCategoryId, setBusinessCategoryId] = useState(null);
  const [ eventCategoryId, setEventCategoryId] = useState(null);
  const [ formData, setFormData] = useState({});

  const eventCategoryOptions = eventCategoryData.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const businessCategoryOptions = businessCategoryData.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);

    // Extract the appropriate category ID based on userAddVenueType
    if (userAddVenueType === 'business') {
      if (selectedOption) {
        const categoryId = selectedOption.value;
        console.log('categoryId' + categoryId);
        setBusinessCategoryId(categoryId);
        setEventCategoryId(null); // Reset eventCategoryId
      } else {
        setBusinessCategoryId(null); // Reset businessCategoryId
      }
    } else if (userAddVenueType === 'event') {
      if (selectedOption) {
        const categoryId = selectedOption.value;
        setEventCategoryId(categoryId);
        setBusinessCategoryId(null); // Reset businessCategoryId
      } else {
        setEventCategoryId(null); // Reset eventCategoryId
      }
    }
  };

  const handleInputChange = (e) => {
    if (e && e.target && e.target.name) {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      formData.ownerId = currentUser.id;

      let response;
      if (userAddVenueType === 'business') {
        // Set the appropriate category ID in formData
        console.log('businessCategoryId ' + businessCategoryId);
        formData.businessCategoryId = businessCategoryId;

        // Create the businessBranding object
        formData.businessBranding = {
          logoUrl: formData.logoImageUrl,
          bannerUrl: formData.bannerImageUrl,
          pinUrl: formData.pinImageUrl,
        };

        // Create the businessCategory object
        formData.businessCategory = {
          name: selectedCategory.label, // Assuming you want to use the selected category label
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // Create the socialMedia object (if applicable)
        if (formData.twitterLink || formData.facebookLink) {
          formData.socialMedia = {
            platform: 'Twitter and Facebook', // Customize this as needed
            link: `${formData.twitterLink ? formData.twitterLink : ''} ${
              formData.facebookLink ? formData.facebookLink : ''
            }`,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        }

        // Create the businessLocation object (if applicable)
        formData.businessLocation = {
          longitude: -113.997280, // Replace with the actual longitude
          latitude: 50.856270, // Replace with the actual latitude
          streetAddress: formData.streetAddress,
          city: formData.city,
          region: formData.region,
          postalCode: formData.postalCode,
          country: formData.country,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        console.log(formData);
        // Submit the formData to the endpoint for adding a business
        createABusiness(formData);
        ///////////WE NEED TO NOW ADD A MARKER HERE
      } else if (userAddVenueType === 'event') {
        // Set the appropriate category ID in formData
        formData.eventCategoryId = eventCategoryId;

        // Create the eventBranding object
        formData.eventBranding = {
          bannerUrl: formData.bannerImageUrl,
          badgeUrl: formData.badgeImageUrl,
          pinUrl: formData.pinImageUrl,
        };

        // Create the eventCategory object
        formData.eventCategory = {
          name: selectedCategory.label, // Assuming you want to use the selected category label
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // Create the eventLocation object (if applicable)
        formData.eventLocation = {
          longitude: 100, // Replace with the actual longitude
          latitude: 50, // Replace with the actual latitude
          streetAddress: formData.streetAddress,
          city: formData.city,
          region: formData.region,
          postalCode: formData.postalCode,
          country: formData.country,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        // Submit the formData to the endpoint for adding an event
        createAnEvent(formData);
        ///////////WE NEED TO NOW ADD A MARKER HERE
      }
      closeUserAddVenue(); // Close the modal after a successful submission
    } catch (error) {
      console.error(
        `There was an error submitting the ${userAddVenueType}:`
      );
    }
  };



  if (!isUserAddVenueOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="user-add-venue-modal">
        <div className="venue-type-toggle">
          <button
            onClick={() => {
              setUserAddVenueType('business');
              setSelectedCategory(null);
            }}
          >
            Business
          </button>
          <button
            onClick={() => {
              setUserAddVenueType('event');
              setSelectedCategory(null);
            }}
          >
            Event
          </button>
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
            setUserAddVenueType('business');
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
