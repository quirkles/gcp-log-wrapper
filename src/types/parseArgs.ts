import { JsonPayload, LogArgs } from "./LogArgs";
import { LogLabels } from "./LoggerInitConfig";

export type ParsedLogMessage =
  | string
  | { data: JsonPayload; message?: string }
  | { error: Error; message?: string };

export interface ParsedLogArgs {
  logLabels: LogLabels;
  logMessage: ParsedLogMessage;
}

export function parseLogArgs(...args: LogArgs): ParsedLogArgs {
  const [arg1, arg2, arg3] = args;

  let message: string | null = null;
  let error: Error | null = null;
  let jsonPayload: JsonPayload | null = null;
  let logLabels: LogLabels | null = null;

  if (typeof arg1 === "string") {
    // call signature is: message, logLabels?
    message = arg1;
    logLabels = (arg2 as LogLabels) || {};
  } else if (arg1 instanceof Error) {
    // call signature is either:
    // error, loglabels?
    // error, message, loglabels?
    error = arg1;
    if (typeof arg2 === "string") {
      // error, message, loglabels?
      message = arg2;
      logLabels = (arg3 as LogLabels) || {};
    } else {
      // error, loglabels?
      logLabels = (arg2 as LogLabels) || {};
    }
  } else {
    // call signature is either:
    // jsonPayload, loglabels?
    // jsonPayload, message, logLabels?
    jsonPayload = arg1;
    if (typeof arg2 === "string") {
      // severity, jsonPayload, message, logLabels?
      message = arg2;
      logLabels = (arg3 as LogLabels) || {};
    } else {
      logLabels = (arg2 as LogLabels) || {};
    }
  }

  let logMessage: ParsedLogMessage;

  if (jsonPayload) {
    logMessage = {
      data: jsonPayload,
    };
    if (message) {
      logMessage.message = message;
    }
  } else if (error) {
    logMessage = {
      error,
    };
    if (message) {
      logMessage.message = message;
    }
  } else {
    logMessage = message || "";
  }

  return {
    logLabels,
    logMessage,
  };
}
