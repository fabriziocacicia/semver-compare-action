import { expect, test, jest } from '@jest/globals'
import { compare } from '../compare';
import * as compareVersions from "compare-versions";

jest.mock('compare-versions');
let spiedCompare: jest.Spied<typeof compareVersions.compare>;
spiedCompare = jest.spyOn(compareVersions, 'compare');


test('should call compare from compare-versions', () => {
    compare('v0.0.0', 'v0.0.0', '=');
    expect(spiedCompare).toHaveBeenCalled();
});

test('should call compare from compare-versions just once', () => {
    compare('v0.0.0', 'v0.0.0', '=');
    expect(spiedCompare).toHaveBeenCalledTimes(1);
});

test('should throw if the `first` argument is missing', () => {
    expect(function() {compare('', 'v0.0.0', '=')} ).toThrowError();
});

test('should throw if the `second` argument is missing', () => {
    expect(function() {compare('v0.0.0', '', '=')} ).toThrowError();
});

test('should use the default `>` operator if the `operator` argument is missing', () => {
    compare('v0.0.0', 'v0.0.0', '');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '>');
});

test('should use the operator given as argument to do the comparison', () => {
    compare('v0.0.0', 'v0.0.0', '>');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '>');
    compare('v0.0.0', 'v0.0.0', '<');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '>');
    compare('v0.0.0', 'v0.0.0', '=');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '=');
    compare('v0.0.0', 'v0.0.0', '>=');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '>=');
    compare('v0.0.0', 'v0.0.0', '<=');
    expect(spiedCompare).toHaveBeenCalledWith('v0.0.0', 'v0.0.0', '<=');
});

test('should throw if the given operator is not a valid one', () => {
    expect(function() {compare('v0.0.0', 'v0.0.0', '!')}).toThrowError();
});

