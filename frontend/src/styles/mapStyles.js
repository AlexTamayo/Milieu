/* 
https://developers.google.com/maps/documentation/javascript/style-reference
*/

const labelsTextOnFeatureTypes = [
  "administrative.country",
  "administrative.locality",
  "administrative.province",
  "road",
];

const labelsTextOnStyles = {
  elementType: "labels.text",
  stylers: [
    {
      visibility: "on"
    }
  ]
};

const labelsTextOn = labelsTextOnFeatureTypes.map(featureType => ({
  featureType: featureType,
  ...labelsTextOnStyles
}));

const clearner = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

const individualFeatures = [

/*
water

landscape.man_made

landscape.natural.landcover
poi.park

road.arterial
road.highway

road.local NOT SHOW

transit

*/

  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#45b9ff",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        color: "#E9EEF6",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "all",
    stylers: [
      {
        color: "#b2eab7",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        color: "#b2eab7",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        color: "#b2eab7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f9f9f9"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9c9c9"
      }
    ]
  },
  // {
  //   featureType: "road.local",
  //   elementType: "all",
  //   stylers: [
  //     {
  //       color: "#e8fdff" 
  //     }
  //   ]
  // }
];


const mapStyles = [ ...clearner, ...individualFeatures, ...labelsTextOn ];

export default mapStyles;
