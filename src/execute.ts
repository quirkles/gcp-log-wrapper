import { createLogger, logLevel, LogLevel } from "./Logger";
import { faker } from "@faker-js/faker";
import { ResourceType } from "./types/ResourceType";

function generateMockLabels() {
  return {
    requestId: faker.string.uuid(),
    requestIp: faker.internet.ip(),
    requestCorrelationId: faker.string.uuid(),
  };
}

function generateMockPayload() {
  return {
    amount: faker.number.int(),
    companyName: faker.company.name(),
    product: faker.commerce.product(),
  };
}

export async function main() {
  const logger = createLogger({
    logToCloud: true,
    projectId: "quirkles-portfolio",
    resourceType: ResourceType.cloud_function,
    resourceLabels: {
      function_name: "demo-of-logger",
    },
    labels: {
      beginTimestamp: Date.now(),
    },
  });

  logger.addLabel("log-source-app", "my-great-app");
  logger.mergeToLabels({
    "log-source-process": "create-user",
  });

  logger.addResourceLabel("region", "four");
  logger.mergeToLabels({
    "instance-sha": faker.git.commitSha(),
  });

  const error = new Error("this is an error");

  for (const level of Object.keys(logLevel)) {
    // single args
    logger[level as LogLevel](`this is a log with level: ${level}`);
    logger[level as LogLevel](generateMockPayload());
    logger[level as LogLevel](error);
    // single args with custom labels
    logger[level as LogLevel](
      `this is a log with level: ${level}`,
      generateMockLabels(),
    );
    logger[level as LogLevel](generateMockPayload(), generateMockLabels());
    logger[level as LogLevel](error, generateMockLabels());
    // double args
    logger[level as LogLevel](
      generateMockPayload(),
      `this is a log with level: ${level}`,
    );
    logger[level as LogLevel](error, `this is a log with level: ${level}`);
    // double args with custom labels
    logger[level as LogLevel](
      error,
      `this is a log with level: ${level}`,
      generateMockLabels(),
    );
    logger[level as LogLevel](
      generateMockPayload(),
      `this is a log with level: ${level}`,
      generateMockLabels(),
    );
  }
}

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
