 var myName = "Pranjul";

 console.log("This is Line number 3 " + myName);

 function initialize(){
    console.log("This is line number 6 " + myName);
    // var myName = "Mr.Pranjul";
    initialize2();

    function initialize2()
    {
        console.log("This is line number 10 " + myName );
    }
 }
 initialize();