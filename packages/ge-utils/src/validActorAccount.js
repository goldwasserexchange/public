import R from 'ramda';
import parseInt10 from './parseInt10';
import isActorAccount from './isActorAccount';
import actorAccountMod from './actorAccountMod';

const modValid = R.converge(
  R.equals,
  [
    actorAccountMod,
    R.compose(parseInt10, R.takeLast(2)),
  ]
);

export default R.both(isActorAccount, modValid);
