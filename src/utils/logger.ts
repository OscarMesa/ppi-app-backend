const loggingDetails = (context, functionName, message): object => ({
  stt: process.env.LOGGING_MS,
  context,
  fuctionName: functionName,
  message,
  jsonPayload: {
    trace: 'CONTROL_TOWER_LOGGING',
  },
});

const loggingError = (context, functionName, error): object => ({
  stt: process.env.LOGGING_MS,
  context,
  fuctionName: functionName,
  message: error.message,
  error,
  jsonPayload: {
    trace: 'CONTROL_TOWER_LOGGING',
  },
});

export { loggingError, loggingDetails };
