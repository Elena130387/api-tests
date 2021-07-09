export const query = {
    create: 'mutation createShape($input: CalculateInput!) {calculate(input: $input) {id __typename}}',
    getAll: 'query getShapes { shapes { ...ShapeBase __typename }} fragment ShapeBase on Shape { id name createdAt polygons ...ShapeGeoInfo ...ShapeProgress __typename} fragment ShapeGeoInfo on Shape { geoInfo { admin1 admin2 countryCode __typename } __typename} fragment ShapeProgress on Shape { status progress { total completed __typename } tiles { large medium small __typename } __typename}'
}
