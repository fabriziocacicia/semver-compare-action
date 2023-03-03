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
exports.compare = exports.__test__ = void 0;
const compareVersions = __importStar(require("compare-versions"));
function isValidOperator(operator) {
    return ['>', '<', '=', '<=', '>='].includes(operator);
}
exports.__test__ = {
    isValidOperator
};
function compare(firstToCompare, secondToCompare, operator) {
    if (!firstToCompare) {
        throw new Error("'first' input is missing");
    }
    if (!secondToCompare) {
        throw new Error("'second' input is missing");
    }
    if (operator) {
        if (!isValidOperator(operator)) {
            throw new Error(`Unvalid operator ${operator}. Only the following ar allowed: '>', '<', '=', '<=', '>='`);
        }
    }
    else {
        operator = '>';
    }
    // Cast to CompareOperator can be made since the `operator` content has been already checked.
    return compareVersions.compare(firstToCompare, secondToCompare, operator);
}
exports.compare = compare;
