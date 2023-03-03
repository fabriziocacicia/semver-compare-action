import * as compareVersions from "compare-versions";

function isValidOperator(operator: string): boolean {
    return ['>', '<', '=', '<=', '>='].includes(operator);
}

export function compare(firstToCompare: string, secondToCompare: string, operator: string): boolean {
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
    return compareVersions.compare(firstToCompare, secondToCompare, operator as compareVersions.CompareOperator)
}

