  // vvv FORMATTERS vvv

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

  // ^^^ FORMATTERS ^^^