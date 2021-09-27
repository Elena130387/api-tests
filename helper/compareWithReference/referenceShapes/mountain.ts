export const mountain = {
  data: {
    shape: {
      id: "235",
      name: "Mountain. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T05:51:08.716891Z",
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
      progress: { total: 1428, completed: 1428, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 336, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.04631435303460984,
          averageBuildingHeight: 5.114385517157175,
          buildingCount: 324,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 5.386035855654542,
          building3lessAreaCoverage: 0.021039417811802456,
          building3to8AreaCoverage: 0.035132408142089844,
          building8moreAreaCoverage: 0.025952452705019995,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 687412332,
        insuranceExposure: [
          {
            name: "COMMERCIAL",
            value: 185810621,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 181838432,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 50345787,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 7369638, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "OTHERIMP",
            value: 0.6190476190476191,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.14285714285714285,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.06845238095238096,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.05952380952380952,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.03869047619047619,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.03869047619047619,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.03273809523809524,
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
