/* Sock Merchant:
* John works at a clothing store. 
* He has a large pile of socks that he must pair by color for sale. 
* Given an array of integers representing the color of each sock, 
* determine how many pairs of socks with matching colors there are.
* link: https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
    let aux = {};

    ar.forEach(a => {
        if (!aux[a]) {
            aux[a]=1;
        } else {
            aux[a]++;
        }
    });
    let auxPairs = 0;
    Object.keys(aux).forEach(key => {
        auxPairs += Math.floor(aux[key] / 2);
    })
    return auxPairs;
}
