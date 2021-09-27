export const downtown_miami: any = {
  data: {
    shape: {
      id: "250",
      name: "Downtown_miami. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:37:32.903275Z",
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
                  [-80.2063619852491, 25.7734555071326],
                  [-80.2063619852491, 25.7552736889508],
                  [-80.1881801670673, 25.7552736889508],
                  [-80.1881801670673, 25.7734555071326],
                  [-80.2063619852491, 25.7734555071326],
                  [-80.2063619852491, 25.7734555071326],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Miami-Dade County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1779, completed: 1779, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 420, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.20302256629580542,
          averageBuildingHeight: 8.739560420979668,
          buildingCount: 879,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 8.042556842063329,
          building3lessAreaCoverage: 0.03680018470400856,
          building3to8AreaCoverage: 0.05253014337448847,
          building8moreAreaCoverage: 0.1276253473191034,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 9628753283,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 3936307836,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1369115093,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 879744815,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 68144387, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.3238095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.18571428571428572,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.1595238095238095,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.09761904761904762,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.09285714285714286,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.09047619047619047,
            __typename: "LandUseSummary",
          },
          { name: "CULTIVATED", value: 0.05, __typename: "LandUseSummary" },
        ],
        objects: {
          small: [
            {
              count: 2155,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 34, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 14,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 5, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 3,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "harbor", __typename: "ObjectsSummaryInfo" },
          ],
          large: [
            {
              count: 2,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 32634,
        stats: {
          incomePerCapita: 25481,
          housingUnitsTotal: 1008908,
          population: 2702602,
          unitsInStructure1: 503457,
          unitsInStructure2to9: 107620,
          unitsInStructure10to19: 69799,
          unitsInStructure20more: 314661,
          unitsInStructureMobile: 13371,
          totalUnits: 448011,
          averageUnitPrice: 346603,
          medianUnitPrice: 242809,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
