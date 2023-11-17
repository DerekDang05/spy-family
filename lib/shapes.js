class Shape {
    constructor() {
        this.color = "";
    };
    

    //sets color
    setColor(color) {
        this.color = color
    };
};

//creates circle shape dimensions
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill=${this.color}" />`;
    }
}
//creates square shape dimensions
class Square extends Shape {
    render() {
        return `rect x="70" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}
//creates Triangle shape dimensions
class Triangle extends Shape {
    render() {
        return `<polygon points="50,50 150,50 100,150"fill="${this.color}" />`;
    }
}

// exports shapes for use
module.exports = { Square, Circle, Triangle }