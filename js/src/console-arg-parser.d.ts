import * as iterDb from "iter-db";
export type result = {
    shell: iterDb.IterDbShell;
    port: number;
    corsAllowOrigin: string[];
};
export declare const parseConsoleArgs: () => result;
