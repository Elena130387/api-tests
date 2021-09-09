export const summaryReference = {
  buildings: {
    averageBuildingAreaCoverage: 0.24977891222178508,
    averageBuildingHeight: 2.388449533966287,
    buildingCount: 475,
    __typename: "BuildingsSummary",
  },
  buildingHeight: {
    averageBuildingHeight: 2.620121581451196,
    building3lessAreaCoverage: 0.14229896600297887,
    building3to8AreaCoverage: 0.028814247186235386,
    building8moreAreaCoverage: 0.0032366745763545415,
    __typename: "BuildingHeightSummary",
  },
  economicExposure: 906188742,
  insuranceExposure: [
    {
      name: "RESIDENTIAL",
      value: 663968842,
      __typename: "InsuranceSummary",
    },
    {
      name: "COMMERCIAL",
      value: 35975802,
      __typename: "InsuranceSummary",
    },
    {
      name: "INDUSTRIAL",
      value: 6041748,
      __typename: "InsuranceSummary",
    },
    {
      name: "AGRI",
      value: 349095,
      __typename: "InsuranceSummary",
    },
  ],
  landUse: [
    {
      name: "RESIDENTIAL",
      value: 0.8633093525179856,
      __typename: "LandUseSummary",
    },
    {
      name: "CULTIVATED",
      value: 0.04316546762589928,
      __typename: "LandUseSummary",
    },
    {
      name: "OTHERIMP",
      value: 0.02877697841726619,
      __typename: "LandUseSummary",
    },
    {
      name: "COMMERCIAL",
      value: 0.02158273381294964,
      __typename: "LandUseSummary",
    },
    {
      name: "INDUSTRIAL",
      value: 0.02158273381294964,
      __typename: "LandUseSummary",
    },
    {
      name: "RIGHTOFWAY",
      value: 0.02158273381294964,
      __typename: "LandUseSummary",
    },
  ],
  objects: {
    small: [
      {
        count: 828,
        name: "small-vehicle",
        __typename: "ObjectsSummaryInfo",
      },
      {
        count: 74,
        name: "swimming-pool",
        __typename: "ObjectsSummaryInfo",
      },
      {
        count: 26,
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
        count: 1,
        name: "baseball-diamond",
        __typename: "ObjectsSummaryInfo",
      },
    ],
    __typename: "ObjectsSummary",
  },
  populationCount: 7155,
  stats: {
    incomePerCapita: 30186,
    housingUnitsTotal: 1699628,
    population: 4155501,
    unitsInStructure1: 1189569,
    unitsInStructure2to9: 172541,
    unitsInStructure10to19: 109628,
    unitsInStructure20more: 139012,
    unitsInStructureMobile: 88878,
    totalUnits: 908516,
    averageUnitPrice: 288430,
    medianUnitPrice: 224993,
    __typename: "StatsSummary",
  },
  derivativeFriendlyRate: 1,
  __typename: "PolygonSummary",
};
