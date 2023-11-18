import * as iterDb from "iter-db"
import { v4 as uuid } from "uuid";
import * as assert from "assert"
import * as path from "path"

export type result = {
    shell: iterDb.IterDbShell,
    port: number
}

export const parseConsoleArgs = (): result => {
    const args = process.argv
    const params: {
        filePath: null | string,
        token: string
        writeDelay: number,
        unref: boolean,
        port: number
    } = {
        filePath: null,
        token: uuid(),
        writeDelay: 3000,
        unref: false,
        port: 3000
    }
    args.forEach((a, i) => {
        if (a === "-at") {
            assert.ok(args[i + 1], "no auth-token value for flag -at")
            params.token = args[i + 1]
        } else if (a === "-fp") {
            assert.ok(args[i + 1], "no file-path value for flag -fp")
            params.filePath = path.resolve(args[i + 1])
        } else if (a === "-wd") {
            params.writeDelay = parseInt(args[i + 1])
        } else if (a === "-u") {
            assert.ok(
                (!!args[i + 1]) && ((args[i + 1] === "1") || (args[i + 1] === "0")),
                "unlink parameter must be equal 0 or 1"
            )
            params.unref = args[i + 1] === "0" ? false : true
        } else if (a === "-p") {
            params.port = parseInt(args[i + 1])
        }
    })
    console.log("authToken: " + params.token)
    return {
        shell: new iterDb.IterDbShell(new iterDb.IterDb(), {
            token: params.token,
            filepath: params.filePath,
            unref: params.unref,
            fileDelay: params.writeDelay
        }),
        port: params.port
    }
}