export const joplin_MO: any = {
  data: {
    shape: {
      id: "198",
      name: "AOI_Regression_Joplin_MO",
      createdAt: "2021-09-14T10:59:36.398164Z",
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
                  [-94.5226601095418, 37.093396516623],
                  [-94.50447829136, 37.093396516623],
                  [-94.50447829136, 37.0752146984412],
                  [-94.5226601095418, 37.0752146984412],
                  [-94.5226601095418, 37.093396516623],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Missouri",
          admin2: "Jasper County",
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
          averageBuildingAreaCoverage: 0.14623942703166337,
          averageBuildingHeight: 6.887509952311536,
          buildingCount: 1171,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 5.788240953037772,
          building3lessAreaCoverage: 0.009232233441065229,
          building3to8AreaCoverage: 0.023246199996383103,
          building8moreAreaCoverage: 0.02039670187329489,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 2222837497,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 991059499,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 183820865,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 143006944,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 96038302, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.4365079365079365,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.291005291005291,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.10846560846560846,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.06613756613756613,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.04497354497354497,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.03968253968253968,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.013227513227513227,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1250,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 2,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "harbor", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 2,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "bridge", __typename: "ObjectsSummaryInfo" },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 5647,
        stats: {
          incomePerCapita: 23390,
          housingUnitsTotal: 51995,
          population: 118522,
          unitsInStructure1: 41286,
          unitsInStructure2to9: 5548,
          unitsInStructure10to19: 1000,
          unitsInStructure20more: 1311,
          unitsInStructureMobile: 2850,
          totalUnits: 29707,
          averageUnitPrice: 136934,
          medianUnitPrice: 112736,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
