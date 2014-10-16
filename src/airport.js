function Airport(capacity) {
	this.planes = [];
	this.passengers = [];
	this.capacity = capacity || 40;
};

function Plane() {
	this.type = "plane";
};

Airport.prototype.land = function(plane) {

	if(this._ableToLand(plane) && this.isNotFull())
		{this.planes.push(plane);
	} else {
		return false}
};

Airport.prototype.takeoff = function(plane) {
	if(this._isNotAtAirport(plane)) {return false};
	this.planes.splice(this._findLocation(plane), 1);
};

Airport.prototype.verify = function(plane) {
	return plane.type === "plane";
};

Airport.prototype.isNotFull = function() {
	return this.planes.length < this.capacity;
};

Airport.prototype._isNotAtAirport = function(plane) {
	return this._findLocation(plane) === -1;
};

Airport.prototype._findLocation = function(plane) {
	return this.planes.indexOf(plane)
};

Airport.prototype._ableToLand = function(plane) {
	return (this.verify(plane) && this._isNotAtAirport(plane))
};
