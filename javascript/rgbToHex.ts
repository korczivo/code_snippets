interface RgbToHexProps {
    r: number;
    g: number;
    b: number;
}

const rgbToHex = (rgb: number | string) => {
    let hex = Number(rgb).toString(16);

    if (hex.length < 2) {
        hex = `0${hex}`;
    }

    return hex;
};


const generateColorHex = ({r, g, b}: RgbToHexProps) => {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);

    return `#${red + green + blue}`;
};

console.log(generateColorHex({r: 37, g: 171, b: 30})) // #25ab1e
console.log(generateColorHex({r: 255, g: 255, b: 255})) // #ffffff
console.log(generateColorHex({r: 0, g: 0, b: 0})) // #000000
