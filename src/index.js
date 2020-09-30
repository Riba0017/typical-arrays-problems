
exports.min = function min (array) {
    if(array == undefined || array.length == 0) return 0;
    let min = array[0];
    array.forEach(item => {
        if(item < min) min = item;
    });
    return min;
};

exports.max = function max (array) {
    if(array == undefined || array.length == 0) return 0;
    let max = array[0];
    array.forEach(item => {
        if(item > max) max = item;
    });
    return max;
};

exports.avg = function avg (array) {
    if(array == undefined || array.length == 0) return 0;
    let sum = array.reduce((prev, cur) => {
        return prev + cur
    }, 0);
    return sum / array.length;
};
