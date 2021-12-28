import step1 from "../src/step1/step1";
import step2 from "../src/step2/step2";
import step3 from "../src/step3/step3";

test('Step 1', () => {
    expect(step1(0, 0)).toBe('tap ');

    expect(step1(0, 0)).not.toBe('2 tip ');

    expect(step1(2, 10)).toBe('2 tip 4 tap tip 7 8 tip tap ')

    expect(step1(5, 30)).toBe('tap tip 7 8 tip tap 11 tip 13 14 tiptap 16 17 tip 19 tap tip 22 23 tip tap 26 tip 28 29 tiptap ')
});

test('Step 2', () => {
    expect(step2(0, 0)).toBe('tap ');

    expect(step2(0, 0)).not.toBe('2 tip ');

    expect(step2(2, 10)).toBe('2 gold 4 tap tip 7 8 tip tap ')

    expect(step2(2, 25)).toBe('2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap tip 22 gold tip tap ')
});

test('Step 3', () => {
    expect(step3(0, 0)).toBe(`tap \ntip: 0\ntap: 1\ntiptap: 0\ngold: 0\ninteger: 1`);

    expect(step3(0, 0)).not.toBe('2 tip ');

    expect(step3(2, 10)).toBe(`2 gold 4 tap tip 7 8 tip tap \ntip: 2\ntap: 2\ntiptap: 0\ngold: 1\ninteger: 5`)

    expect(step3(1, 20)).toBe(`1 2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap \ntip: 4\ntap: 3\ntiptap: 1\ngold: 2\ninteger: 10`)
});
