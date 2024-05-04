// Immediately Invoked Function Expression (IIFE)
// To use more then one IIFE you have to terminate every IIFE by using semicolon ;

//Named IIFE
(function one(){
    console.log(`DB CONNECTED`);
})();   // ; use to end iife code

// Without Named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('Suraj')