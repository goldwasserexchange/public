import awsGetAll from '../src/awsGetAll';

const method = jest.fn(({ markerParamsKey }) => ({
  promise: () => {
    if (!markerParamsKey) return { markerDataKey: 1, valuesKey: [1, 2, 3] };
    if (markerParamsKey === 1) return { markerDataKey: 2, valuesKey: [4, 5, 6] };
    if (markerParamsKey === 2) return { valuesKey: [7, 8, 9] };
    return {};
  },
}));

const service = {
  method,
};

const params = { param1: 'value1', param2: 'value2' };

const getAllValues = awsGetAll({
  service,
  method: 'method',
  params,
  markerParamsKey: 'markerParamsKey',
  markerDataKey: 'markerDataKey',
  valuesKey: 'valuesKey',
});

test('awsGetAll', async () => {
  const values = await getAllValues();

  expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect(method).toHaveBeenCalledWith(expect.objectContaining(params));
});
