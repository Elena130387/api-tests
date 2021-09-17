export const la_suburb: any = {
  data: {
    shape: {
      id: "182",
      name: "AOI_Regression_LA_suburb",
      createdAt: "2021-09-13T19:01:18.654137Z",
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
                  [-118.208390492354, 33.9317554909191],
                  [-118.190208674172, 33.9317554909191],
                  [-118.190208674172, 33.9135736727373],
                  [-118.208390492354, 33.9135736727373],
                  [-118.208390492354, 33.9317554909191],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Los Angeles County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1611, completed: 1611, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.32031760644660423,
          averageBuildingHeight: 3.0723505894960157,
          buildingCount: 912,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.762284955967801,
          building3lessAreaCoverage: 0.11890879636088376,
          building3to8AreaCoverage: 0.01566940388351521,
          building8moreAreaCoverage: 0.02577249839823082,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 8414394731,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 4724667866,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 711084597,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 380780421,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 111440356, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6904761904761905,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.1164021164021164,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.06084656084656084,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.05026455026455026,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.047619047619047616,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.031746031746031744,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.0026455026455026454,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1555,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 16,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 12,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 2,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 23327,
        stats: {
          incomePerCapita: 30798,
          housingUnitsTotal: 3506903,
          population: 10105722,
          unitsInStructure1: 1957238,
          unitsInStructure2to9: 560403,
          unitsInStructure10to19: 269963,
          unitsInStructure20more: 662186,
          unitsInStructureMobile: 57113,
          totalUnits: 1512364,
          averageUnitPrice: 644984,
          medianUnitPrice: 495829,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
