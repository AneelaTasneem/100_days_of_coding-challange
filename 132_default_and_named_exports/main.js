"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add1 = void 0;
// default exports are used when you want to export a single value or functionality from a module, while named exports are used when you want to export multiple values or functionalities from a module and need to import them using their specific names.
// DEFAULT EXPORT:
// 1:A module can only have one default export. It is designated as the "default" export.
//2:When importing a default export, you can choose any name for the imported value. For example, import MyComponent from './MyComponent'; where MyComponent is the default export of the module.
//3:You can directly export a value as default by using export default keyword followed by the value you want to export.
// 5:example:
const add = (a, b) => a + b;
exports.default = add;
//5:When importing a default export, you don't need to use curly braces {} around the import statement.
//NAMED EXPORT:
// 1: A module can have multiple named exports. Each named export is identified by its name.
//2 :When importing a named export, you need to use the exact name of the export enclosed in curly braces {}. For example, import { add, subtract } from './math'; where add and subtract are named exports of the module.
// 3: You export a value as a named export by using export keyword followed by the value and its name in curly braces.
// 4: Example:
const add1 = (a, b) => a + b;
exports.add1 = add1;
const subtract = (a, b) => a - b;
exports.subtract = subtract;
//When importing a named export, you must use the exact name of the export inside curly braces.
