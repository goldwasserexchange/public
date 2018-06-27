import { concat } from 'ramda';

export default ({
  service,
  method,
  params,
  markerParamsKey,
  markerDataKey,
  valuesKey,
}) => {
  const _getAll = async (marker) => { // eslint-disable-line no-underscore-dangle
    const { [markerDataKey]: nextMarker, [valuesKey]: values } = await service[method]({ ...params, [markerParamsKey]: marker }).promise();

    return nextMarker
      ? concat(values, await _getAll(nextMarker))
      : values;
  };

  return _getAll;
};
