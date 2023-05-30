var geek = {
    firstName: "Pranjul",
    lastName: "Tiwari",
    pinCode: "226003",
    watchCount:0,
    watches: [],
    buyWatches: function(watchBrand)
    {
        this.watches.push(watchBrand);
       
    },
    getWatchCount: function(watchCount)
    {
        return `${this.watches.length}`;
    }

}
geek.buyWatches("Rolex")
console.log(geek.watches);
console.log(geek.getWatchCount());
console.log(geek.pinCode);