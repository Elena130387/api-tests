export const menloPark: any = {
  data: {
    shape: {
      id: "195",
      name: "AOI_Regression_MenloPark",
      createdAt: "2021-09-14T09:59:44.576135Z",
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
                  [-122.168519433018, 37.48247363411],
                  [-122.150337614836, 37.48247363411],
                  [-122.150337614836, 37.4642918159282],
                  [-122.168519433018, 37.4642918159282],
                  [-122.168519433018, 37.48247363411],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "San Mateo County",
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
          averageBuildingAreaCoverage: 0.20878299745191045,
          averageBuildingHeight: 2.82204307688923,
          buildingCount: 998,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.223293558607159,
          building3lessAreaCoverage: 0.09953846650965073,
          building3to8AreaCoverage: 0.03975136807652749,
          building8moreAreaCoverage: 0.03592688296021534,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 9451749236,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 4730335149,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 881226769,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 583593777,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 183340372, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.5630252100840336,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.13165266106442577,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.08403361344537816,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.08403361344537816,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.0784313725490196,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.04201680672268908,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.01680672268907563,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2094,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 16,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 5,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 4, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 3,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "ship", __typename: "ObjectsSummaryInfo" },
          ],
          large: [
            {
              count: 2,
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
        populationCount: 13679,
        stats: {
          incomePerCapita: 53516,
          housingUnitsTotal: 275109,
          population: 763450,
          unitsInStructure1: 178122,
          unitsInStructure2to9: 39041,
          unitsInStructure10to19: 16353,
          unitsInStructure20more: 38456,
          unitsInStructureMobile: 3137,
          totalUnits: 156400,
          averageUnitPrice: 1117414,
          medianUnitPrice: 917697,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
