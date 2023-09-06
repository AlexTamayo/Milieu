import { useState, useEffect } from 'react';
import { getAllBusinesses } from '../routes/api';

const useBusinessData = () => {
  const [businessData, setBusinessData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBusinesses()
      .then(response => {
        const businessData = response.data;
        const businessMarkers = businessData.map(business => ({
          position: { lat: business.latitude, lng: business.longitude },
          metadata: { topic: 'business', link: business.link },
          icon: {
            url: './static/business_logo.png', // or appropriate icon URL
            scaledSize: new window.google.maps.Size(50, 50),
          },
        }));
        setBusinessData(businessMarkers);
      })
      .catch(error => {
        console.error('Error fetching businesses:', error);
        setError(error);
      });
  }, []);

  return { businessData, error };
};

export default useBusinessData;
