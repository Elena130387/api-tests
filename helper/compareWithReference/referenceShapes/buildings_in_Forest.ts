export const buildings_in_Forest: any = {
  data: {
    shape: {
      id: "170",
      name: "AOI_Regression_Buildings_in_Forest",
      createdAt: "2021-09-13T13:52:15.378780Z",
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
                  [-121.579075155813, 39.8073764672949],
                  [-121.560893337631, 39.8073764672949],
                  [-121.560893337631, 39.7891946491131],
                  [-121.579075155813, 39.7891946491131],
                  [-121.579075155813, 39.8073764672949],
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
      progress: { total: 1512, completed: 1512, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.002166171033843225,
          averageBuildingHeight: 3.478061314658571,
          buildingCount: 33,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.746804625249566,
          building3lessAreaCoverage: 0.00006379199629070379,
          building3to8AreaCoverage: 0.00018688810973608192,
          building8moreAreaCoverage: 0.000006667706144957983,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 21260361,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 13881514,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 1563387,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
          { name: "COMMERCIAL", value: 0, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.7450980392156863,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.22128851540616246,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.03361344537815126,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 32,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 3, name: "ship", __typename: "ObjectsSummaryInfo" },
          ],
          large: [
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 1403,
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
