"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassifier = void 0;
var escape_regex_string_1 = __importDefault(require("escape-regex-string"));
var _a = require("./generated-rules.json"), DEFINITIONS = _a.definitions, OVERRIDES = _a.overrides;
function createClassifier(prefix) {
    if (prefix === void 0) { prefix = ""; }
    var extractRegex = new RegExp("^([^:]+:)?" + escape_regex_string_1.default(prefix || "") + "(.*)$");
    return function classify(className) {
        var m = extractRegex.exec(className);
        if (!m) {
            return undefined;
        }
        var _a = m[1], variant = _a === void 0 ? "" : _a, key = m[2];
        var group = DEFINITIONS[key];
        if (!group) {
            return undefined;
        }
        var overrides = OVERRIDES[group] || [];
        return { variant: variant, group: group, overrides: overrides };
    };
}
exports.createClassifier = createClassifier;
