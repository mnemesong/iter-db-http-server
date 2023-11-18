import * as iterDb from "iter-db";
export type result = {
    shell: iterDb.IterDbShell;
    port: number;
};
export declare const parseConsoleArgs: () => result;
