import { React, useState, useContext } from 'react';
import { updateBusinessById, updateEventById } from '../routes/api';
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

    // console.log( 'currentBusiness', currentBusiness );
    // console.log( 'currentEvent', currentEvent );
    
    const [businessFormData, setBusinessFormData] = useState({
      ...currentBusiness
    });

    const [eventFormData, setEventFormData] = useState({
      ...currentEvent
    });


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (selectedVenueType === "business") {
        setBusinessFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      } else if (selectedVenueType === "event") {
        setEventFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      }
    };

    const handleSubmit = async () => {
      let endpoint;
      let data;
  
      if (selectedVenueType === "business") {
        updateBusinessById(selectedVenueId, businessFormData);
      } else {
        updateEventById(selectedVenueId, eventFormData);
      }
  
      try {
        const response = await axios.put(endpoint, data);
        console.log(`${selectedVenueType.charAt(0).toUpperCase() + selectedVenueType.slice(1)} updated:`, response.data);
      } catch (error) {
        console.error(
          `Error updating the ${selectedVenueType}:`,
          error.response ? error.response.data : error.message
        );
      }
  
      closeUserEditVenueModal();
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
              value={businessFormData.name}
              onChange={handleInputChange}
              defaultValue={currentBusiness.name}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={businessFormData.description}
              onChange={handleInputChange}
              defaultValue={currentBusiness.description}
            />
            <input
              name="phoneNumber"
              value={businessFormData.phoneNumber}
              placeholder="Phone Number"
              onChange={handleInputChange}
              defaultValue={currentBusiness.phoneNumber}
            />
            <input
              name="email"
              value={businessFormData.email}
              placeholder="Email"
              onChange={handleInputChange}
              defaultValue={currentBusiness.email}
            />
            <input
              name="website"
              value={businessFormData.website}
              placeholder="Website"
              onChange={handleInputChange}
              defaultValue={currentBusiness.website}
            />

            <select
              name="businessCategoryId"
              onChange={handleInputChange}
              defaultValue={currentBusiness.businessCategory.id}
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