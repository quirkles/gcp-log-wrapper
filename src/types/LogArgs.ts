import { type LogLabels } from "./LoggerInitConfig";

export type JsonPayload = Record<string, string | number | boolean | Error>;

type LogArgsSingle =
  | [message: string]
  | [jsonPayload: JsonPayload]
  | [error: Error];

type LogArgsDouble =
  // Single args with labels
  | [jsonPayload: JsonPayload, LogLabels]
  | [error: Error, LogLabels]
  | [message: string, LogLabels]
  // Double args
  | [jsonPayload: JsonPayload, message: string]
  | [error: Error, message: string];

type LogArgsTriple =
  // Double args with labels
  | [jsonPayload: JsonPayload, message: string, LogLabels]
  | [error: Error, message: string, LogLabels];

export type LogArgs = LogArgsSingle | LogArgsDouble | LogArgsTriple;
