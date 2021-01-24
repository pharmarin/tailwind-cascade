"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twCascade = exports.createTailwindCascader = void 0;
var classnames_1 = __importDefault(require("classnames"));
var rules_1 = require("./rules");
/** Create cascader
 * @param prefix: Optional classname prefix
 * @returns Cascader function
 */
function createTailwindCascader(_a) {
    var prefix = (_a === void 0 ? {} : _a).prefix;
    var classify = rules_1.createClassifier(prefix);
    /** TailwindCSS cascader
     * Like Classnames, but overrides according to TailwindCSS cascade groups
     */
    return function twcx() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var memo = {};
        for (var _a = 0, _b = classnames_1.default.apply(void 0, args).split(" "); _a < _b.length; _a++) {
            var className = _b[_a];
            var result = classify(className);
            if (!result) {
                // prefix doesn't match, no group
                memo[className] = className;
            }
            else {
                var variant = result.variant, group = result.group, overrides = result.overrides;
                for (var _c = 0, overrides_1 = overrides; _c < overrides_1.length; _c++) {
                    var ov = overrides_1[_c];
                    delete memo["" + variant + ov];
                }
                memo["" + variant + group] = className;
            }
        }
        return Object.values(memo).join(" ");
    };
}
exports.createTailwindCascader = createTailwindCascader;
/** TailwindCSS cascader
 * Like Classnames, but overrides according to TailwindCSS cascade groups
 */
exports.twCascade = createTailwindCascader();
