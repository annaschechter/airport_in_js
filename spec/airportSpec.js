describe('Airport', function() {

	describe('can', function() {

		beforeEach(function() {
			airport = new Airport;
			plane = new Plane;
		})

		it('hold planes', function() {
			expect(airport.planes).toEqual([]);
		});

		it('count the number of planes it has', function() {
			expect(airport.planes.length).toEqual(0);
		});

		it('and an airplane', function() {
			airport.land(plane);
			expect(airport.planes.length).toEqual(1);
		});

		it('takeoff an airplane', function() {
			airport.land(plane);
			airport.takeoff(plane);
			expect(airport.planes.length).toEqual(0);
		})

		it('only interact with airplanes', function() {
			expect(airport.verify(plane)).toBe(true);
		});

		it('cannot interact with objects that are not planes', function() {
			expect(airport.verify("banana")).toBe(false);
		});

		it('not land non-plane', function() {
			airport.land("banana");
			expect(airport.planes.length).toEqual(0);
		});

		it('takeoff a specified airplane', function() {
			airport.land(plane);
			airport.land(new Plane);
			airport.takeoff(plane);
			expect(airport.planes.indexOf(plane)).toEqual(-1);
		});

		it('not takeoff an airplane that is not at the airport', function() {
			expect(airport.takeoff(plane)).toEqual(undefined);
		})
	});
});