import {createFacade} from "../../controller/graphql/shape";

describe('get facade data', function() {

    it('successfully get facade',async function () {
        const response = await createFacade()
        const {image, height, distance, polygons, __typename} = response.data.facade

        expect(__typename).toEqual('Facade')
        expect(typeof polygons).toBe('object')
        ;['facade-image', 'lat', 'lon'].forEach(el => expect(image).toContain(el))
        ;[height, distance].forEach((el: number) => expect(typeof el).toBe('number'))

    }, 20000)
})