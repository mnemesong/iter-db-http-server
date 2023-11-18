#!/usr/bin/env node
import { parseConsoleArgs } from "./console-arg-parser"
import { runHttpServer } from "./iter-db-http-server"

const argsParseResult = parseConsoleArgs()

const shell = argsParseResult.shell
if (argsParseResult.server === "http") {
    runHttpServer(shell, argsParseResult.port)
}