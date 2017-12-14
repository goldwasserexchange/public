import { pipe, juxt, replace, join } from 'ramda';

const operationOnUnit = f => pipe(
  juxt([
    pipe(
      parseFloat,
      f
    ),
    replace(/\d/g, ''),
  ]),
  join(''),
);

export default operationOnUnit;
