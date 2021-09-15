export const sanFrancisco_downtown: any = {
  data: {
    shape: {
      id: "194",
      name: "AOI_Regression_SanFrancisco_downtown",
      createdAt: "2021-09-14T09:59:03.580847Z",
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
                  [-122.423326478769, 37.7934506925063],
                  [-122.405144660587, 37.7934506925063],
                  [-122.405144660587, 37.7752688743245],
                  [-122.423326478769, 37.7752688743245],
                  [-122.423326478769, 37.7934506925063],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "San Francisco County",
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
          averageBuildingAreaCoverage: 0.5231432874663537,
          averageBuildingHeight: 5.870915587619848,
          buildingCount: 476,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 9.665251801078035,
          building3lessAreaCoverage: 0.005786500391172094,
          building3to8AreaCoverage: 0.17035290373473608,
          building8moreAreaCoverage: 0.26707009708180146,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 50284686703,
        insuranceExposure: [
          {
            name: "COMMERCIAL",
            value: 18221433343,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 7754331527,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 4087643557,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 1082351, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.4425770308123249,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.25210084033613445,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.16526610644257703,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.11484593837535013,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.022408963585434174,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2757,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 7,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 2,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "storage-tank",
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
              name: "soccer-ball-field",
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
        populationCount: 33605,
        stats: {
          incomePerCapita: 59508,
          housingUnitsTotal: 390376,
          population: 864263,
          unitsInStructure1: 124065,
          unitsInStructure2to9: 123177,
          unitsInStructure10to19: 38486,
          unitsInStructure20more: 103846,
          unitsInStructureMobile: 802,
          totalUnits: 133812,
          averageUnitPrice: 1108474,
          medianUnitPrice: 927383,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
