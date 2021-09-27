export const la_beverlyHills: any = {
  data: {
    shape: {
      id: "255",
      name: "La_beverlyHills. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:49:37.335332Z",
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
          averageBuildingAreaCoverage: 0.12070794080300305,
          averageBuildingHeight: 3.144995318830231,
          buildingCount: 913,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.450940865193416,
          building3lessAreaCoverage: 0.08164657108367436,
          building3to8AreaCoverage: 0.04024925433769428,
          building8moreAreaCoverage: 0.0123433511723917,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3558419788,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2634429017,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 84563914,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 37333099,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.8042328042328042,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.07407407407407407,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.05291005291005291,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.042328042328042326,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.018518518518518517,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.007936507936507936,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 290,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 76,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 19,
              name: "tennis-court",
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
        populationCount: 24501,
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
