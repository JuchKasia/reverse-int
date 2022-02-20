module.exports = function reverse(n) {
    n = Math.abs(n);
    let number = n.toString().split('').reverse().join("");
    number = Number(number);
    return number;
}; 
