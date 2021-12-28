"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const costants_1 = require("../costants");
/**
 * Accept number and verify is contain the '3' number
 * @param input
 */
function containXNum(input) {
    return `${input}`.indexOf(`${costants_1.three}`) > -1;
}
exports.default = (start, end) => {
    let result = '';
    for (let number = start; number <= end; number += 1) {
        if (containXNum(number)) {
            result = result.concat('gold ');
        }
        else if (number >= costants_1.fifteen && number % costants_1.fifteen === 0) {
            result = result.concat('tiptap ');
        }
        else if (number % costants_1.five === 0) {
            result = result.concat('tap ');
        }
        else if (number % costants_1.three === 0) {
            result = result.concat('tip ');
        }
        else {
            result = result.concat(`${number} `);
        }
    }
    return result;
};
