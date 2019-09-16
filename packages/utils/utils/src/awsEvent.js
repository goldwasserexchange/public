import { compose, prop, head } from 'ramda';

const awsEvent = (service) => compose(prop(service), head, prop('Records'));

export default awsEvent;
