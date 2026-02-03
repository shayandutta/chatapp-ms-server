// re-export all the common utilities

export * from "./logger";
export * from "./env";
export type {Logger} from "pino"; // why do we need to export the Logger type? -> because we want to use the Logger type in the other services