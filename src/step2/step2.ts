import { fifteen, five, three } from '../costants';

/**
 * Accept number and verify is contain the '3' number
 * @param input
 */
function containXNum(input: number) {
  return `${input}`.indexOf(`${three}`) > -1;
}

export default (start: number, end: number) => {
  let result = '';
  for (let number = start; number <= end; number += 1) {
    if (containXNum(number)) {
      result = result.concat('gold ');
    } else if (number >= fifteen && number % fifteen === 0) {
      result = result.concat('tiptap ');
    } else if (number % five === 0) {
      result = result.concat('tap ');
    } else if (number % three === 0) {
      result = result.concat('tip ');
    } else {
      result = result.concat(`${number} `);
    }
  }
  return result;
};
