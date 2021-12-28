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
/**
 * Accept number and verify is an even number
 * @param num
 */
function cntEvenNums(num) {
    const two = 2;
    return num % two === 0;
}
exports.default = (start, end) => {
    let tip = 0;
    let tap = 0;
    let tipTap = 0;
    let gold = 0;
    let integer = 0;
    let result = '';
    for (let number = start; number <= end; number += 1) {
        if (cntEvenNums(number)) {
            integer += 1;
        }
        if (containXNum(number)) {
            result = result.concat('gold ');
            gold += 1;
        }
        else if (number >= costants_1.fifteen && number % costants_1.fifteen === 0) {
            result = result.concat('tiptap ');
            tipTap += 1;
        }
        else if (number % costants_1.five === 0) {
            result = result.concat('tap ');
            tap += 1;
        }
        else if (number % costants_1.three === 0) {
            result = result.concat('tip ');
            tip += 1;
        }
        else {
            result = result.concat(`${number} `);
        }
    }
    result = result.concat(`\ntip: ${tip}`);
    result = result.concat(`\ntap: ${tap}`);
    result = result.concat(`\ntiptap: ${tipTap}`);
    result = result.concat(`\ngold: ${gold}`);
    result = result.concat(`\ninteger: ${integer}`);
    return result;
};
