export const la_suburb: any = {
  data: {
    shape: {
      id: "258",
      name: "La_suburb. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:56:29.499592Z",
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
                  [-118.208390492354, 33.9317554909191],
                  [-118.208390492354, 33.9135736727373],
                  [-118.190208674172, 33.9135736727373],
                  [-118.190208674172, 33.9317554909191],
                  [-118.208390492354, 33.9317554909191],
                  [-118.208390492354, 33.9317554909191],
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
      progress: { total: 1611, completed: 1611, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2825574117993552,
          averageBuildingHeight: 2.768846953041011,
          buildingCount: 1152,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.0276571052847348,
          building3lessAreaCoverage: 0.14875434189246445,
          building3to8AreaCoverage: 0.021151487158719826,
          building8moreAreaCoverage: 0.015677840621383103,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 6903917913,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 3843538530,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 607879010,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 258086058,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 132344374, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6798941798941799,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.12698412698412698,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.06613756613756613,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.0582010582010582,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.03968253968253968,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.023809523809523808,
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
              count: 2529,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 31,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 12,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 2,
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
              count: 2,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 27746,
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
