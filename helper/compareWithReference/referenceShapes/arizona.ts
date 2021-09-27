export const arizona: any = {
  data: {
    shape: {
      id: "234",
      name: "Arizona. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T05:50:53.406398Z",
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
                  [-112.1687515298017, 33.654394833414266],
                  [-112.16882067564723, 33.64715805549338],
                  [-112.15187994350453, 33.64733082385902],
                  [-112.15210424196599, 33.65447544049098],
                  [-112.1687515298017, 33.654394833414266],
                  [-112.1687515298017, 33.654394833414266],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Arizona",
          admin2: "Maricopa County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 591, completed: 591, __typename: "Progress" },
      tiles: { large: 11, medium: 24, small: 139, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2792678942783273,
          averageBuildingHeight: 2.3970264635669496,
          buildingCount: 487,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.620121581451196,
          building3lessAreaCoverage: 0.14229896600297887,
          building3to8AreaCoverage: 0.028814247186235386,
          building8moreAreaCoverage: 0.0032366745763545415,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 1015256189,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 740357559,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 42085285,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 5995564,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 1403455, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.8633093525179856,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.04316546762589928,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.02877697841726619,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.02158273381294964,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.02158273381294964,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.02158273381294964,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 828,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 74,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 26,
              name: "large-vehicle",
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
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 7155,
        stats: {
          incomePerCapita: 30186,
          housingUnitsTotal: 1699628,
          population: 4155501,
          unitsInStructure1: 1189569,
          unitsInStructure2to9: 172541,
          unitsInStructure10to19: 109628,
          unitsInStructure20more: 139012,
          unitsInStructureMobile: 88878,
          totalUnits: 908516,
          averageUnitPrice: 288430,
          medianUnitPrice: 224993,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
