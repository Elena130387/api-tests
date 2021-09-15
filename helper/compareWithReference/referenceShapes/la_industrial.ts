export const la_industrial: any = {
  data: {
    shape: {
      id: "192",
      name: "AOI_Regression_LA_industrial",
      createdAt: "2021-09-14T09:23:52.231769Z",
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
                  [-118.406896802237, 33.9254994304161],
                  [-118.425078620419, 33.9254994304161],
                  [-118.425078620419, 33.9073176122343],
                  [-118.406896802237, 33.9073176122343],
                  [-118.406896802237, 33.9254994304161],
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
      progress: { total: 1602, completed: 1602, __typename: "Progress" },
      tiles: { large: 36, medium: 54, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2894219292534722,
          averageBuildingHeight: 4.35302166257929,
          buildingCount: 1231,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 6.086906459567626,
          building3lessAreaCoverage: 0.0851089840843564,
          building3to8AreaCoverage: 0.041031125992063495,
          building8moreAreaCoverage: 0.04351879301525298,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 10303794228,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2525108058,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 2298957466,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 768182364,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 35913467, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "INDUSTRIAL",
            value: 0.41534391534391535,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.2619047619047619,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.10317460317460317,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.09523809523809523,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.06878306878306878,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.05291005291005291,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.0026455026455026454,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1778,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 43,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 26, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 12,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 9,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 7,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 8,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
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
        populationCount: 15486,
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
