import * as iterDb from "iter-db";
export declare const serverTypes: readonly ["http"];
export type serverType = typeof serverTypes[0];
export type result = {
    shell: iterDb.IterDbShell;
    server: serverType;
    port: number;
};
export declare const parseConsoleArgs: () => result;
