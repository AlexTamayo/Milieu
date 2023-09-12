import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/MainContext';
import '../styles/UserAddVenue.scss';

function UserAddVenue() {
  const { state, closeUserAddVenue, createABusiness, createAnEvent } = useContext(DataContext);
  const { isUserAddVenueOpen, eventCategoryData, businessCategoryData } = state;
  const { currentUser, signOut } = useAuth();

  const [userAddVenueType, setUserAddVenueType] = useState('business');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businessCategoryId, setBusinessCategoryId] = useState(null);
  const [eventCategoryId, setEventCategoryId] = useState(null);
  const [formData, setFormData] = useState({});

  const [userLocation, setUserLocation] = useState(null);
  const [fullAddress, setFullAddress] = useState('');

  useEffect(() => {
    console.log("formData has changed", formData);
  }, [formData]);

  useEffect(() => {
    console.log("Address parts have changed, constructing full address", formData);
    const address = `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.region || ''}, ${formData.country || ''}`;
    setFullAddress(address);
  }, [formData.streetAddress, formData.city, formData.region, formData.country]);

  useEffect(() => {
    console.log("Full address has changed, fetching lat long", fullAddress);
    const fetchLatLng = async () => {
      const location = await getLatLngFromAddress(fullAddress);
      console.log("Fetched location:", location);
      if (location) {
        setFormData((prevState) => {
          console.log("Previous formData state before updating lat and long:", prevState);
          const newState = { ...prevState, latitude: location.latitude, longitude: location.longitude };
          console.log("New formData state after updating lat and long:", newState);
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
        console.log('categoryId' + categoryId);
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
        console.error("No location data found in API response");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    console.log('Input change event:', e);
    if (e && e.target && e.target.name) {
      const { name, value } = e.target;
      setFormData((prevState) => {
        console.log('Previous formData state:', prevState);
        const newState = { ...prevState, [name]: value };
        console.log('New formData state:', newState);
        return newState;
      });
    }
  };

  const handleSubmit = async () => {
    try {
      formData.ownerId = currentUser.id;

      let response;
      if (userAddVenueType === 'business') {
        console.log('businessCategoryId ' + businessCategoryId);
        formData.businessCategoryId = businessCategoryId;
        formData.businessBranding = {
          logoUrl: formData.logoImageUrl,
          bannerUrl: formData.bannerImageUrl,
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

        console.log(formData);
        createABusiness(formData).then((result) => {
          if (result.success) {
            console.log('Business created successfully!');
          } else {
            console.error('Business creation failed:', result.error);
          }
        });
      } else if (userAddVenueType === 'event') {
        formData.eventCategoryId = eventCategoryId;
        formData.eventBranding = {
          bannerUrl: formData.bannerImageUrl,
          badgeUrl: formData.badgeImageUrl,
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

        createAnEvent(formData);
      }
      closeUserAddVenue();
    } catch (error) {
      console.error(
        `There was an error submitting the ${userAddVenueType}:`,
        error
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
