import {
  curry, pipe, juxt, replace, join,
} from 'ramda';

const operationOnUnit = curry((f, unitString) => pipe(
  juxt([
    pipe(
      parseFloat,
      f
    ),
    replace(/\d/g, ''),
  ]),
  join(''),
)(unitString));

export default operationOnUnit;
