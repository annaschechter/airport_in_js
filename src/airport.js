function Airport() {
	this.planes = [];
};

function Plane() {
	this.type = "plane";
};

Airport.prototype.land = function(plane) {
	if(this.verify(plane))
		this.planes.push(plane);
	else 
		return undefined;
};

Airport.prototype.takeoff = function(plane) {
	if(this.planes.indexOf(plane) === (-1)) {return undefined};
	this.planes.splice((this.planes.indexOf(plane)), 1);
};

Airport.prototype.verify = function(plane) {
	return plane.type === "plane";
};