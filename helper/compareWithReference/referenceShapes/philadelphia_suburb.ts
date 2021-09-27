export const philadelphia_suburb: any = {
  data: {
    shape: {
      id: "264",
      name: "Philadelphia_suburb. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:09:07.976901Z",
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
                  [-75.1810113373057, 39.9912122170993],
                  [-75.1810113373057, 39.9730303989175],
                  [-75.1628295191239, 39.9730303989175],
                  [-75.1628295191239, 39.9912122170993],
                  [-75.1810113373057, 39.9912122170993],
                  [-75.1810113373057, 39.9912122170993],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Pennsylvania",
          admin2: "Philadelphia County",
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
          averageBuildingAreaCoverage: 0.2727034539401698,
          averageBuildingHeight: 4.425037163205394,
          buildingCount: 1289,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.454902958572724,
          building3lessAreaCoverage: 0.07157660732750132,
          building3to8AreaCoverage: 0.13287652707567402,
          building8moreAreaCoverage: 0.029000375785079656,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3226331362,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1919328796,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 226788504,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 84981683,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 71020597, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.45938375350140054,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.3137254901960784,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.09243697478991597,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.056022408963585436,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.03361344537815126,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.022408963585434174,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.022408963585434174,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2910,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 10,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 7,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 3, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "harbor",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 4,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
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
        populationCount: 29467,
        stats: {
          incomePerCapita: 24811,
          housingUnitsTotal: 679876,
          population: 1569657,
          unitsInStructure1: 455126,
          unitsInStructure2to9: 125419,
          unitsInStructure10to19: 15734,
          unitsInStructure20more: 81349,
          unitsInStructureMobile: 2248,
          totalUnits: 308695,
          averageUnitPrice: 199878,
          medianUnitPrice: 151536,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
