"use strict";
// check through each line in file
// find first and last digit in line 
// - there may be 1-n digits in each line.
// - in the case of 1 digit, it is both the first and last digit
// - in the case of n, only first and last
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// for each line in file
// have array of digits as strings, check if char matches that
// e.g. if '1' is in ['1','2','3', '4', '5', '6','7','8','9','0']
// two variables: first and last
// initially, let first and last = first digit 
// as more digits are found in line, let last = next digit
// when end of line, add two strings first and last together
// convert this to int, and then add to sum
var fs = __importStar(require("fs"));
var fileData = fs.readFileSync('input.txt', 'utf-8');
console.log(fileData);
