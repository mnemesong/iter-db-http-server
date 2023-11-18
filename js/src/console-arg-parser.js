"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConsoleArgs = exports.serverTypes = void 0;
var iterDb = __importStar(require("iter-db"));
var uuid_1 = require("uuid");
var assert = __importStar(require("assert"));
var path = __importStar(require("path"));
exports.serverTypes = ["http"];
var parseConsoleArgs = function () {
    var args = process.argv;
    var params = {
        filePath: null,
        token: (0, uuid_1.v4)(),
        writeDelay: 3000,
        server: "http",
        unref: false,
        port: 3000
    };
    args.forEach(function (a, i) {
        if (a === "-at") {
            assert.ok(args[i + 1], "no auth-token value for flag -at");
            params.token = args[i + 1];
        }
        else if (a === "-fp") {
            assert.ok(args[i + 1], "no file-path value for flag -fp");
            params.filePath = path.resolve(args[i + 1]);
        }
        else if (a === "-st") {
            assert.ok(args[i + 1], "no server-type value for flag -st");
            assert.ok(exports.serverTypes.includes(args[i + 1]), "Invalid server type");
            params.server = args[i + 1];
        }
        else if (a === "-wd") {
            params.writeDelay = parseInt(args[i + 1]);
        }
        else if (a === "-u") {
            assert.ok((!!args[i + 1]) && ((args[i + 1] === "1") || (args[i + 1] === "0")), "unlink parameter must be equal 0 or 1");
            params.unref = args[i + 1] === "0" ? false : true;
        }
        else if (a === "-p") {
            params.port = parseInt(args[i + 1]);
        }
    });
    console.log("authToken: " + params.token);
    return {
        shell: new iterDb.IterDbShell(new iterDb.IterDb(), {
            token: params.token,
            filepath: params.filePath,
            unref: params.unref,
            fileDelay: params.writeDelay
        }),
        server: params.server,
        port: params.port
    };
};
exports.parseConsoleArgs = parseConsoleArgs;
