//1. Reverse the string "Josephine"
var str1 = "Josephine";

var reverseString = (str1) => {
    if (str1.length === 0) return null;

    let result = [];
    for (let i = 0; i < str1.length/2; i++) {
        let temp = str1.charAt(i);
        result[i] = str1.charAt(str1.length - i - 1);
        result[str1.length - i - 1] = temp;
    }
    return result.toString();
}