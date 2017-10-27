import { tryCatch, always } from 'ramda';

export default tryCatch(JSON.parse, always(undefined));
