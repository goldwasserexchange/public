import {
  curry, pipe, match, map, replace,
} from 'ramda';

export default curry((start, end, string) => pipe(
  match(new RegExp(`${start}([^${start}${end}]+)${end}`, 'gm')),
  map(replace(new RegExp(`${start}|${end}`, 'g'), ''))
)(string));
