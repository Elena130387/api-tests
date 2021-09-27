export const agri2: any = {
  data: {
    shape: {
      id: "237",
      name: "Agri2. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T05:57:55.193406Z",
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
                  [-93.0251777110483, 41.9793771339458],
                  [-93.0251777110483, 41.961195315764],
                  [-93.0069958928665, 41.961195315764],
                  [-93.0069958928665, 41.9793771339458],
                  [-93.0251777110483, 41.9793771339458],
                  [-93.0251777110483, 41.9793771339458],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Iowa",
          admin2: "Marshall County",
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
          averageBuildingAreaCoverage: 0.0034046547085631127,
          averageBuildingHeight: 2.8908148336101003,
          buildingCount: 46,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.7339003116057783,
          building3lessAreaCoverage: 0.0006031282141762955,
          building3to8AreaCoverage: 0.00039106523957239145,
          building8moreAreaCoverage: 0,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 16659426,
        insuranceExposure: [
          {
            name: "INDUSTRIAL",
            value: 5174173,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1143222,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 545587,
            __typename: "InsuranceSummary",
          },
          { name: "RESIDENTIAL", value: 0, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "CULTIVATED",
            value: 0.865546218487395,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.07282913165266107,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.056022408963585436,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 9,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 15,
        stats: {
          incomePerCapita: 25693,
          housingUnitsTotal: 16751,
          population: 40476,
          unitsInStructure1: 13043,
          unitsInStructure2to9: 1954,
          unitsInStructure10to19: 415,
          unitsInStructure20more: 749,
          unitsInStructureMobile: 590,
          totalUnits: 10902,
          averageUnitPrice: 134708,
          medianUnitPrice: 104607,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
