import React, { useState, useEffect } from 'react';


function ParseBusinessAndEventData() {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const fetchBusinessAndEventData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/businessandevents');

        const result = await response.json();

        setBusinessData(result);
      } catch (error) {

        console.log('error', error);
      }
    };

    fetchBusinessAndEventData();
  }, []);

  return (
    <div>
      {businessData ? (
        <pre>{JSON.stringify(businessData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ParseBusinessAndEventData;
