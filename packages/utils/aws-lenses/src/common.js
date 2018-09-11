import {
  lensProp, compose, lensIndex, lens,
} from 'ramda';
import { safeParse } from '@goldwasserexchange/utils';

export const records = lensProp('Records');

export const headRecord = compose(records, lensIndex(0));

export const json = lens(safeParse, JSON.stringify);
