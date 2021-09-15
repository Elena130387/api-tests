export const chico_CA: any = {
  data: {
    shape: {
      id: "164",
      name: "AOI_Regression_Chico_CA",
      createdAt: "2021-09-13T09:59:15.552100Z",
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
                  [-121.844865658448, 39.7267173663965],
                  [-121.826683840266, 39.7267173663965],
                  [-121.826683840266, 39.7085355482147],
                  [-121.844865658448, 39.7085355482147],
                  [-121.844865658448, 39.7267173663965],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Butte County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1428, completed: 1428, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 336, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.04099530265444801,
          averageBuildingHeight: 2.6485267490289908,
          buildingCount: 494,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.1707759073871102,
          building3lessAreaCoverage: 0.024174962724958147,
          building3to8AreaCoverage: 0.011299837203252883,
          building8moreAreaCoverage: 0.006524767194475446,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 438665799,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 249129526,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 35477340,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 24477462,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 2079402, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.4583333333333333,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.31845238095238093,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.13988095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.03273809523809524,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.02976190476190476,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.01488095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.005952380952380952,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 303,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 6040,
        stats: {
          incomePerCapita: 26304,
          housingUnitsTotal: 98119,
          population: 225207,
          unitsInStructure1: 65008,
          unitsInStructure2to9: 12607,
          unitsInStructure10to19: 2959,
          unitsInStructure20more: 4783,
          unitsInStructureMobile: 12762,
          totalUnits: 50844,
          averageUnitPrice: 279932,
          medianUnitPrice: 238187,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
