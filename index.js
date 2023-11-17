//imports for usage
const inquirer = require("inquirer");
const fs = require("fs");
const path= require("path");
const { Square, Triangle, Circle } = require("./lib/shapes")

shapeObject = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
};

//acquires input information
inquirer
    .prompt([
        {
            type: "input",
            name: "logoName",
            message: "Enter text for your logo [1-3 characters]: ",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter a color for the logo's text:",
        },
        {
            type: "input",
            name: "logoColor",
            message: "Enter a color for the logo's background:",
        },

        {
            type: "list",
            name: "logoShape",
            message: "Choose the shape of your logo:",
            choices: ["Circle", "Square",  "Triangle"],
        },
])


.then((input) => {

    const grabShape = shapeObject[input.logoShape];
    const shape =  new grabShape();
    shape.setColor(input.logoColor);
    shape.setText(input.logoName, input.textColor);

    const format = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>
        ${shape.render()} fill="${input.logoColor}"
        <text x="150" y="130" text-anchor="middle" font-size="28" fill="${input.textColor}">${input.logoName}</text>
      </g>
    </svg>`;

    const examplesPath = path.join(__dirname, "examples", "logo.svg");

    fs.writeFile(examplesPath, format, (err) => {
        if (err) throw err;
        console.log("Logo created successfully. Check examples folder");
    });
});




