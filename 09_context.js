 var boxes = 100;  //Global context kicks in

var input = function()
{
    console.log("My name is Pranjul");
}

input();   //execution contxt kicks in 

//function declarations are scanned and made available.

sigmaMale();

function sigmaMale()
{
    console.log("Rule number 1: Love Yourself");
}


//variable declarations are scanned and made undefined.

console.log(bill);
var bill= 100;