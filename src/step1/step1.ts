import { fifteen, five, three } from '../costants';

export default (start: number, end: number) => {
  let result = '';
  for (let number = start; number <= end; number += 1) {
    if (number >= fifteen && number % fifteen === 0) {
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
