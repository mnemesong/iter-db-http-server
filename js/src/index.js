"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterDbConsoleArgParser_1 = require("./IterDbConsoleArgParser");
var IterDbHttpServer_1 = require("./IterDbHttpServer");
var argsParseResult = (0, IterDbConsoleArgParser_1.parseConsoleArgs)();
var shell = argsParseResult.shell;
if (argsParseResult.server === "http") {
    (0, IterDbHttpServer_1.runHttpServer)(shell, argsParseResult.port);
}
