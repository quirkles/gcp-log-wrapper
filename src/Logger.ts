import { ApiResponse } from "@google-cloud/logging/build/src/log";
import { D } from "@mobily/ts-belt";

import { LogArgs } from "./types/LogArgs";
import {
  Labels,
  LoggerInitializationParams,
  LogLabels,
} from "./types/LoggerInitConfig";
import { ResourceLabel, ResourceType } from "./types/ResourceType";
import { writeLog } from "./writeLog";

export type LogReturnType<T extends boolean> = T extends true
  ? Promise<ApiResponse>
  : null;

export const logLevel = {
  default: "DEFAULT",
  debug: "DEBUG",
  info: "INFO",
  notice: "NOTICE",
  warning: "WARNING",
  error: "ERROR",
  critical: "CRITICAL",
  alert: "ALERT",
  emergency: "EMERGENCY",
} as const;

export type LogLevel = keyof typeof logLevel;

type LogFunction<ReturnPromise extends boolean = false> = (
  ...args: LogArgs
) => LogReturnType<ReturnPromise>;

type Levels<T extends boolean> = { [levels in LogLevel]: LogFunction<T> };

interface Logger<
  T extends boolean = false,
  R extends ResourceType = typeof ResourceType.global,
> extends Levels<T> {
  addLabel(propName: string, value: string): Logger<T, R>;
  addResourceLabel<K extends keyof ResourceLabel<R>>(
    propName: K,
    value: ResourceLabel<R>[K],
  ): Logger<T, R>;
  mergeToLabels(labels: LogLabels): Logger<T, R>;
  mergeToResourceLabels(resourceLabels: ResourceLabel<R>): Logger<T, R>;
}

const defaultLoggerParams: LoggerInitializationParams = {
  returnFromLogCalls: false,
  logToCloud: false,
  logToConsole: true,
  labels: {},
};

export function createLogger<T extends boolean, R extends ResourceType>(
  loggerInitializationParams: LoggerInitializationParams<T, R> = {},
): Logger<T, R> {
  const params = D.merge(defaultLoggerParams, loggerInitializationParams);
  const labels: Labels<R> = {
    labels: params.labels || {},
    resourceLabels: params.resourceLabels,
  };
  const { returnFromLogCalls = false, ...rest } = params;
  const logger: Logger<T, R> = {
    addLabel(propName: string, value: string): Logger<T, R> {
      labels.labels![propName] = value;
      return logger;
    },
    addResourceLabel(propName, value): Logger<T, R> {
      labels.resourceLabels![propName] = value;
      return logger;
    },
    mergeToLabels(newLabels: LogLabels): Logger<T, R> {
      labels.labels = D.merge(labels.labels, newLabels);
      return logger as Logger<T, R>;
    },
    mergeToResourceLabels(newResourceLabels: ResourceLabel<R>): Logger<T, R> {
      labels.resourceLabels = D.merge(labels.resourceLabels, newResourceLabels);
      return logger as Logger<T, R>;
    },
    error(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "error",
      ) as LogReturnType<T>;
    },
    info(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "info",
      ) as LogReturnType<T>;
    },
    warning(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "warning",
      ) as LogReturnType<T>;
    },
    debug(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "debug",
      ) as LogReturnType<T>;
    },
    notice(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "notice",
      ) as LogReturnType<T>;
    },
    critical(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "critical",
      ) as LogReturnType<T>;
    },
    alert(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "alert",
      ) as LogReturnType<T>;
    },
    default(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "default",
      ) as LogReturnType<T>;
    },
    emergency(...args: LogArgs): LogReturnType<T> {
      return writeLog(
        returnFromLogCalls,
        args,
        rest,
        labels,
        "emergency",
      ) as LogReturnType<T>;
    },
  };
  return logger;
}
