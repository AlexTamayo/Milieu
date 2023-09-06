import React, { useState, useEffect } from 'react';


function ParseBusinessAndEventData() {


  useEffect(() => {
    const fetchBusinessAndEventData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/businessandevents');

        const result = await response.json();

        return (result);
      } catch (error) {

        console.log('error', error);
      }
    };

    fetchBusinessAndEventData();
  }, []);
}

export default ParseBusinessAndEventData;
