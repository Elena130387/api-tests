export const naples: any = {
  data: {
    shape: {
      id: "175",
      name: "AOI_Regression_Naples",
      createdAt: "2021-09-13T16:16:03.170584Z",
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
                  [-81.7628561258889, 26.1694239478754],
                  [-81.7628561258889, 26.1512421296936],
                  [-81.7810379440707, 26.1512421296936],
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
          averageBuildingAreaCoverage: 0.10512657452346687,
          averageBuildingHeight: 3.191544729904996,
          buildingCount: 580,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.831776056183651,
          building3lessAreaCoverage: 0.031282850375450345,
          building3to8AreaCoverage: 0.04647385446648849,
          building8moreAreaCoverage: 0.013505959570557252,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 2116656868,
        insuranceExposure: [
          {
            name: "INDUSTRIAL",
            value: 424975195,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 368775894,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 294686908,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 30631251, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "CULTIVATED",
            value: 0.3107769423558897,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.3057644110275689,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.19298245614035087,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.08771929824561403,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.07017543859649122,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.022556390977443608,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.010025062656641603,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1952,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 46, name: "plane", __typename: "ObjectsSummaryInfo" },
            {
              count: 11,
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
            { count: 1, name: "helicopter", __typename: "ObjectsSummaryInfo" },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 3952,
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
