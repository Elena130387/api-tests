export const shapeObject = (
  name: string,
  forceProcessing: boolean,
  testDataGenerating = true,
  coordinates: any[] = smallShape
) => ({
  name,
  polygons: [
    {
      name: `polygon: ${name} `,
      description: `description: ${name}`,
      coordinates: coordinates,
      shapeId: 0,
      forceProcessing,
      testDataGenerating,
    },
  ],
});
export const smallShape = [
  { lat: 26.136744666722507, lon: -81.7996547336161 },
  { lat: 26.135859268938685, lon: -81.79952747653266 },
  { lat: 26.13592158454476, lon: -81.79887094567114 },
  { lat: 26.13682515709741, lon: -81.79899820275458 },
  { lat: 26.136744666722507, lon: -81.7996547336161 },
];

export const shape01km2 = [
  { lat: 28.599252588880637, lon: -81.54515420606021 },
  { lat: 28.599073635262213, lon: -81.54514481832898 },
  { lat: 28.59920314120063, lon: -81.54497583916105 },
  { lat: 28.599252588880637, lon: -81.54515420606021 },
];
export const shape4km2 = [
  { lat: 28.45, lon: -81.2 },
  { lat: 28.47, lon: -81.2 },
  { lat: 28.47, lon: -81.22 },
  { lat: 28.45, lon: -81.22 },
  { lat: 28.45, lon: -81.2 },
];
export const shape400km2 = [
  { lat: 28.45, lon: -81.2 },
  { lat: 28.65, lon: -81.2 },
  { lat: 28.65, lon: -81.4 },
  { lat: 28.45, lon: -81.4 },
  { lat: 28.45, lon: -81.2 },
];
