/** @type {import('mocha').MochaOptions} options */
const options = {
    bail: true,
    fullTrace: true,
    timeout: 20000,
    recursive: true,
    reporter: "spec",
    files: ["./test/specs/*.spec.js"],
    exclude: ["./test/specs/fulfillmentInboundShipment.spec.js"],
};
module.exports = options;
