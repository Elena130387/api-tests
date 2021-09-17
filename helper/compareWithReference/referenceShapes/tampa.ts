export const tampa: any = {
  data: {
    shape: {
      id: "176",
      name: "AOI_Regression_Tampa",
      createdAt: "2021-09-13T16:38:10.249805Z",
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
                  [-82.8380463227566, 27.8783474001336],
                  [-82.8198645045748, 27.8783474001336],
                  [-82.8198645045748, 27.8601655819518],
                  [-82.8380463227566, 27.8601655819518],
                  [-82.8380463227566, 27.8783474001336],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Pinellas County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1695, completed: 1695, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.20260274021846608,
          averageBuildingHeight: 2.415590440758579,
          buildingCount: 1776,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.616084466383185,
          building3lessAreaCoverage: 0.1172313259956532,
          building3to8AreaCoverage: 0.035272641289503054,
          building8moreAreaCoverage: 0.002184913271949405,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 1585685803,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1203734096,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 22844551,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 12314886, __typename: "InsuranceSummary" },
          { name: "INDUSTRIAL", value: 757723, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.9223057644110275,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.03759398496240601,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.022556390977443608,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.007518796992481203,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.005012531328320802,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.005012531328320802,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 678,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 189,
              name: "swimming-pool",
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
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 9660,
        stats: {
          incomePerCapita: 32120,
          housingUnitsTotal: 506468,
          population: 949842,
          unitsInStructure1: 269263,
          unitsInStructure2to9: 67691,
          unitsInStructure10to19: 35162,
          unitsInStructure20more: 86080,
          unitsInStructureMobile: 48272,
          totalUnits: 265628,
          averageUnitPrice: 235199,
          medianUnitPrice: 167116,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
