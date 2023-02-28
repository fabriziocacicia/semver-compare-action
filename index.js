const core = require('@actions/core');
const compareVersions = require('compare-versions');

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

    if(operator) {
        if(['>', '<', '=', '<=', '>='].includes(arg.operator)) {
            throw new Error(`Unvalid operator ${arg.operator}. Only the following ar allowed: '>', '<', '=', '<=', '>='`)
        }
    } else {
        operator = '>'
    }

  const result = compareVersions.compare(argv.head, argv.base, operator)
  core.setOutput("result", result);

} catch (error) {
  core.setFailed(error.message);
}