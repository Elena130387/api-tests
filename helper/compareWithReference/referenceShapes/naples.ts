export const naples: any = {
  data: {
    shape: {
      id: "261",
      name: "Naples. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:03:11.993234Z",
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
                  [-81.7810379440707, 26.1694239478754],
                  [-81.7810379440707, 26.1512421296936],
                  [-81.7628561258889, 26.1512421296936],
                  [-81.7628561258889, 26.1694239478754],
                  [-81.7810379440707, 26.1694239478754],
                  [-81.7810379440707, 26.1694239478754],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Collier County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1695, completed: 1695, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.12836335834703946,
          averageBuildingHeight: 3.215324771772431,
          buildingCount: 660,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.865213963857471,
          building3lessAreaCoverage: 0.031048346880384554,
          building3to8AreaCoverage: 0.04656877254782464,
          building8moreAreaCoverage: 0.013881081028988487,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 2607875520,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 531202036,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 524307047,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 324038471,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 27912373, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "INDUSTRIAL",
            value: 0.3333333333333333,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.2932330827067669,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.20300751879699247,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.08270676691729323,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.05263157894736842,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.022556390977443608,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.012531328320802004,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1950,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 46, name: "plane", __typename: "ObjectsSummaryInfo" },
            {
              count: 13,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 10, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 5,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 4, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 3,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "helicopter",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 3956,
        stats: {
          incomePerCapita: 41239,
          housingUnitsTotal: 207403,
          population: 356774,
          unitsInStructure1: 95685,
          unitsInStructure2to9: 43154,
          unitsInStructure10to19: 21295,
          unitsInStructure20more: 36904,
          unitsInStructureMobile: 10365,
          totalUnits: 99624,
          averageUnitPrice: 486639,
          medianUnitPrice: 316197,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
