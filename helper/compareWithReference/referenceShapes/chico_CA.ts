export const chico_CA: any = {
  data: {
    shape: {
      id: "248",
      name: "Chico_CA. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:33:02.555226Z",
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
                  [-121.844865658448, 39.7085355482147],
                  [-121.826683840266, 39.7085355482147],
                  [-121.826683840266, 39.7267173663965],
                  [-121.844865658448, 39.7267173663965],
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
          averageBuildingAreaCoverage: 0.05255826314290365,
          averageBuildingHeight: 2.649600891183195,
          buildingCount: 527,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.170775907387109,
          building3lessAreaCoverage: 0.024174962724958147,
          building3to8AreaCoverage: 0.011299837203252883,
          building8moreAreaCoverage: 0.006524767194475446,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 584478193,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 292244221,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 52863933,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 47880717,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 3409372, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.4523809523809524,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.32142857142857145,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.14285714285714285,
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
        populationCount: 6061,
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
