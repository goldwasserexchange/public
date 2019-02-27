import {
  curry,
  when,
  test,
  pipe,
  split,
  reject,
  isEmpty,
  map,
  fromPairs,
  ifElse,
  prop,
  isNil,
} from 'ramda';

const lmlGet = curry((id, string) => when(
  test(/^\d=/g),
  pipe(
    split(/\n|\r/g),
    reject(isEmpty),
    map(split('=')),
    fromPairs,
    ifElse(
      pipe(
        prop(id),
        isNil,
      ),
      prop(0),
      prop(id)
    )
  )
)(string));

export default lmlGet;
