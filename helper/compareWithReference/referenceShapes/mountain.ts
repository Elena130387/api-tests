export const mountain = {
  data: {
    shape: {
      id: 4509,
      name: "snow_ser",
      createdAt: "2021-09-21T09:50:48.564060Z",
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
                  [-122.24151093535436, 41.36771080218045],
                  [-122.24129901279076, 41.349365076599746],
                  [-122.2232855663219, 41.349142283406444],
                  [-122.22339147070119, 41.36772961525337],
                  [-122.24151093535436, 41.36771080218045],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Siskiyou County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: {
        total: 1428,
        completed: 1428,
        __typename: "Progress",
      },
      tiles: {
        large: 30,
        medium: 54,
        small: 336,
        __typename: "ShapeTiles",
      },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.03404730842227027,
          averageBuildingHeight: 5.118147330574056,
          buildingCount: 347,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.0225831860148293,
          building3lessAreaCoverage: 0.0014565558660598029,
          building3to8AreaCoverage: 0.0004177320571172805,
          building8moreAreaCoverage: 0,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 478330082,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 145752239,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 129292225,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 26080385,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 4635535,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "OTHERIMP",
            value: 0.6279761904761905,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.15178571428571427,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.06547619047619048,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.044642857142857144,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.03869047619047619,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.03571428571428571,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.03571428571428571,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 80,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 6243,
        stats: {
          incomePerCapita: 24605,
          housingUnitsTotal: 24055,
          population: 43530,
          unitsInStructure1: 18326,
          unitsInStructure2to9: 1836,
          unitsInStructure10to19: 386,
          unitsInStructure20more: 388,
          unitsInStructureMobile: 3119,
          totalUnits: 12457,
          averageUnitPrice: 238519,
          medianUnitPrice: 176598,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
