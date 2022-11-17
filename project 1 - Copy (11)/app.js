var a = 10;

function outer(){
    var b = 10;

    var inner = function(){

        console.log(a);
        console.log(b);
    };

    return inner;
}


var innerfn = outer();

innerf