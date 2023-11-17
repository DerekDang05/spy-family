// Shape class
class Shape {
    constructor() {
        this.color = "";
        this.text = "";
        this.texColor = "";
    }

    // sets color
    setColor(color) {
        this.color = color;
    }

    //sets text(color)
    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

// Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    render() {
        return `<rect x="70" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}

// Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// exports shapes for use
module.exports = { Square, Circle, Triangle };
