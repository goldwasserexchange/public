import lensProp from "ramda/es/lensProp";
import compose from "ramda/es/compose";
import lensIndex from "ramda/es/lensIndex";
import lens from "ramda/es/lens";
import safeParse from "@goldwasserexchange/utils/es/safeParse";
export const records = lensProp('Records');
export const headRecord = compose(records, lensIndex(0));
export const json = lens(safeParse, JSON.stringify);