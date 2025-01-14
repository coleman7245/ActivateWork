let recursionTrace = 0;

function recursiveCall() {
    recursionTrace++;
    return recursiveCall();
}

try {
    recursiveCall();
}
catch(e) {
    console.log(recursionTrace);
}

function flattenArrays(arrays, depth) {
    if (depth === 0)
        return arrays.flat(0);
    else {
        let flattenedArrays = arrays.flat(depth);
        return flattenArrays(flattenedArrays, depth - 1);
    }
}

let arr = [[1], [1], [[2], [[3], [3, [4]]], [2]]];

try {
    arr = flattenArrays(arr, 3);
}
catch (e) {
    console.log(e);
}

console.log(arr);