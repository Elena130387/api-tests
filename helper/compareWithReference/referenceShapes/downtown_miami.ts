export const downtown_miami: any = {
  data: {
    shape: {
      id: "177",
      name: "AOI_Regression_downtown_miami",
      createdAt: "2021-09-13T16:54:20.566629Z",
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
                  [-80.1881801670673, 25.7734555071326],
                  [-80.1881801670673, 25.7552736889508],
                  [-80.2063619852491, 25.7552736889508],
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
          averageBuildingAreaCoverage: 0.2169596717471168,
          averageBuildingHeight: 8.65245557932198,
          buildingCount: 1109,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 8.042556842063329,
          building3lessAreaCoverage: 0.03680018470400856,
          building3to8AreaCoverage: 0.05253014337448847,
          building8moreAreaCoverage: 0.1276253473191034,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 10122073048,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 4151959947,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1421817797,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 940972534,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 62998632, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.3261904761904762,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.18333333333333332,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.1595238095238095,
            __typename: "LandUseSummary",
          },
          { name: "COMMERCIAL", value: 0.1, __typename: "LandUseSummary" },
          {
            name: "RIGHTOFWAY",
            value: 0.09285714285714286,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.0880952380952381,
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
