export const agri2: any = {
  data: {
    shape: {
      id: "168",
      name: "AOI_Regression_Agri2",
      createdAt: "2021-09-13T13:24:33.476328Z",
      polygons: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-93.0251777110483, 41.9793771339458],
                  [-93.0069958928665, 41.9793771339458],
                  [-93.0069958928665, 41.961195315764],
                  [-93.0251777110483, 41.961195315764],
                  [-93.0251777110483, 41.9793771339458],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Iowa",
          admin2: "Marshall County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1521, completed: 1521, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.023634838456867122,
          averageBuildingHeight: 3.1381520707885513,
          buildingCount: 130,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.7339003116057783,
          building3lessAreaCoverage: 0.0006031282141762955,
          building3to8AreaCoverage: 0.00039106523957239145,
          building8moreAreaCoverage: 0,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 135766264,
        insuranceExposure: [
          {
            name: "INDUSTRIAL",
            value: 41649846,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 7224004,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 5699724, __typename: "InsuranceSummary" },
          {
            name: "RESIDENTIAL",
            value: 482046,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "CULTIVATED",
            value: 0.7675070028011205,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.16526610644257703,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.06162464985994398,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 9,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 14,
        stats: {
          incomePerCapita: 25693,
          housingUnitsTotal: 16751,
          population: 40476,
          unitsInStructure1: 13043,
          unitsInStructure2to9: 1954,
          unitsInStructure10to19: 415,
          unitsInStructure20more: 749,
          unitsInStructureMobile: 590,
          totalUnits: 10902,
          averageUnitPrice: 134708,
          medianUnitPrice: 104607,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
