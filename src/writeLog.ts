import { Log, Logging } from "@google-cloud/logging";

import { LogArgs } from "./types/LogArgs";
import { Labels, LogMeta } from "./types/LoggerInitConfig";
import { logLevel, LogLevel, LogReturnType } from "./Logger";
import { parseLogArgs } from "./types/parseArgs";
import { ApiResponse } from "@google-cloud/logging/build/src/log";
import { D } from "@mobily/ts-belt";
import { ResourceType } from "./types/ResourceType";

let logInstance: Log;

export function writeLog<ReturnPromise extends boolean, R extends ResourceType>(
  returnPromise: ReturnPromise,
  args: LogArgs,
  logMeta: LogMeta<R>,
  baseLabels: Labels<R>,
  level: LogLevel,
): LogReturnType<ReturnPromise> {
  const { logMessage, logLabels } = parseLogArgs(...args);
  const logMetaData = {
    resource: {
      type: logMeta.resourceType || ResourceType.global,
      labels: D.map(baseLabels.resourceLabels || {}, String),
    },
    severity: logLevel[level],
    labels: D.map(
      {
        ...baseLabels.labels,
        ...logLabels,
      },
      String,
    ),
  };

  if (logMeta.logToConsole) {
    // intended to implement this format: https://cloud.google.com/functions/docs/monitoring/logging#writing_structured_logs
    console.log({
      ...(typeof logMessage === "string"
        ? { message: logMessage }
        : logMessage),
      ...logMetaData, // includes severity
    });
  }

  let logPromise: Promise<ApiResponse>;

  if (logMeta.logToCloud) {
    if (!logInstance) {
      logInstance = new Logging({ projectId: logMeta.projectId }).log(
        logMeta.loggerName || "default-logger",
      );
    }
    const entry = logInstance.entry(logMetaData, logMessage);

    logPromise = logInstance.write(entry);
  } else {
    logPromise = Promise.resolve([{}]);
  }
  return (returnPromise ? logPromise : null) as LogReturnType<ReturnPromise>;
}
