export const buildings_in_Forest2: any = {
  data: {
    shape: {
      id: "247",
      name: "Buildings_in_Forest2. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:29:51.453960Z",
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
                  [-121.729383817304, 40.0296968985677],
                  [-121.729383817304, 40.0115150803859],
                  [-121.711201999122, 40.0115150803859],
                  [-121.711201999122, 40.0296968985677],
                  [-121.729383817304, 40.0296968985677],
                  [-121.729383817304, 40.0296968985677],
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
      progress: { total: 1521, completed: 1521, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.0005200810793067227,
          averageBuildingHeight: 3.4428651696165176,
          buildingCount: 13,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.575420559806685,
          building3lessAreaCoverage: 0.0016184788124234068,
          building3to8AreaCoverage: 0.0003359711804643733,
          building8moreAreaCoverage: 0.000031863941865808826,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 4634078,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 3707263,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
          {
            name: "INDUSTRIAL",
            value: 0,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.8739495798319328,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.11484593837535013,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.011204481792717087,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            { count: 1, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 82,
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
