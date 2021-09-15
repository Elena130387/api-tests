export const philadelphia_suburb: any = {
  data: {
    shape: {
      id: "197",
      name: "AOI_Regression_Philadelphia_suburb",
      createdAt: "2021-09-14T10:04:46.434486Z",
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
                  [-75.1810113373057, 39.9912122170993],
                  [-75.1628295191239, 39.9912122170993],
                  [-75.1628295191239, 39.9730303989175],
                  [-75.1810113373057, 39.9730303989175],
                  [-75.1810113373057, 39.9912122170993],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Pennsylvania",
          admin2: "Philadelphia County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1521, completed: 1521, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2841364328934699,
          averageBuildingHeight: 4.212758217387167,
          buildingCount: 1359,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.528903221835338,
          building3lessAreaCoverage: 0.06880365366361388,
          building3to8AreaCoverage: 0.13417207092798056,
          building8moreAreaCoverage: 0.03098132563572304,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3193685618,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1862458899,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 265731551,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 78500931,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 67942127, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.4341736694677871,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.36134453781512604,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.09243697478991597,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.04201680672268908,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.028011204481792718,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.025210084033613446,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.01680672268907563,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 3154,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 10,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 6,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 3, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            { count: 1, name: "harbor", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 4,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
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
        populationCount: 32101,
        stats: {
          incomePerCapita: 24811,
          housingUnitsTotal: 679876,
          population: 1569657,
          unitsInStructure1: 455126,
          unitsInStructure2to9: 125419,
          unitsInStructure10to19: 15734,
          unitsInStructure20more: 81349,
          unitsInStructureMobile: 2248,
          totalUnits: 308695,
          averageUnitPrice: 199878,
          medianUnitPrice: 151536,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
