// The receivesAFunction function should: 
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function name(params) {

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const cb = function() {
        console.log('Hello World');
    }
    return cb;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Waddup World')
    }
}

