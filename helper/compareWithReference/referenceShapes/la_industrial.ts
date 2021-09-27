export const la_industrial: any = {
  data: {
    shape: {
      id: "257",
      name: "La_industrial. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:54:12.857001Z",
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
                  [-118.406896802237, 33.9254994304161],
                  [-118.425078620419, 33.9254994304161],
                  [-118.425078620419, 33.9073176122343],
                  [-118.406896802237, 33.9073176122343],
                  [-118.406896802237, 33.9254994304161],
                  [-118.406896802237, 33.9254994304161],
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
          averageBuildingAreaCoverage: 0.3167246662119709,
          averageBuildingHeight: 4.132411292062324,
          buildingCount: 885,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 6.1004920171328205,
          building3lessAreaCoverage: 0.09523928606951679,
          building3to8AreaCoverage: 0.03414862496512277,
          building8moreAreaCoverage: 0.04751837190496858,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 10721501870,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2658248677,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 2432266109,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 697363528,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 46725963, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "INDUSTRIAL",
            value: 0.4576719576719577,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.2619047619047619,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.08465608465608465,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.07936507936507936,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.07142857142857142,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.03968253968253968,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.005291005291005291,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1628,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 45,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 30,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 13,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 9,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 7,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 7,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
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
        populationCount: 14508,
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
