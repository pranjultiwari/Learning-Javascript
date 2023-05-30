// fallacy values-
// undefined
// null
// 0
// ''
// NaN
//  when a variable is declared but the value is not assigned to the variable then it acts as null. or When the data is fetched from the website then if it is not found the null is returned.
var user;
if(user)
{
    console.log("condition is true");
}

// here the '==' is used so javascript just compares the value of the two variables but not the data type.

var input = "2";
if(2 == input)
{
    console.log("condition is correct");
}
else{
    console.log("condition is incorrect");
}

// to also compare the data type (int, float, boolean, string etc) we use "===".

var input = "3";
if (3 === input) 
{
    console.log("checked");    
}
else{
    console.log("unchecked");
}
