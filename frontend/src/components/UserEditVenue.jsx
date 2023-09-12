import React, { useState, useContext } from 'react';
import axios from 'axios';

import { DataContext } from '../context/MainContext';

import '../styles/UserAddVenue.scss';

import {
  formatDateForInput,
} from '../utils/helpers';



function UserEditVenue() {
    const {
      state,
      closeUserEditVenueModal
    } = useContext(DataContext);

    const {
      businessData,
      businessCategoryData,
      eventData,
      eventCategoryData,
      isUserEditVenueModalOpen,
      selectedVenueType,
      selectedVenueId,
    } = state;

    const [formData, setFormData] = useState({});

    const currentBusiness = businessData.find(business => business.id === selectedVenueId);
  
    const currentEvent = eventData.find(event => event.id === selectedVenueId);


    const [businessFormData, setBusinessFormData] = useState({
      name: "",
      description: "",
      phoneNumber: "",
      email: "",
      website: "",
      businessCategoryId: "",
      businessBranding: {
          logoUrl: "",
          bannerUrl: "",
          pinUrl: "",
          businessId: "",
      },
      socialMedia: [],
    });


    const [eventFormData, setEventFormData] = useState({

    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
      // try {
      //     let response;
      //     if (venueType === "business") {
      //         response = await axios.post(
      //             "http://localhost:3001/api/businesses",
      //             formData
      //         );
      //     } else if (venueType === "event") {
      //         response = await axios.post(
      //             "http://localhost:3001/api/events", // Assuming the endpoint for events is this, you can replace with the actual one
      //             formData
      //         );
      //     }
      //     console.log(`${venueType.charAt(0).toUpperCase() + venueType.slice(1)} added:`, response.data);
      //     // closeUserEditVenueModal(); // Close the modal after a successful submission
      // } catch (error) {
      //     console.error(
      //         `There was an error submitting the ${venueType}:`,
      //         error.response ? error.response.data : error.message
      //     );
      // }
  };


  if (!isUserEditVenueModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="user-add-venue-modal">

        {/* CLOSE BUTTON */}
        <div
          className="user-add-venue-modal__circle-close-btn"
          onClick={() => {
            closeUserEditVenueModal();
          }}
        >
          {/* &times; */}
        </div>

        {/* IMPORTANT STUFF I STILL NEED */}
        {/* <div className="venue-type-toggle">
            <button onClick={() => setVenueType("business")}>Business</button>
            <button onClick={() => setVenueType("event")}>Event</button>
          </div> */}

        {selectedVenueType === "business" && (
          // Business form fields
          <>
            <input

              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              defaultValue={currentBusiness.name}
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              defaultValue={currentBusiness.description}
            />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleInputChange}
              defaultValue={currentBusiness.phoneNumber}
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              defaultValue={currentBusiness.email}
            />
            <input
              name="website"
              placeholder="Website"
              onChange={handleInputChange}
              defaultValue={currentBusiness.website}
            />

            <select
              name="businessCategoryId"
              onChange={handleInputChange}
              value={currentBusiness.businessCategory.id}
            >
              <option value="">Select a category...</option>
              {businessCategoryData.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <div className="branding-section">
              <h4>Branding</h4>
              <input
                name="bannerUrl"
                placeholder="Banner Image URL"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessBranding.bannerUrl}
              />
              <input
                name="logoUrl"
                placeholder="Badge Image URL"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessBranding.logoUrl}
              />
              {/* <input
                  name="pinUrl"
                  placeholder="Pin Image URL"
                  onChange={handleInputChange}
                  defaultValue={currentBusiness.businessBranding.pinUrl}
                /> */}
            </div>

            <div className="social-media-section">
              <h4>Social Media</h4>
              <input
                name="twitterLink"
                placeholder="Twitter Profile URL"
                onChange={handleInputChange}
                defaultValue={""}
              />
              <input
                name="facebookLink"
                placeholder="Facebook Profile URL"
                onChange={handleInputChange}
                defaultValue={""}
              />
            </div>

            <div className="location-section">
              <h4>Location</h4>
              <input
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessLocation.streetAddress}
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessLocation.city}
              />
              <input
                name="region"
                placeholder="Region"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessLocation.region}
              />
              <input
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessLocation.postalCode}
              />
              <input
                name="country"
                placeholder="Country"
                onChange={handleInputChange}
                defaultValue={currentBusiness.businessLocation.country}
              />
            </div>

            <button onClick={handleSubmit}>Update Business</button>
          </>
        )}

        {selectedVenueType === "event" && (
          // Event form fields
          <>
            <input
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
              defaultValue={currentEvent.title}
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              defaultValue={currentEvent.description}
            />

            <input
              type="datetime-local"
              name="startTime"
              placeholder="Start Date & Time"
              onChange={handleInputChange}
              defaultValue={formatDateForInput(currentEvent.startTime)}
            />

            <input
              type="datetime-local"
              name="endTime"
              placeholder="End Date & Time"
              onChange={handleInputChange}
              defaultValue={formatDateForInput(currentEvent.endTime)}
            />

            <select
              name="eventCategoryId"
              onChange={handleInputChange}
              value={currentEvent.eventCategory.id}
            >
              <option value="">Select an Event Category...</option>
              {eventCategoryData.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <div className="branding-section">
              <h4>Branding</h4>
              <input
                name="bannerUrl"
                placeholder="Banner Image URL"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventBranding.bannerUrl}
              />
            </div>

            <div className="location-section">
              <h4>Location</h4>
              <input
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventLocation.streetAddress}
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventLocation.city}
              />
              <input
                name="region"
                placeholder="Region"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventLocation.region}
              />
              <input
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventLocation.postalCode}
              />
              <input
                name="country"
                placeholder="Country"
                onChange={handleInputChange}
                defaultValue={currentEvent.eventLocation.country}
              />
            </div>

            <button onClick={handleSubmit}>Update Event</button>
          </>
        )}


      </div>
    </div>
  );
}

export default UserEditVenue;