export const buildings_in_Forest: any = {
  data: {
    shape: {
      id: "246",
      name: "Buildings_in_Forest. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:26:35.764623Z",
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
                  [-121.579075155813, 39.7891946491131],
                  [-121.560893337631, 39.7891946491131],
                  [-121.560893337631, 39.8073764672949],
                  [-121.579075155813, 39.8073764672949],
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
          averageBuildingAreaCoverage: 0.0006108858338257178,
          averageBuildingHeight: 3.1099891607215255,
          buildingCount: 16,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 5.466500552499068,
          building3lessAreaCoverage: 0.0000448360496542367,
          building3to8AreaCoverage: 0.0002028307660955007,
          building8moreAreaCoverage: 0.000006667706144957983,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3504778,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2803822,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
          {
            name: "COMMERCIAL",
            value: 0,
            __typename: "InsuranceSummary",
          },
          { name: "INDUSTRIAL", value: 0, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.7535014005602241,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.23809523809523808,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.008403361344537815,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 29,
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
        populationCount: 1429,
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
