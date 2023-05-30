var listingPrice = 799;
var sellingPrice = 199;

var discountPercentage = Math.round(((listingPrice-sellingPrice)/listingPrice)*100);
console.log(discountPercentage + "% off");