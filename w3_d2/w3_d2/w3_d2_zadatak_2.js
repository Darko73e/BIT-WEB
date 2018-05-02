var a = [3, 500, -10, 149, 53, 414, 1, 19];
var b = [];
var array = function (a) {


    for (i = 0; i < a.length; i++) {
        if ((a[i] / 2) + 5 === 0) {
            a[i] = 20;
        } else {
            a[i] = (a[i] / 2) + 5;
        }
    }
    return a;
}
b = array(a);
console.log(b);
