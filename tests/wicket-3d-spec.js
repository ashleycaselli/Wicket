var Wkt = require('../wicket');
var expect = require('chai').expect;

describe('Consistent 3D Design Patterns', function () {

    it('should correctly evaluate the equality among two 2D/3D coordinates', function () {
        let wkt = new Wkt.Wkt('');
        expect(wkt.sameCoords({x: 30, y: 10}, {x: 30, y: 10})).equal(true);
        expect(wkt.sameCoords({x: 30, y: 10, z: 20}, {x: 30, y: 10, z: 20})).equal(true);
        expect(wkt.sameCoords({x: 30, y: 10, z: 34}, {x: 30, y: 10, z: 20})).equal(false);
        expect(wkt.sameCoords({x: 30, y: 10}, {x: 30, y: 10, z: 20})).equal(false);
        expect(wkt.sameCoords({x: 30, y: 10, z: 20}, {x: 30, y: 10})).equal(false);
        expect(wkt.sameCoords({x: 30, y: 10, w: 20}, {x: 30, y: 10, w: 20})).equal(false);
    });

});