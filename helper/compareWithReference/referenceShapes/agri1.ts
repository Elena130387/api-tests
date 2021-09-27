export const agri1: any = {
  data: {
    shape: {
      id: "236",
      name: "Agri1. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T05:52:28.902123Z",
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
                  [-82.0411, 27.4305],
                  [-82.0411, 27.4123181818182],
                  [-82.0229181818182, 27.4123181818182],
                  [-82.0229181818182, 27.4305],
                  [-82.0411, 27.4305],
                  [-82.0411, 27.4305],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Hardee County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1695, completed: 1695, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.008767015653146538,
          averageBuildingHeight: 2.821596484591914,
          buildingCount: 57,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 8.308622623391704,
          building3lessAreaCoverage: 0.00024352874373433583,
          building3to8AreaCoverage: 0.000024207552572838347,
          building8moreAreaCoverage: 0.0027547085793096023,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 37192984,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 20587193,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 2306080, __typename: "InsuranceSummary" },
          {
            name: "COMMERCIAL",
            value: 1047698,
            __typename: "InsuranceSummary",
          },
          { name: "INDUSTRIAL", value: 810359, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "CULTIVATED",
            value: 0.7744360902255639,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.17543859649122806,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.047619047619047616,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.002506265664160401,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 3,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 1,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 471,
        stats: {
          incomePerCapita: 18643,
          housingUnitsTotal: 9724,
          population: 27326,
          unitsInStructure1: 5593,
          unitsInStructure2to9: 706,
          unitsInStructure10to19: 252,
          unitsInStructure20more: 85,
          unitsInStructureMobile: 3088,
          totalUnits: 5288,
          averageUnitPrice: 127874,
          medianUnitPrice: 81196,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
