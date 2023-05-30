var indianCities = 
["Lucknow",
     "Delhi",
      "Kanpur",
       "Mumbai",
       1966,
        "Kolkata",
         "Banglore"];
for(let i=0; i<indianCities.length; i++)
{
    if(typeof indianCities[i] !== "string") 
    continue;
    else
    console.log(indianCities[i]);
}