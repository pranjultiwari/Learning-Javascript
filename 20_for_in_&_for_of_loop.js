const names = ["Hello", "Namaste", "Bonjour", "hola"];
for(const n of names)
{
    console.log(n);
}


const brands = {
    clothing : "Chanel",
    sunglasses : "Chopard",
    shoes : "Jimmy choo",
    watch : "Rolex",

}

for(const n in brands)
{
    console.log(`The most expensive brand in ${n} is ${brands[n]}`);
}