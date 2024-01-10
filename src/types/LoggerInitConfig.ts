import { ResourceLabel, ResourceType } from "./ResourceType";

export type LogLabels = Record<string, string | number>;

export type Labels<R extends ResourceType> = {
  labels?: LogLabels;
  resourceLabels?: ResourceLabel<R>;
};

export type LogMeta<R extends ResourceType> =
  | {
      projectId?: string;
      loggerName?: string;
      logToConsole?: boolean;
      logToCloud?: false;
      resourceType?: R;
    }
  | {
      projectId: string;
      loggerName?: string;
      logToConsole?: boolean;
      logToCloud: true;
      resourceType?: R;
    };

export type LoggerInitializationParams<
  T extends boolean = false,
  R extends ResourceType = typeof ResourceType.global,
> = Labels<R> &
  LogMeta<R> & {
    returnFromLogCalls?: T;
  };
