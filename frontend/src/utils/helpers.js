  /* vvv FORMATTERS vvv */

  export function formatPhoneNumber(phone) {
    const parts = phone.split('-');
    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  }

  export function formatURL(url) {
    return url.replace(/^https?:\/\/(www\.)?/, '');
  }

  export function extractNumbers(inputString) {
    return inputString.replace(/\D/g, '');
  }

  export function addressFormatter(location) {
    return `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}`
  }

  // const addressFormatterSafe = (location) => {
  //   return location && location.streetAddress ? addressFormatter(location) : "Address not available";
  // };

  export function addressFormatterSafe(location) {
    return location && location.streetAddress ? addressFormatter(location) : "Address not available";
  };

  export function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()} @ ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return formattedDate;
  };

  export function formatDateForInput(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hour = String(date.getUTCHours()).padStart(2, '0');
    const minute = String(date.getUTCMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  /* ^^^ FORMATTERS ^^^ */


  /* vvv OTHER FUNCTIONS vvv */
  export function openGoogleMaps(venue, type) {

    let address;
  
    if (type === 'event') {
      address = addressFormatter(venue.eventLocation);
    } else if (type === 'business') {
      console.log('venue', venue);
      console.log('venue.businessLocation', venue.businessLocation);
      
      address = addressFormatter(venue.businessLocation);
    }

    if (!address || address === "Address not available") {
      alert("Address not available");
      return;
    }

    const encodedAddress = encodeURIComponent(address.replace(/ /g, '+'));
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

/* 

  const openGoogleMaps = () => {
    const address = addressFormatterSafe(currentBusiness.businessLocation);
    if (address !== "Address not available") {
      const encodedAddress = encodeURIComponent(address.replace(/ /g, '+'));
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
    } else {
      alert("Address not available");
    }
  };

  const openGoogleMaps = () => {
    const address = addressFormatter(currentEvent.eventLocation);
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };


 */
  export function transformStructure(inputData) {
    const outputData = {
        name: inputData.name,
        description: inputData.description,
        phoneNumber: inputData.phoneNumber,
        email: inputData.email,
        website: inputData.website,
        ownerId: inputData.ownerId,
        businessCategoryId: inputData.businessCategoryId,
        businessBranding: {
            logoUrl: inputData.businessBranding.logoUrl,
            bannerUrl: inputData.businessBranding.bannerUrl,
            pinUrl: inputData.businessBranding.pinUrl,
            // The rest of the properties will be filled out once created on the backend
        },
        businessCategory: {
            name: inputData.businessCategory.name,
            // The rest of the properties will be filled out once created on the backend
        },
        socialMedia: [{
            platform: inputData.socialMedia.platform,
            link: inputData.socialMedia.link,
            // The rest of the properties will be filled out once created on the backend
        }],
        businessLocation: {
            longitude: inputData.longitude,
            latitude: inputData.latitude,
            streetAddress: inputData.streetAddress,
            city: inputData.city,
            region: inputData.region,
            postalCode: inputData.postalCode,
            country: inputData.country,
            // The rest of the properties will be filled out once created on the backend
        }
    };
    return outputData;
}

export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
}
