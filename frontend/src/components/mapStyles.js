// frontend\src\components\mapStyles.js
const mapStyles = [

  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.medical",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.school",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.sports_complex",
    stylers: [{ visibility: "off" }],
  },

  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#e92727"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#164b5e"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#fffafa"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#fefafa"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#050505"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#f6f2f2"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "3"
          },
          {
              "lightness": "50"
          },
          {
              "weight": "3.61"
          },
          {
              "color": "#050505"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#fbf5f5"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#010101"
          },
          {
              "lightness": "37"
          },
          {
              "saturation": "-14"
          },
          {
              "weight": "3.75"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#737373"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  }
];

export default mapStyles;
