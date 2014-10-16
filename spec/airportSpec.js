describe('Airport', function() {

	describe('when interacting with planes, can', function() {

		beforeEach(function() {
			airport = new Airport;
			plane = new Plane;
		})

		fillUpAirport = function() {
			for(var i = 1; i < 41; i++){
			airport.land(new Plane)};
		};

		it('hold planes', function() {
			expect(airport.planes).toEqual([]);
		});

		it('count the number of planes it has', function() {
			expect(airport.planes.length).toEqual(0);
		});

		it('land an airplane', function() {
			airport.land(plane);
			expect(airport.planes.length).toEqual(1);
		});

		it('takeoff an airplane', function() {
			airport.land(plane);
			airport.takeoff(plane);
			expect(airport.planes.length).toEqual(0);
		})

		it('only interact with airplanes', function() {
			expect(airport.verifyPlane(plane)).toBe(true);
		});

		it('cannot interact with objects that are not planes', function() {
			expect(airport.verifyPlane("banana")).toBe(false);
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
			expect(airport.takeoff(plane)).toEqual(false);
		});

		it('know when it\'s full', function() {
			fillUpAirport();
			expect(airport.isNotFull()).toBe(false);
		});

		it('know when it\'s not full', function() {
			expect(airport.isNotFull()).toBe(true);
		});

		it('not land a plane when it\'s full', function() {
			fillUpAirport()
			expect(airport.land(plane)).toEqual(false);
		});

		it('not land plane that is already at the airport', function() {
			airport.land(plane);
			expect(airport.land(plane)).toEqual(false);
		});

		it('it should have a default capacity', function() {
			expect(airport.capacity).toEqual(40);
		});

	});

	describe("when interacting with passengers, can", function() {

		beforeEach(function() {
			airport = new Airport;
			passenger = new Passenger;
		});

		it('hold passengers', function() {
			expect(airport.passengers).toEqual([]);
		});

		it('accept passengers', function() {
			airport.admit(passenger);
			expect(airport.passengers.length).toEqual(1);
		});

		it('only interact with passengers ',function() {
			expect(airport.verifyPassenger('banana')).toEqual(false);
		});

		it('only accept passengers', function() {
			expect(airport.admit('banana')).toEqual(false);
		});

		it('release passengers', function() {
			airport.admit(passenger);
			airport.release(passenger);
			expect(airport.passengers.length).toEqual(0);
		});

		it('only accept passengers that are not at the airport', function() {
			airport.admit(passenger);
			airport.admit(passenger);
			expect(airport.passengers.length).toEqual(1);
		});
	});
});