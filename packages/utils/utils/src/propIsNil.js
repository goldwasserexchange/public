import { compose, prop, isNil, curry } from 'ramda'

const propIsNil = (property, obj) => compose(isNil, prop(property))(obj);

export default curry(propIsNil);
