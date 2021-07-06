console.log("###-- Problem:  trading Apple stocks --###");

//Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.
//
// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
//
// So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:
//
// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.
//
// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
//
// For example:
//
//   stock_prices = [10, 7, 5, 8, 11, 9]
//
// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)
//
// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
//
// Gotchas
// You can't just take the difference between the highest price and the lowest price, because the highest price might come before the lowest price. And you have to buy before you can sell.
//
// What if the price goes down all day? In that case, the best profit will be negative.
//
// You can do this in O(n)O(n) time and O(1)O(1) space!

function getMaxProfit(prices : Array<number>){
    if(prices.length < 2) throw Error('There should be at least 2 prices')

    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];

    prices.forEach((currentPrice, index) => {
        if(index === 0){}
        else {
            let potentialProfit = currentPrice - minPrice;
            maxProfit = Math.max(maxProfit, potentialProfit);
            minPrice = Math.min(minPrice, currentPrice);
        }
    })

    return maxProfit;
}

const stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

console.log(getMaxProfit(stock_prices_yesterday))
// returns 6 (buying for $5 and selling for $11)
