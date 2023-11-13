import * as iterDb from "iter-db"
import { v4 as uuid } from "uuid";

export const parseConsoleArgs = (): iterDb.ListNetShell => {
    const listDbParamIndex = process.argv.indexOf("list-db")
    if (listDbParamIndex === -1) {
        throw new Error("no console call")
    }
    const args = process.argv.filter((v, i) => (i > listDbParamIndex))
    const argsPairs: { f: string, v: string }[] = []
    for (let i = Math.round(args.length / 2); i > 0; i--) {
        if (!args[i * 2 + 1]) {
            throw new Error("count of console arguments should be even")
        }
        const a1Chars = Array.from(args[i * 2])
        if (a1Chars[0] !== "-") {
            throw new Error("unexpected flag " + args[i * 2]
                + ". Flag should start with '-' char")
        }
        argsPairs.push({ f: args[i * 2], v: args[i * 2 + 1] })
    }
    const params: {
        filePath: null | string,
        token: string
    } = {
        filePath: null,
        token: uuid()
    }
    argsPairs.forEach(ap => {
        if (ap.f === "-t") {
            params.token = ap.v
        } else if (ap.f === "-p") {
            params.filePath = ap.v
        } else {
            throw new Error("Unexpected flag: " + ap.f
                + ". available flags: -t (auth-token), -p (file-path)")
        }
    })
    return new ListNetShell(new ListDb(), params.token, params.filePath)
}