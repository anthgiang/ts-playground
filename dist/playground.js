"use strict";
function printCar(car) {
    let str = `${car.make} ${car.model} (${car.year})`;
    car.chargeVoltage;
    if (typeof car.chargeVoltage !== "undefined") {
        str += `// ${car.chargeVoltage.toFixed(2)}v`;
    }
    console.log(str);
}
// Works
printCar({
    make: "Honda",
    model: "Accord",
    year: 2017,
});
// Also works
printCar({
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    chargeVoltage: 220,
});
