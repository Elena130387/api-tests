export const houston_suburb: any = {
  data: {
    shape: {
      id: "174",
      name: "AOI_Regression_Houston_suburb",
      createdAt: "2021-09-13T15:57:49.518173Z",
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
                  [-95.3940884500424, 29.7971473159188],
                  [-95.3759066318606, 29.7971473159188],
                  [-95.3759066318606, 29.778965497737],
                  [-95.3940884500424, 29.778965497737],
                  [-95.3940884500424, 29.7971473159188],
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
      progress: { total: 1689, completed: 1689, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.24385342323092887,
          averageBuildingHeight: 3.2244691542457264,
          buildingCount: 1600,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.122548207328381,
          building3lessAreaCoverage: 0.10712685262350212,
          building3to8AreaCoverage: 0.037375505107984805,
          building8moreAreaCoverage: 0.007305326915922619,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 2268484251,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1575977859,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 63939270,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 40540955,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 27178228, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.7969924812030075,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.06766917293233082,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.03759398496240601,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.03007518796992481,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.02506265664160401,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.022556390977443608,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.020050125313283207,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1388,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 33,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
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
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 2,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "bridge", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 13633,
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
