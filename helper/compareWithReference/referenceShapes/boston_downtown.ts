export const boston_downtown: any = {
  data: {
    shape: {
      id: "244",
      name: "Boston_downtown. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:22:08.158437Z",
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
                  [-71.0764299794136, 42.3611875410542],
                  [-71.0764299794136, 42.3430057228724],
                  [-71.0582481612318, 42.3430057228724],
                  [-71.0582481612318, 42.3611875410542],
                  [-71.0764299794136, 42.3611875410542],
                  [-71.0764299794136, 42.3611875410542],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Massachusetts",
          admin2: "Suffolk County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1422, completed: 1422, __typename: "Progress" },
      tiles: { large: 24, medium: 54, small: 336, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.31966304779052734,
          averageBuildingHeight: 9.947897371492457,
          buildingCount: 516,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 10.375128952468367,
          building3lessAreaCoverage: 0.004876659030006046,
          building3to8AreaCoverage: 0.0669003895350865,
          building8moreAreaCoverage: 0.22801567259288968,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 22940890520,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 9428634960,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 4891672772,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 972777264,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 171109711, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.2648809523809524,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.20535714285714285,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.16964285714285715,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.12797619047619047,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.12202380952380952,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.07142857142857142,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.03869047619047619,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1352,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 13, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 7,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 6, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "harbor",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            { count: 2, name: "bridge", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 36690,
        stats: {
          incomePerCapita: 38031,
          housingUnitsTotal: 328662,
          population: 780685,
          unitsInStructure1: 65164,
          unitsInStructure2to9: 161181,
          unitsInStructure10to19: 24326,
          unitsInStructure20more: 77294,
          unitsInStructureMobile: 697,
          totalUnits: 110361,
          averageUnitPrice: 543622,
          medianUnitPrice: 430903,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
