import { concat } from 'ramda';

export default ({
  service,
  method,
  params,
  markerParamsKey,
  markerDataKey,
  valuesKey,
}) => {
  const request = async (marker) => {
    const { [markerDataKey]: nextMarker, [valuesKey]: values } = await service[method]({ ...params, [markerParamsKey]: marker }).promise();

    return nextMarker
      ? concat(values, await request(nextMarker))
      : values;
  };

  return request;
};
