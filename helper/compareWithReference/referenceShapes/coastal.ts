export const coastal: any = {
  data: {
    shape: {
      id: "249",
      name: "Coastal. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:35:20.982605Z",
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
                  [-82.261, 26.7236],
                  [-82.261, 26.7054181818182],
                  [-82.2428181818182, 26.7054181818182],
                  [-82.2428181818182, 26.7236],
                  [-82.261, 26.7236],
                  [-82.261, 26.7236],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Lee County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1689, completed: 1689, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.004423786823014568,
          averageBuildingHeight: 3.415552369382084,
          buildingCount: 31,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.4371088399137815,
          building3lessAreaCoverage: 0.0007355577664865288,
          building3to8AreaCoverage: 0.002697325589364035,
          building8moreAreaCoverage: 0.00045724739705709584,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 55600830,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 33982014,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 4144184,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 2486535,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.9348370927318296,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.040100250626566414,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.020050125313283207,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.002506265664160401,
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
              count: 27,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "ship",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 5,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 179,
        stats: {
          incomePerCapita: 30233,
          housingUnitsTotal: 383224,
          population: 700165,
          unitsInStructure1: 238495,
          unitsInStructure2to9: 44916,
          unitsInStructure10to19: 21878,
          unitsInStructure20more: 39955,
          unitsInStructureMobile: 37980,
          totalUnits: 184567,
          averageUnitPrice: 269098,
          medianUnitPrice: 190208,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
