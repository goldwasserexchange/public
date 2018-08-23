import { curry, forEach } from 'ramda';
import parseInt10 from './parseInt10';

export default curry((dividend, divisor) => {
  let div = '';
  let remainder = '';

  forEach((char) => {
    const operator = `${remainder}${div}${char}`;
    if (operator < parseInt10(divisor)) {
      div += char;
    } else {
      remainder = (operator % divisor) || '';
      div = '';
    }
  }, dividend);

  remainder += div;

  return remainder === '' ? 0 : parseInt10(remainder);
});
