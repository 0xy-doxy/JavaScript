// Immediately Invoked Function Expressions (IIFE)

//syntax :
// (function definition)(function execution)

(function coffee(){  // Named IIFE
    console.log(`DB CONNECTED`);
})();                                // ***IMP : Always use semi-colon if your using two iife's concurrently.

( (any) => {
    console.log(`DB CONNECTED TWO ${any}`);
}     )('AGAIN')