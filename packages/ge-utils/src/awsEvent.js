import * as R from 'ramda';

const awsEvent = service => R.compose(R.prop(service), R.head, R.prop('Records'));

export default awsEvent;
