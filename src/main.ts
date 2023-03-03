import * as core from '@actions/core'
import { compare } from './compare';

async function run(): Promise<void> {
    try {
        const firstToCompare: string = core.getInput('first');
        const secondToCompare: string = core.getInput('second');
        var operator: string = core.getInput('operator');

        const result = compare(firstToCompare, secondToCompare, operator);
        core.setOutput("result", result);
        console.log(`'${firstToCompare} ${operator} ${secondToCompare}' comparison result is ${result}`);
        
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();