export const suburb_miami: any = {
  data: {
    shape: {
      id: "178",
      name: "AOI_Regression_suburb_miami",
      createdAt: "2021-09-13T18:27:39.408005Z",
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
                  [-80.2988835889392, 25.8379674144722],
                  [-80.2807017707574, 25.8379674144722],
                  [-80.2807017707574, 25.8197855962904],
                  [-80.2988835889392, 25.8197855962904],
                  [-80.2988835889392, 25.8379674144722],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Miami-Dade County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1779, completed: 1779, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 420, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.22694963727678572,
          averageBuildingHeight: 3.4286209197380657,
          buildingCount: 1619,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.768305270640936,
          building3lessAreaCoverage: 0.09487791515531994,
          building3to8AreaCoverage: 0.0505987803141276,
          building8moreAreaCoverage: 0.021617925734747023,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3981162617,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1599083882,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 456697208,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 455571699,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 24383575, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.638095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.08095238095238096,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.07380952380952381,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.06904761904761905,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.06190476190476191,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.04285714285714286,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.03333333333333333,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2848,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 36,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 6,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 1, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 6,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
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
        populationCount: 14674,
        stats: {
          incomePerCapita: 25481,
          housingUnitsTotal: 1008908,
          population: 2702602,
          unitsInStructure1: 503457,
          unitsInStructure2to9: 107620,
          unitsInStructure10to19: 69799,
          unitsInStructure20more: 314661,
          unitsInStructureMobile: 13371,
          totalUnits: 448011,
          averageUnitPrice: 346603,
          medianUnitPrice: 242809,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
