import * as core from '@actions/core'
import { compare, CompareOperator } from 'compare-versions';

function isValidOperator(operator: string): boolean {
    return ['>', '<', '=', '<=', '>='].includes(operator);
}

async function run(): Promise<void> {
    try {
        const firstToCompare: string = core.getInput('first');
        const secondToCompare: string = core.getInput('second');
        var operator: string = core.getInput('operator');

        if(!firstToCompare){
            throw new Error("'first' input is missing")
        }
    
        if(!secondToCompare){
            throw new Error("'second' input is missing")
        }
        
        if(operator) {
            if(!isValidOperator(operator)) {
                throw new Error(`Unvalid operator ${operator}. Only the following ar allowed: '>', '<', '=', '<=', '>='`)
            }
        } else {
            operator = '>'
        }
    
        // Cast to CompareOperator can be made since the `operator` content has been already checked.
        const result = compare(firstToCompare, secondToCompare, operator as CompareOperator)
        core.setOutput("result", result);
        console.log(`'${firstToCompare} ${operator} ${secondToCompare}' comparison result is ${result}`);
        
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();