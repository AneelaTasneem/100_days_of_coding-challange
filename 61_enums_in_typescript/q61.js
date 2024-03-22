"use strict";
//enums_in_typescript:
// Making enum(a list) for types of vehicles:
var vehicle_type;
(function (vehicle_type) {
    vehicle_type[vehicle_type["car"] = 0] = "car";
    vehicle_type[vehicle_type["motorbike"] = 1] = "motorbike";
    vehicle_type[vehicle_type["truck"] = 2] = "truck";
})(vehicle_type || (vehicle_type = {}));
//Showing one of the vehicle from enum:
console.log(vehicle_type.truck);
