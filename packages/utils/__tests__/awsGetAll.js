import awsGetAll from '../src/awsGetAll';

const service = {
  method: ({ markerParamsKey }) => ({
    promise: () => {
      if (!markerParamsKey) return { markerDataKey: 1, valuesKey: [1, 2, 3] };
      if (markerParamsKey === 1) return { valuesKey: [4, 5, 6] };
      return {};
    },
  }),
};

test('awsGetAll', () => {
  const getAllValues = awsGetAll({
    service,
    method: 'method',
    markerParamsKey: 'markerParamsKey',
    markerDataKey: 'markerDataKey',
    valuesKey: 'valuesKey',
  });
  expect(getAllValues()).resolves.toEqual([1, 2, 3, 4, 5, 6]);
});
