export const la_beverlyHills: any = {
  data: {
    shape: {
      id: "193",
      name: "AOI_Regression_LA_BeverlyHills",
      createdAt: "2021-09-14T09:25:13.584928Z",
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
                  [-118.399052930665, 34.0920029021877],
                  [-118.417234748847, 34.0920029021877],
                  [-118.417234748847, 34.0738210840059],
                  [-118.399052930665, 34.0738210840059],
                  [-118.399052930665, 34.0920029021877],
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
      progress: { total: 1602, completed: 1602, __typename: "Progress" },
      tiles: { large: 36, medium: 54, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.1887267783836082,
          averageBuildingHeight: 3.194419592706521,
          buildingCount: 918,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.032779659346549,
          building3lessAreaCoverage: 0.06632993587110408,
          building3to8AreaCoverage: 0.05906162564716642,
          building8moreAreaCoverage: 0.017324215520626653,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 5535734671,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 4095253001,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 96279776,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 74106445,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 15737473, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.8888888888888888,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.031746031746031744,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.031746031746031744,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.023809523809523808,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.021164021164021163,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.0026455026455026454,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 267,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 254,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 48,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 3,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 28210,
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
