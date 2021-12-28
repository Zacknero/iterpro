"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const step1_1 = __importDefault(require("./step1/step1"));
const step2_1 = __importDefault(require("./step2/step2"));
const step3_1 = __importDefault(require("./step3/step3"));
console.log('---------------------Step 1---------------------');
console.log((0, step1_1.default)(2, 16));
console.log((0, step1_1.default)(-3, -1));
console.log('---------------------Step 2---------------------');
console.log((0, step2_1.default)(2, 14));
console.log('---------------------Step 3---------------------');
console.log((0, step3_1.default)(1, 20));
