import { tryCatch, head, always } from 'ramda';

export default tryCatch(head, always(undefined));
