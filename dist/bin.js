"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const cores = os_1.default.cpus().length;
for (let i = 0; i < cores; i++) {
    if (cluster_1.default.isPrimary) {
        cluster_1.default.fork();
    }
    else {
        _1.app.listen(3000, () => {
            console.log("cluster process started");
        });
    }
}
