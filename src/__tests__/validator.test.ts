import { expect, test } from '@jest/globals'
import { __test__ } from '../compare';

test('should return `false` if an invalid operator is given', () => {
    expect(function() {__test__.isValidOperator('!')}).toBeFalsy;
});

test('should return `true` if a valid operator is given', () => {
    expect(function() {__test__.isValidOperator('=')}).toBeTruthy;
    expect(function() {__test__.isValidOperator('>')}).toBeTruthy;
    expect(function() {__test__.isValidOperator('<')}).toBeTruthy;
    expect(function() {__test__.isValidOperator('>=')}).toBeTruthy;
    expect(function() {__test__.isValidOperator('<=')}).toBeTruthy;
});