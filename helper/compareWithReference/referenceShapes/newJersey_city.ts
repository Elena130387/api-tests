export const newJersey_city: any = {
  data: {
    shape: {
      id: "180",
      name: "AOI_Regression_NewJersey_city",
      createdAt: "2021-09-13T18:45:14.396628Z",
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
                  [-74.0579929508205, 40.7299452676791],
                  [-74.0398111326387, 40.7299452676791],
                  [-74.0398111326387, 40.7117634494973],
                  [-74.0579929508205, 40.7117634494973],
                  [-74.0579929508205, 40.7299452676791],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "New Jersey",
          admin2: "Hudson County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1512, completed: 1512, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.266224943957075,
          averageBuildingHeight: 4.6125345971638385,
          buildingCount: 651,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 8.023484616108776,
          building3lessAreaCoverage: 0.0174993734065892,
          building3to8AreaCoverage: 0.09307444596490941,
          building8moreAreaCoverage: 0.11035218225473784,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 7819860034,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2828112099,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1802918597,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 399514437,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 84320849, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.31092436974789917,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.15966386554621848,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.13445378151260504,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.13445378151260504,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.0896358543417367,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.08683473389355742,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.08403361344537816,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2669,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 56, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 8,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 4, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 4,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 5,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "bridge", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 18215,
        stats: {
          incomePerCapita: 35910,
          housingUnitsTotal: 277742,
          population: 679756,
          unitsInStructure1: 43278,
          unitsInStructure2to9: 133820,
          unitsInStructure10to19: 21699,
          unitsInStructure20more: 78381,
          unitsInStructureMobile: 564,
          totalUnits: 79116,
          averageUnitPrice: 431038,
          medianUnitPrice: 349459,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
