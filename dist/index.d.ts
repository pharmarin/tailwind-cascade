import { ClassValue } from "classnames/types";
/** Create cascader
 * @param prefix: Optional classname prefix
 * @returns Cascader function
 */
export declare function createTailwindCascader({ prefix }?: {
    prefix?: string;
}): (...args: ClassValue[]) => string;
/** TailwindCSS cascader
 * Like Classnames, but overrides according to TailwindCSS cascade groups
 */
export declare const twCascade: (...args: ClassValue[]) => string;
