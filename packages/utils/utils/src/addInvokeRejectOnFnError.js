const addInvokeRejectOnFnError = (client) => {
  if (typeof client.invoke !== 'function') throw new Error('Client should have invoke method');

  return {
    ...client,
    invokeRejectOnFnError: (params) => ({
      promise: () => client.invoke(params).promise()
        .then((data) => (
          data.FunctionError
            ? Promise.reject(new Error(data.Payload))
            : data
        )),
    }),
  };
};

export default addInvokeRejectOnFnError;
