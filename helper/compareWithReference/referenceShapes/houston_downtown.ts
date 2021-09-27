export const houston_downtown: any = {
  data: {
    shape: {
      id: "252",
      name: "Houston_downtown. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:41:59.255603Z",
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
                  [-95.3774680204502, 29.7681706508483],
                  [-95.3774680204502, 29.7499888326665],
                  [-95.3592862022684, 29.7499888326665],
                  [-95.3592862022684, 29.7681706508483],
                  [-95.3774680204502, 29.7681706508483],
                  [-95.3774680204502, 29.7681706508483],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Texas",
          admin2: "Harris County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1605, completed: 1605, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.20289670348798156,
          averageBuildingHeight: 10.574372169616783,
          buildingCount: 576,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 10.064302217915424,
          building3lessAreaCoverage: 0.014419616214812749,
          building3to8AreaCoverage: 0.022541853485914764,
          building8moreAreaCoverage: 0.15600759516317378,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 6570804713,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1392748051,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1279363426,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 946134837,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 99678060, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "COMMERCIAL",
            value: 0.18783068783068782,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.1693121693121693,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.15873015873015872,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.15343915343915343,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.12698412698412698,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.11904761904761904,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.08465608465608465,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2775,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 10,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 8,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 7,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 5,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "basketball-court",
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
        populationCount: 32458,
        stats: {
          incomePerCapita: 30856,
          housingUnitsTotal: 1714340,
          population: 4525519,
          unitsInStructure1: 1056639,
          unitsInStructure2to9: 170636,
          unitsInStructure10to19: 189290,
          unitsInStructure20more: 253075,
          unitsInStructureMobile: 44700,
          totalUnits: 855629,
          averageUnitPrice: 236378,
          medianUnitPrice: 154135,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
