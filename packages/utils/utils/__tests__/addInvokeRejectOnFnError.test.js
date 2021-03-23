import addInvokeRejectOnFnError from '../src/addInvokeRejectOnFnError';

const dataError = {
  FunctionError: 'Handled',
  Payload: 'Error',
};

const dataOK = {
  Payload: 'OK',
};

const client = {
  invoke: (error) => ({
    promise: () => Promise.resolve(
      error
        ? dataError
        : dataOK
    ),
  }),
};

const clientWithError = addInvokeRejectOnFnError(client);

describe('lambdaInvokeFnError', () => {
  it('should have the property invokeRejectOnFnError', () => {
    expect(clientWithError).toHaveProperty('invokeRejectOnFnError');
  });

  it('should throw if the client does not contain an invoke function', () => {
    expect(() => addInvokeRejectOnFnError({ invoke: '' })).toThrow(/invoke/);
  });

  it('should throw if data contains FunctionError', async () => {
    await expect(clientWithError.invokeRejectOnFnError(true).promise()).rejects.toThrow(dataError.Payload);
  });

  it('should resolve with a Payload if data does not contain FunctionError', async () => {
    await expect(clientWithError.invokeRejectOnFnError(false).promise()).resolves.toBe(dataOK);
  });
});
