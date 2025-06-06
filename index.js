function receivesAFunction (thing){
    return thing ()
}
receivesAFunction (function(){return 3 + 2})

function returnsANamedFunction() {
    function jomo() {return 3 + 2;}
    return jomo;
}

function returnsAnAnonymousFunction(){
    return function () { return 3 * 2; };
}