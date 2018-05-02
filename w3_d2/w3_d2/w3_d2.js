var a = [3, 500, 12, 149, 53, 414, 1, 19];
var b = [];

var switchPlaces = function (a) {
    var min = a[0];
    var minPosition = 0;

    var max = a[0];
    var maxPosition = 0;


    // 7 11 2 4 

    //min = 2, minPosition = 1
    //max = 11, maxPosition = 2


    for (i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            minPosition = i;
        }

        if (a[i] > max) {
            max = a[i];
            maxPosition = i;

        }
    }

    //
    //a[maxPosition] a[minPosition] 

    // var tmp = a[maxPosition];
    // a[maxPosition] = a[minPosition];
    // a[maxPosition] = tmp;

    a[maxPosition] = min;
    a[minPosition] = max;


    return a;
}

b = switchPlaces(a);

console.log(b);

