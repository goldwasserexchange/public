import {
  pipe, view, equals, curry,
} from 'ramda';

const lensEquals = (lens, comp, obj) => pipe(
  view(lens),
  equals(comp),
)(obj);

export default curry(lensEquals);
