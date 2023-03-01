const core = require('@actions/core');
const compareVersions = require('compare-versions');

const isValidOperator = function(operator) {
    return ['>', '<', '=', '<=', '>='].includes(operator);
}

try {
    const firstToCompare = core.getInput('first');
    const secondToCompare = core.getInput('second');
    const operator = core.getInput('operator');

    if(!firstToCompare){
        throw new Error("'first' input is missing")
    }

    if(!secondToCompare){
        throw new Error("'second' input is missing")
    }
    
    console.log(`Operator ${operator}`);
    if(operator) {
        if(!isValidOperator(operator)) {
            throw new Error(`Unvalid operator ${operator}. Only the following ar allowed: '>', '<', '=', '<=', '>='`)
        }
    } else {
        operator = '>'
    }

  const result = compareVersions.compare(firstToCompare, secondToCompare, operator)
  core.setOutput("result", result);
  console.log(`Comparison result is ${result}`);

} catch (error) {
  core.setFailed(error.message);
}