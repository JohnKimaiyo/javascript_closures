var a = 10;

function outer(){
    var b = 10;

    function inner(){
        console.log(a);
        console.log(b);
    }
    inner();
}

outer();

