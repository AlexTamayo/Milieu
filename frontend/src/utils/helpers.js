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

  export function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()} @ ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return formattedDate;
  };

  // ^^^ FORMATTERS ^^^