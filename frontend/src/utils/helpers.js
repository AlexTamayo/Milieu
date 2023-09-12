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
  export function openGoogleMaps (venue, type) {

    let address;
  
    if (type === 'event') {
      address = addressFormatterSafe(venue.eventLocation);
    } else if (type === 'business') {
      address = addressFormatterSafe(venue.businessLocation);
    }

    if (!address || address === "Address not available") {
      alert("Address not available");
      return;
    }

    const encodedAddress = encodeURIComponent(address.replace(/ /g, '+'));
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };