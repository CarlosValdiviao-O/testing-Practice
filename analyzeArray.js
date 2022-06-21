function analyzeArray (array) {
    let obj = {};
    let sum = array[0];
    obj.length = array.length;
    obj.min = array[0];
    obj.max = array[0];

    for (let i = 1 ; i < array.length ; i ++) {
        sum += array[i];
        if (array[i] > obj.max) obj.max = array[i];
        if (array[i] < obj.min) obj.min = array[i];
    }

    obj.average = sum/array.length; 
    return obj;
}

module.exports = analyzeArray;