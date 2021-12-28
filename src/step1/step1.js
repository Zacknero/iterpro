"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const costants_1 = require("../costants");
exports.default = (start, end) => {
    let result = '';
    for (let number = start; number <= end; number += 1) {
        if (number >= costants_1.fifteen && number % costants_1.fifteen === 0) {
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
