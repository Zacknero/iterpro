"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const step1_1 = __importDefault(require("../src/step1/step1"));
const step2_1 = __importDefault(require("../src/step2/step2"));
const step3_1 = __importDefault(require("../src/step3/step3"));
test('Step 1', () => {
    expect((0, step1_1.default)(0, 0)).toBe('tap ');
    expect((0, step1_1.default)(0, 0)).not.toBe('2 tip ');
    expect((0, step1_1.default)(2, 10)).toBe('2 tip 4 tap tip 7 8 tip tap ');
    expect((0, step1_1.default)(5, 30)).toBe('tap tip 7 8 tip tap 11 tip 13 14 tiptap 16 17 tip 19 tap tip 22 23 tip tap 26 tip 28 29 tiptap ');
});
test('Step 2', () => {
    expect((0, step2_1.default)(0, 0)).toBe('tap ');
    expect((0, step2_1.default)(0, 0)).not.toBe('2 tip ');
    expect((0, step2_1.default)(2, 10)).toBe('2 gold 4 tap tip 7 8 tip tap ');
    expect((0, step2_1.default)(2, 25)).toBe('2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap tip 22 gold tip tap ');
});
test('Step 3', () => {
    expect((0, step3_1.default)(0, 0)).toBe(`tap \ntip: 0\ntap: 1\ntiptap: 0\ngold: 0\ninteger: 1`);
    expect((0, step3_1.default)(0, 0)).not.toBe('2 tip ');
    expect((0, step3_1.default)(2, 10)).toBe(`2 gold 4 tap tip 7 8 tip tap \ntip: 2\ntap: 2\ntiptap: 0\ngold: 1\ninteger: 5`);
    expect((0, step3_1.default)(1, 20)).toBe(`1 2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap \ntip: 4\ntap: 3\ntiptap: 1\ngold: 2\ninteger: 10`);
});
