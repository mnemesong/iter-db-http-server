#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_arg_parser_1 = require("./console-arg-parser");
var iter_db_http_server_1 = require("./iter-db-http-server");
var argsParseResult = (0, console_arg_parser_1.parseConsoleArgs)();
var shell = argsParseResult.shell;
(0, iter_db_http_server_1.runHttpServer)(shell, argsParseResult.port, argsParseResult.corsAllowOrigin);
