const { Circle, Square, Triangle } = require("./shapes");

describe("Square Test", () => {
    it("should return a red square", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('rect x="70" y="40" width="150" height="150" fill="blue" />')
    });
});

describe("Triangle Test", () => {
    it("should return a green triangle", () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="50,50 150,50 100,150" fill="blue" />');
    });
});

describe("Circle Test", () => {
    it("should return a green circle", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />')
    });
});