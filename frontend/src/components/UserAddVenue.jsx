import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';
import '../styles/UserAddVenue.scss';

function UserAddVenue() {
  const {
    state,
    closeUserAddVenue,
    createABusiness,
    createAnEvent
  } = useContext(DataContext);

  const {
    isUserAddVenueOpen,
    eventCategoryData,
    businessCategoryData,
    eventData,
    businessData
  } = state;

  const { currentUser, addEntityToCurrentUser } = useAuth();

  const [userAddVenueType, setUserAddVenueType] = useState('business');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businessCategoryId, setBusinessCategoryId] = useState(null);
  const [eventCategoryId, setEventCategoryId] = useState(null);
  const [formData, setFormData] = useState({});

  //////////////////////////////////////////goelocation
  const [userLocation, setUserLocation] = useState(null);
  const [fullAddress, setFullAddress] = useState('');

  useEffect(() => {
    // console.log("formData has changed", formData);
  }, [formData]);

  useEffect(() => {
    // console.log("Address parts have changed, constructing full address", formData);
    const address = `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.region || ''}, ${formData.country || ''}`;
    setFullAddress(address);
  }, [formData.streetAddress, formData.city, formData.region, formData.country]);

  useEffect(() => {
    // console.log("Full address has changed, fetching lat long", fullAddress);
    const fetchLatLng = async () => {
      const location = await getLatLngFromAddress(fullAddress);
      // console.log("Fetched location:", location);
      if (location) {
        setFormData((prevState) => {
          // console.log("Previous formData state before updating lat and long:", prevState);
          const newState = { ...prevState, latitude: location.latitude, longitude: location.longitude };
          // console.log("New formData state after updating lat and long:", newState);
          return newState;
        });
      }
    };

    fetchLatLng();
  }, [fullAddress]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.log(error)
      );
    }
  }, []);

  //////////////////////////////////////////geolocation

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
    if (userAddVenueType === 'business') {
      if (selectedOption) {
        const categoryId = selectedOption.value;
        setBusinessCategoryId(categoryId);
        setEventCategoryId(null);
      } else {
        setBusinessCategoryId(null);
      }
    } else if (userAddVenueType === 'event') {
      if (selectedOption) {
        const categoryId = selectedOption.value;
        setEventCategoryId(categoryId);
        setBusinessCategoryId(null);
      } else {
        setEventCategoryId(null);
      }
    }

  };

  const getLatLngFromAddress = async (address) => {
    try {
      const response = await axios.get('https://api.geoapify.com/v1/geocode/search', {
        params: {
          text: address,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      const location = response.data.features[0]?.geometry.coordinates;
      if (location) {
        return {
          latitude: location[1],
          longitude: location[0],
        };
      } else {
        console.error('No location data found in API response');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = async (e) => {
    if (e && e.target && e.target.name) {
      const { name, value } = e.target;

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (name === 'streetAddress' || name === 'city' || name === 'region' || name === 'country') {
        const updatedFormData = {
          ...formData,
          [name]: value,
        };
        const fullAddress = `${updatedFormData.streetAddress || ''}, ${updatedFormData.city || ''}, ${updatedFormData.region || ''}, ${updatedFormData.country || ''}`;
        const location = await getLatLngFromAddress(fullAddress);
        if (location) {
          setFormData((prevState) => ({
            ...prevState,
            latitude: location.latitude,
            longitude: location.longitude,
          }));
        }
      }
    }
  };


  const handleSubmit = async () => {
    try {
      formData.ownerId = currentUser.id;

      let response;
      if (userAddVenueType === 'business') {
        // console.log('businessCategoryId ' + businessCategoryId);
        formData.businessCategoryId = businessCategoryId;
        formData.businessBranding = {
          logoUrl: formData.logoUrl,
          bannerUrl: formData.bannerUrl,
          pinUrl: formData.pinImageUrl,
        };
        formData.businessCategory = {
          name: selectedCategory.label,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        if (formData.twitterLink || formData.facebookLink) {
          formData.socialMedia = {
            platform: 'Twitter and Facebook',
            link: `${formData.twitterLink ? formData.twitterLink : ''} ${
              formData.facebookLink ? formData.facebookLink : ''
            }`,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        }

        formData.businessLocation = {
          longitude: formData.longitude || userLocation.longitude,
          latitude: formData.latitude || userLocation.latitude,
          streetAddress: formData.streetAddress,
          city: formData.city,
          region: formData.region,
          postalCode: formData.postalCode,
          country: formData.country,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // const formData = transformStructure(formData);
        const submitFormData = {
          name: formData.name,
          description: formData.description,
          status: 'active',
          rating: 0,
          reviewCount: 0,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          website: formData.website,
          ownerId: currentUser.id,
          businessCategoryId: formData.businessCategoryId,
          businessLocation: formData.businessLocation,
          businessCategory: formData.businessCategory,
          businessBranding: formData.businessBranding,

        };
        // console.log(submitFormData);
        createABusiness(submitFormData).then((result) => {
           //addEntityToCurrentUser("business", submitFormData);

          if (result.success) {
            console.log('Business created successfully!');
          } else {
            console.error('Business creation failed:', result.error);
          }
        });

        ///////////WE NEED TO NOW ADD A MARKER HERE
      } else if (userAddVenueType === 'event') {
        formData.eventCategoryId = eventCategoryId;
        formData.eventBranding = {
          bannerUrl: formData.bannerUrl,
          logoUrl: formData.logoUrl,
          pinUrl: formData.pinImageUrl,
        };
        formData.eventCategory = {
          name: selectedCategory.label,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        formData.eventLocation = {
          longitude: formData.longitude || userLocation.longitude,
          latitude: formData.latitude || userLocation.latitude,
          streetAddress: formData.streetAddress,
          city: formData.city,
          region: formData.region,
          postalCode: formData.postalCode,
          country: formData.country,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        // Submit the formData to the endpoint for adding an event
        createAnEvent(formData)
          .then(() => {
            // addEntityToCurrentUser("event", formData);
          });

        ///////////WE NEED TO NOW ADD A MARKER HERE
      }
      setUserAddVenueType('business');
      closeUserAddVenue();
    } catch (error) {
      console.error(`There was an error submitting the ${userAddVenueType}:`);
    }
  };

  // console.log(`userAddVenueType ` + userAddVenueType);  // <---------------------| This is the line printing
  if (!isUserAddVenueOpen) return null;


  return (
    <div className="modal-overlay">
      <div className={`user-add-venue-modal ${userAddVenueType === "business" ? "business" : "event"}`}>

        {/* CLOSE BUTTON */}
        <div
          className="user-add-venue-modal__circle-close-btn"
          onClick={() => {
            setUserAddVenueType('business');
            closeUserAddVenue();
          }}
        >
          {/* &times; */}
        </div>

        <div className="user-add-venue-modal__grl-container">


          {/* TOGGLE BUTTONS */}
          <div className="venue-type-toggle">
            <div
              className={`venue-type-toggle__business ${userAddVenueType === "business" ? "active" : ""}`}
              onClick={() => {
                setUserAddVenueType('business');
                setSelectedCategory(null);
              }}
            >
              {/* Business */}
            </div>
            <div
              className={`venue-type-toggle__event ${userAddVenueType === "event" ? "active" : ""}`}
              onClick={() => {
                setUserAddVenueType('event');
                setSelectedCategory(null);
              }}
            >
              {/* Event */}
            </div>
          </div>


          {/* BUSINESS */}
          {userAddVenueType === 'business' ? (
            // Business form fields
            <div className='business-add'>
              <input
                className='business-add__name'
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
              />
              <textarea
              className='business-add__description'
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
              />
              <input
              className='business-add__phone-number'
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
              <input
              className='business-add__email'
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <input
              className='business-add__website'
                name="website"
                placeholder="Website"
                onChange={handleInputChange}
              />

              <select
                className='business-add__category'
                value={selectedCategory?.value || ""}
                onChange={e => handleCategoryChange({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })}>

                <option value="" disabled>Select a business category...</option>
                {businessCategoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div
                className="branding-section">
                <h4>Branding</h4>
                <input
                  name="bannerUrl"
                  placeholder="Banner Image URL"
                  onChange={handleInputChange}
                />
                <input
                  name="logoUrl"
                  placeholder="Badge Image URL"
                  onChange={handleInputChange}
                />
                {/* <input
                  name="pinImageUrl"
                  placeholder="Pin Image URL"
                  onChange={handleInputChange}
                /> */}
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

              <button
                className='submit-btn business'
                onClick={handleSubmit}>
                {/* Add Business */}
              </button>

            </div>
          ) : (
            // Event form fields
            <div className='event-add'>
              <input
                className="event-add__title"
                name="title"
                placeholder="Title"
                onChange={handleInputChange}
              />
              <textarea
                className="event-add__description"
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
              />

              <input
                className="event-add__startTime"
                name="startTime"
                type="datetime-local"
                placeholder="Start Date & Time"
                onChange={handleInputChange}
              />

              <input
                className="event-add__endTime"
                name="endTime"
                type="datetime-local"
                placeholder="End Date & Time"
                onChange={handleInputChange}
              />

              {/* <div>
                <h5>Select an Event Category:</h5>
                <Select
                  options={eventCategoryOptions}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Select an event category..."
                  isSearchable
                />
              </div> */}

                <select
                  className='event-add__category'
                  value={selectedCategory?.value || ""}
                  onChange={e => handleCategoryChange({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })}>

                  <option value="" disabled>Select an event category...</option>
                  {eventCategoryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="branding-section">
                  <h4>Branding</h4>
                  <input
                    name="bannerUrl"
                    placeholder="Banner Image URL"
                    onChange={handleInputChange}
                  />
                  {/* <input
                    name="logoUrl"
                    placeholder="Badge Image URL"
                    onChange={handleInputChange}
                  />
                  <input
                    name="pinImageUrl"
                    placeholder="Pin Image URL"
                    onChange={handleInputChange}
                  /> */}
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

              
              <button
                className='submit-btn event'
                onClick={handleSubmit}>
                {/* Add Event */}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default UserAddVenue;


