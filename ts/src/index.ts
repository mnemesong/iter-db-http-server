import { parseConsoleArgs, result } from "./IterDbConsoleArgParser"
import { runHttpServer } from "./IterDbHttpServer"

const argsParseResult = parseConsoleArgs()

const shell = argsParseResult.shell
if (argsParseResult.server === "http") {
    runHttpServer(shell, argsParseResult.port)
}