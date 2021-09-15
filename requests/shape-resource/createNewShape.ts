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

export const referensShape: any = {
  arizona: [
    { lat: 33.654394833414266, lon: -112.1687515298017 },
    { lat: 33.64715805549338, lon: -112.16882067564723 },
    { lat: 33.64733082385902, lon: -112.15187994350453 },
    { lat: 33.65447544049098, lon: -112.15210424196599 },
    { lat: 33.654394833414266, lon: -112.1687515298017 },
  ],
  snow: [
    { lat: 40.498498431138, lon: -121.283496196492 },
    { lat: 40.4803166129562, lon: -121.283496196492 },
    { lat: 40.4803166129562, lon: -121.26531437831 },
    { lat: 40.498498431138, lon: -121.26531437831 },
    { lat: 40.498498431138, lon: -121.283496196492 },
  ],
  snow2: [
    { lat: 40.4730909034857, lon: -121.444534839123 },
    { lat: 40.4549090853039, lon: -121.444534839123 },
    { lat: 40.4549090853039, lon: -121.426353020941 },
    { lat: 40.4730909034857, lon: -121.426353020941 },
    { lat: 40.4730909034857, lon: -121.444534839123 },
  ],
  forest: [
    { lat: 40.0697420132864, lon: -121.198475004438 },
    { lat: 40.0515601951046, lon: -121.198475004438 },
    { lat: 40.0515601951046, lon: -121.180293186256 },
    { lat: 40.0697420132864, lon: -121.180293186256 },
    { lat: 40.0697420132864, lon: -121.198475004438 },
  ],
  chico_CA: [
    { lat: 39.7267173663965, lon: -121.844865658448 },
    { lat: 39.7085355482147, lon: -121.844865658448 },
    { lat: 39.7085355482147, lon: -121.826683840266 },
    { lat: 39.7267173663965, lon: -121.826683840266 },
    { lat: 39.7267173663965, lon: -121.844865658448 },
  ],
  agri1: [
    { lat: 27.4305, lon: -82.0411 },
    { lat: 27.4123181818182, lon: -82.0411 },
    { lat: 27.4123181818182, lon: -82.0229181818182 },
    { lat: 27.4305, lon: -82.0229181818182 },
    { lat: 27.4305, lon: -82.0411 },
  ],
  agri2: [
    { lat: 41.9793771339458, lon: -93.0251777110483 },
    { lat: 41.961195315764, lon: -93.0251777110483 },
    { lat: 41.961195315764, lon: -93.0069958928665 },
    { lat: 41.9793771339458, lon: -93.0069958928665 },
    { lat: 41.9793771339458, lon: -93.0251777110483 },
  ],
  coastal: [
    { lat: 26.7236, lon: -82.261 },
    { lat: 26.7054181818182, lon: -82.261 },
    { lat: 26.7054181818182, lon: -82.2428181818182 },
    { lat: 26.7236, lon: -82.2428181818182 },
    { lat: 26.7236, lon: -82.261 },
  ],
  buildings_in_Forest: [
    { lat: 39.8073764672949, lon: -121.579075155813 },
    { lat: 39.7891946491131, lon: -121.579075155813 },
    { lat: 39.7891946491131, lon: -121.560893337631 },
    { lat: 39.8073764672949, lon: -121.560893337631 },
    { lat: 39.8073764672949, lon: -121.579075155813 },
  ],
  buildings_in_Forest2: [
    { lat: 40.0296968985677, lon: -121.729383817304 },
    { lat: 40.0115150803859, lon: -121.729383817304 },
    { lat: 40.0115150803859, lon: -121.711201999122 },
    { lat: 40.0296968985677, lon: -121.711201999122 },
    { lat: 40.0296968985677, lon: -121.729383817304 },
  ],
  houston_downtown: [
    { lat: 29.7681706508483, lon: -95.3774680204502 },
    { lat: 29.7499888326665, lon: -95.3774680204502 },
    { lat: 29.7499888326665, lon: -95.3592862022684 },
    { lat: 29.7681706508483, lon: -95.3592862022684 },
    { lat: 29.7681706508483, lon: -95.3774680204502 },
  ],
  houston_suburb: [
    { lat: 29.7971473159188, lon: -95.3940884500424 },
    { lat: 29.778965497737, lon: -95.3940884500424 },
    { lat: 29.778965497737, lon: -95.3759066318606 },
    { lat: 29.7971473159188, lon: -95.3759066318606 },
    { lat: 29.7971473159188, lon: -95.3940884500424 },
  ],
  naples: [
    { lat: 26.1694239478754, lon: -81.7810379440707 },
    { lat: 26.1512421296936, lon: -81.7810379440707 },
    { lat: 26.1512421296936, lon: -81.7628561258889 },
    { lat: 26.1694239478754, lon: -81.7628561258889 },
    { lat: 26.1694239478754, lon: -81.7810379440707 },
  ],
  tampa: [
    { lat: 27.8783474001336, lon: -82.8380463227566 },
    { lat: 27.8601655819518, lon: -82.8380463227566 },
    { lat: 27.8601655819518, lon: -82.8198645045748 },
    { lat: 27.8783474001336, lon: -82.8198645045748 },
    { lat: 27.8783474001336, lon: -82.8380463227566 },
  ],
  downtown_miami: [
    { lat: 25.7734555071326, lon: -80.2063619852491 },
    { lat: 25.7552736889508, lon: -80.2063619852491 },
    { lat: 25.7552736889508, lon: -80.1881801670673 },
    { lat: 25.7734555071326, lon: -80.1881801670673 },
    { lat: 25.7734555071326, lon: -80.2063619852491 },
  ],
  suburb_miami: [
    { lat: 25.8379674144722, lon: -80.2988835889392 },
    { lat: 25.8197855962904, lon: -80.2988835889392 },
    { lat: 25.8197855962904, lon: -80.2807017707574 },
    { lat: 25.8379674144722, lon: -80.2807017707574 },
    { lat: 25.8379674144722, lon: -80.2988835889392 },
  ],
  lasVegas_suburb: [
    { lat: 36.2120379310016, lon: -115.223882044888 },
    { lat: 36.1938561128198, lon: -115.223882044888 },
    { lat: 36.1938561128198, lon: -115.205700226706 },
    { lat: 36.2120379310016, lon: -115.205700226706 },
    { lat: 36.2120379310016, lon: -115.223882044888 },
  ],
  newJersey_city: [
    { lat: 40.7299452676791, lon: -74.0579929508205 },
    { lat: 40.7117634494973, lon: -74.0579929508205 },
    { lat: 40.7117634494973, lon: -74.0398111326387 },
    { lat: 40.7299452676791, lon: -74.0398111326387 },
    { lat: 40.7299452676791, lon: -74.0579929508205 },
  ],
  la_downtown: [
    { lat: 34.0621368607523, lon: -118.265568484725 },
    { lat: 34.0439550425705, lon: -118.265568484725 },
    { lat: 34.0439550425705, lon: -118.247386666543 },
    { lat: 34.0621368607523, lon: -118.247386666543 },
    { lat: 34.0621368607523, lon: -118.265568484725 },
  ],
  la_suburb: [
    { lat: 33.9317554909191, lon: -118.208390492354 },
    { lat: 33.9135736727373, lon: -118.208390492354 },
    { lat: 33.9135736727373, lon: -118.190208674172 },
    { lat: 33.9317554909191, lon: -118.190208674172 },
    { lat: 33.9317554909191, lon: -118.208390492354 },
  ],
  la_industrial: [
    { lat: 33.9254994304161, lon: -118.406896802237 },
    { lat: 33.9254994304161, lon: -118.425078620419 },
    { lat: 33.9073176122343, lon: -118.425078620419 },
    { lat: 33.9073176122343, lon: -118.406896802237 },
    { lat: 33.9254994304161, lon: -118.406896802237 },
  ],
  la_beverlyHills: [
    { lat: 34.0920029021877, lon: -118.399052930665 },
    { lat: 34.0920029021877, lon: -118.417234748847 },
    { lat: 34.0738210840059, lon: -118.417234748847 },
    { lat: 34.0738210840059, lon: -118.399052930665 },
    { lat: 34.0920029021877, lon: -118.399052930665 },
  ],
  sanFrancisco_downtown: [
    { lat: 37.7934506925063, lon: -122.423326478769 },
    { lat: 37.7752688743245, lon: -122.423326478769 },
    { lat: 37.7752688743245, lon: -122.405144660587 },
    { lat: 37.7934506925063, lon: -122.405144660587 },
    { lat: 37.7934506925063, lon: -122.423326478769 },
  ],
  menloPark: [
    { lat: 37.48247363411, lon: -122.168519433018 },
    { lat: 37.4642918159282, lon: -122.168519433018 },
    { lat: 37.4642918159282, lon: -122.150337614836 },
    { lat: 37.48247363411, lon: -122.150337614836 },
    { lat: 37.48247363411, lon: -122.168519433018 },
  ],
  philadelphia_suburb: [
    { lat: 39.9912122170993, lon: -75.1810113373057 },
    { lat: 39.9730303989175, lon: -75.1810113373057 },
    { lat: 39.9730303989175, lon: -75.1628295191239 },
    { lat: 39.9912122170993, lon: -75.1628295191239 },
    { lat: 39.9912122170993, lon: -75.1810113373057 },
  ],
  philadelphia_downtown: [
    { lat: 39.9738245705749, lon: -75.1792435054085 },
    { lat: 39.9738245705749, lon: -75.1610616872267 },
    { lat: 39.9556427523931, lon: -75.1610616872267 },
    { lat: 39.9556427523931, lon: -75.1792435054085 },
  ],
  joplin_MO: [
    { lat: 37.093396516623, lon: -94.5226601095418 },
    { lat: 37.0752146984412, lon: -94.5226601095418 },
    { lat: 37.0752146984412, lon: -94.50447829136 },
    { lat: 37.093396516623, lon: -94.50447829136 },
    { lat: 37.093396516623, lon: -94.5226601095418 },
  ],
  boston_downtown: [
    { lat: 42.3611875410542, lon: -71.0764299794136 },
    { lat: 42.3430057228724, lon: -71.0764299794136 },
    { lat: 42.3430057228724, lon: -71.0582481612318 },
    { lat: 42.3611875410542, lon: -71.0582481612318 },
    { lat: 42.3611875410542, lon: -71.0764299794136 },
  ],
  boston_suburb: [
    { lat: 42.3995849703306, lon: -71.1227827774183 },
    { lat: 42.3814031521488, lon: -71.1227827774183 },
    { lat: 42.3814031521488, lon: -71.1046009592365 },
    { lat: 42.3995849703306, lon: -71.1046009592365 },
    { lat: 42.3995849703306, lon: -71.1227827774183 },
  ],
};
