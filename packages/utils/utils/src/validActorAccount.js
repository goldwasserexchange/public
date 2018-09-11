import {
  converge, equals, compose, takeLast, both,
} from 'ramda';
import parseInt10 from './parseInt10';
import isActorAccount from './isActorAccount';
import actorAccountMod from './actorAccountMod';

const modValid = converge(
  equals,
  [
    actorAccountMod,
    compose(parseInt10, takeLast(2)),
  ]
);

export default both(isActorAccount, modValid);
