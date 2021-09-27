export const menloPark: any = {
  data: {
    shape: {
      id: "260",
      name: "MenloPark. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:59:57.653261Z",
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
                  [-122.168519433018, 37.4642918159282],
                  [-122.150337614836, 37.4642918159282],
                  [-122.150337614836, 37.48247363411],
                  [-122.168519433018, 37.48247363411],
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
          averageBuildingAreaCoverage: 0.24007774801815257,
          averageBuildingHeight: 2.7779782806039046,
          buildingCount: 810,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.524606817457212,
          building3lessAreaCoverage: 0.09524668632101278,
          building3to8AreaCoverage: 0.026888166155133928,
          building8moreAreaCoverage: 0.0384475323332458,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 10583003567,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 5105803357,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 940375905,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 758614789,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 221075769, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.5518207282913166,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.12885154061624648,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.09523809523809523,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.08123249299719888,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.0784313725490196,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.03361344537815126,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.03081232492997199,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1506,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 3,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "baseball-diamond",
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
        populationCount: 13623,
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
