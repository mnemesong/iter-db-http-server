"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runHttpServer = exports.parseConsoleArgs = void 0;
var console_arg_parser_1 = require("./console-arg-parser");
Object.defineProperty(exports, "parseConsoleArgs", { enumerable: true, get: function () { return console_arg_parser_1.parseConsoleArgs; } });
var iter_db_http_server_1 = require("./iter-db-http-server");
Object.defineProperty(exports, "runHttpServer", { enumerable: true, get: function () { return iter_db_http_server_1.runHttpServer; } });
