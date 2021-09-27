export const la_downtown: any = {
  data: {
    shape: {
      id: "256",
      name: "La_downtown. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:51:55.182758Z",
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
                  [-118.265568484725, 34.0621368607523],
                  [-118.265568484725, 34.0439550425705],
                  [-118.247386666543, 34.0439550425705],
                  [-118.247386666543, 34.0621368607523],
                  [-118.265568484725, 34.0621368607523],
                  [-118.265568484725, 34.0621368607523],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Los Angeles County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1596, completed: 1596, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.34875338922732724,
          averageBuildingHeight: 9.030960680979566,
          buildingCount: 616,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 11.209344888497853,
          building3lessAreaCoverage: 0.012462414130962714,
          building3to8AreaCoverage: 0.043792966812375995,
          building8moreAreaCoverage: 0.2639928343434813,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 29559243944,
        insuranceExposure: [
          {
            name: "COMMERCIAL",
            value: 7686391916,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 4816271761,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 4020109446,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 203393238,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "OTHERIMP",
            value: 0.2777777777777778,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.23544973544973544,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.20899470899470898,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.17989417989417988,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.05291005291005291,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.03968253968253968,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.005291005291005291,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 971,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 17,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 14,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 9,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 8,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
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
              count: 3,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "bridge", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 12372,
        stats: {
          incomePerCapita: 30798,
          housingUnitsTotal: 3506903,
          population: 10105722,
          unitsInStructure1: 1957238,
          unitsInStructure2to9: 560403,
          unitsInStructure10to19: 269963,
          unitsInStructure20more: 662186,
          unitsInStructureMobile: 57113,
          totalUnits: 1512364,
          averageUnitPrice: 644984,
          medianUnitPrice: 495829,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
