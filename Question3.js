//3. Return the distinct values from the list [1 3 5 3 7 3 1 1 5] -> [1 3 5 7]
var list1 = [1, 3, 5, 3, 7, 3, 1, 1, 5];

var distinctValues = (list1) => {
    var result = [];
    if (list1.length === 0) return result; 

    for (let val of list1) {
        if (!result.includes(val.toString())) {
            result.push(val);
        } else {
            continue;
        }
    }

    return result;
}